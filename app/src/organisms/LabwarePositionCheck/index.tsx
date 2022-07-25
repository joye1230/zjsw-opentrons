import * as React from 'react'
import { useTranslation } from 'react-i18next'
import {
  AlertModal,
  Box,
  ModalPage,
  SPACING_2,
  Text,
  useConditionalConfirm,
} from '@opentrons/components'
import { Portal } from '../../App/portal'
import { useLogger } from '../../logger'
import { useTrackEvent } from '../../redux/analytics'
import { useRestartRun } from '../ProtocolUpload/hooks'
import { useLabwarePositionCheck } from './hooks'
import { IntroScreen } from './IntroScreen'
import { GenericStepScreen } from './GenericStepScreen'
import { SummaryScreen } from './SummaryScreen'
import { RobotMotionLoadingModal } from './RobotMotionLoadingModal'
import { ConfirmPickUpTipModal } from './ConfirmPickUpTipModal'
import { ExitPreventionModal } from './ExitPreventionModal'
import styles from './styles.css'

interface LabwarePositionCheckModalProps {
  onCloseClick: () => unknown
  runId: string
  caughtError?: Error
}

const LabwarePositionCheckComponent = (
  props: LabwarePositionCheckModalProps
): JSX.Element | null => {
  const { t } = useTranslation(['labware_position_check', 'shared'])
  const restartRun = useRestartRun()
  const trackEvent = useTrackEvent()
  const [
    savePositionCommandData,
    savePositionCommandDataDispatch,
  ] = React.useReducer(
    (
      state: { [labwareId: string]: string[] },
      action: { labwareId: string; commandId: string }
    ) => {
      const { labwareId, commandId } = action
      const nextCommandList =
        state[labwareId] != null
          ? // if there are already two command ids, overwrite the second one with the new one coming in
            // this is used when there is an unsuccessful pick up tip, and additional pick up tip attempts occur
            [state[labwareId][0], commandId]
          : [commandId]
      return {
        ...state,
        [labwareId]: nextCommandList,
      }
    },
    {}
  )
  const [isRestartingRun, setIsRestartingRun] = React.useState<boolean>(false)
  const {
    confirm: confirmExitLPC,
    showConfirmation,
    cancel: cancelExitLPC,
  } = useConditionalConfirm(props.onCloseClick, true)

  // at the end of LPC, each labwareId will have 2 associated save position command ids which will be used to calculate the labware offsets
  const addSavePositionCommandData = (
    commandId: string,
    labwareId: string
  ): void => {
    savePositionCommandDataDispatch({ labwareId, commandId })
  }
  const labwarePositionCheckUtils = useLabwarePositionCheck(
    addSavePositionCommandData,
    savePositionCommandData
  )

  if ('error' in labwarePositionCheckUtils) {
    // show the modal for 5 seconds, then unmount and restart the run
    if (!isRestartingRun) {
      setTimeout(() => restartRun(), 5000)
      setIsRestartingRun(true)
      const { name, message } = labwarePositionCheckUtils.error
      trackEvent({
        name: 'labwarePositionCheckFailed',
        properties: { error: { message, name } },
      })
    }
    const { error } = labwarePositionCheckUtils
    return (
      <Portal level="top">
        <AlertModal
          heading={t('error_modal_header')}
          iconName={null}
          buttons={[
            {
              children: t('shared:close'),
              onClick: props.onCloseClick,
            },
          ]}
          alertOverlay
        >
          <Box>
            <Text>{t('error_modal_text')}</Text>
            <Text marginTop={SPACING_2}>Error: {error.message}</Text>
          </Box>
        </AlertModal>
      </Portal>
    )
  }

  const {
    beginLPC,
    proceed,
    ctaText,
    currentCommandIndex,
    currentStep,
    showPickUpTipConfirmationModal,
    onUnsuccessfulPickUpTip,
    isComplete,
    titleText,
    isLoading,
    jog,
  } = labwarePositionCheckUtils

  let modalContent: JSX.Element
  if (isLoading) {
    modalContent = (
      <ModalPage
        contentsClassName={styles.modal_contents}
        titleBar={{
          title: t('labware_position_check_title'),
          back: {
            onClick: confirmExitLPC,
            title: t('shared:exit'),
            children: t('shared:exit'),
          },
        }}
      >
        <RobotMotionLoadingModal title={titleText} />
      </ModalPage>
    )
  } else if (showConfirmation) {
    modalContent = (
      <ExitPreventionModal
        onGoBack={cancelExitLPC}
        onConfirmExit={confirmExitLPC}
      />
    )
  } else if (showPickUpTipConfirmationModal) {
    modalContent = (
      <ModalPage
        contentsClassName={styles.modal_contents}
        titleBar={{
          title: t('labware_position_check_title'),
          back: {
            onClick: confirmExitLPC,
            title: t('shared:exit'),
            children: t('shared:exit'),
          },
        }}
      >
        <ConfirmPickUpTipModal
          confirmText={ctaText}
          onConfirm={proceed}
          onDeny={onUnsuccessfulPickUpTip}
        />
      </ModalPage>
    )
  } else if (isComplete) {
    modalContent = (
      // TODO: all of the following cases have the same modal page wrapper, we can DRY
      // this up by creating one wrapper and pass in children
      <ModalPage
        contentsClassName={styles.modal_contents}
        titleBar={{
          title: t('labware_position_check_title'),
          back: {
            onClick: confirmExitLPC,
            title: t('shared:exit'),
            children: t('shared:exit'),
          },
        }}
      >
        <SummaryScreen
          savePositionCommandData={savePositionCommandData}
          onCloseClick={props.onCloseClick}
        />
      </ModalPage>
    )
  } else if (currentCommandIndex !== 0) {
    modalContent = (
      <ModalPage
        contentsClassName={styles.modal_contents}
        titleBar={{
          title: t('labware_position_check_title'),
          back: {
            onClick: confirmExitLPC,
            title: t('shared:exit'),
            children: t('shared:exit'),
          },
        }}
      >
        <GenericStepScreen
          selectedStep={currentStep}
          ctaText={ctaText}
          proceed={proceed}
          title={titleText}
          jog={jog}
          runId={props.runId}
          savePositionCommandData={savePositionCommandData}
        />
      </ModalPage>
    )
  } else {
    modalContent = (
      <ModalPage
        contentsClassName={styles.modal_contents}
        titleBar={{
          title: t('labware_position_check_title'),
          back: {
            onClick: confirmExitLPC,
            title: t('shared:exit'),
            children: t('shared:exit'),
          },
        }}
      >
        <IntroScreen beginLPC={beginLPC} />
      </ModalPage>
    )
  }
  return <Portal level="top">{modalContent}</Portal>
}

// We explicitly wrap LabwarePositionCheckComponent in an ErrorBoundary because an error might occur while pulling in
// the component's dependencies (like useLabwarePositionCheck). If we wrapped the contents of LabwarePositionCheckComponent
// in an ErrorBoundary as part of its return value (render), an error could occur before this point, meaning the error boundary
// would never get invoked
export const LabwarePositionCheck = (
  props: LabwarePositionCheckModalProps
): JSX.Element => {
  const logger = useLogger(__filename)
  return (
    <ErrorBoundary logger={logger} ErrorComponent={CrashingErrorModal}>
      <LabwarePositionCheckComponent {...props} />
    </ErrorBoundary>
  )
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  logger: ReturnType<typeof useLogger>
  ErrorComponent: (props: { errorMessage: string }) => JSX.Element
}
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { error: Error | null }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.logger.error(`LPC error message: ${error.message}`)
    this.props.logger.error(
      `LPC error component stack: ${errorInfo.componentStack}`
    )
    this.setState({
      error,
    })
  }

  render(): ErrorBoundaryProps['children'] | JSX.Element {
    const { ErrorComponent, children } = this.props
    const { error } = this.state
    if (error != null) return <ErrorComponent errorMessage={error.message} />
    // Normally, just render children
    return children
  }
}

interface CrashingErrorModalProps {
  errorMessage: string
}
function CrashingErrorModal(props: CrashingErrorModalProps): JSX.Element {
  const { t } = useTranslation(['labware_position_check', 'shared'])
  return (
    <Portal level="top">
      <AlertModal
        heading={t('error_modal_header')}
        iconName={null}
        alertOverlay
      >
        <Box>
          <Text>{t('error_modal_problem_in_app')}</Text>
          <Text marginTop={SPACING_2}>Error: {props.errorMessage}</Text>
        </Box>
      </AlertModal>
    </Portal>
  )
}
