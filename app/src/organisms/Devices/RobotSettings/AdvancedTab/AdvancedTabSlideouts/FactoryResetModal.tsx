import * as React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import last from 'lodash/last'
import { useHistory } from 'react-router-dom'

import {
  Flex,
  COLORS,
  DIRECTION_COLUMN,
  JUSTIFY_FLEX_END,
  SPACING,
  Link,
  TYPOGRAPHY,
  ALIGN_CENTER,
} from '@opentrons/components'
import { StyledText } from '../../../../../atoms/text'
import { AlertPrimaryButton, PrimaryButton } from '../../../../../atoms/buttons'
import { Modal } from '../../../../../atoms/Modal'
import {
  useDispatchApiRequest,
  getRequestById,
  SUCCESS,
  PENDING,
} from '../../../../../redux/robot-api'
import { resetConfig } from '../../../../../redux/robot-admin'

import type { IconProps } from '@opentrons/components'
import type { State } from '../../../../../redux/types'
import type { ResetConfigRequest } from '../../../../../redux/robot-admin/types'

interface FactoryResetModalProps {
  closeModal: () => void
  isRobotConnected: boolean
  robotName: string
  resetOptions?: ResetConfigRequest
}

export function FactoryResetModal({
  closeModal,
  isRobotConnected,
  robotName,
  resetOptions,
}: FactoryResetModalProps): JSX.Element {
  const reconnectModalIcon: IconProps = {
    name: 'alert-circle',
    color: COLORS.blue,
  }
  const { t } = useTranslation(['device_settings', 'shared'])
  const history = useHistory()
  const [dispatchRequest, requestIds] = useDispatchApiRequest()
  const resetRequestStatus = useSelector((state: State) => {
    const lastId = last(requestIds)
    return lastId != null ? getRequestById(state, lastId) : null
  })?.status

  const triggerReset = (): void => {
    if (resetOptions != null) {
      dispatchRequest(resetConfig(robotName, resetOptions))
      history.push(`/devices/`)
    }
  }

  React.useEffect(() => {
    if (resetRequestStatus === SUCCESS) closeModal()
  }, [resetRequestStatus, closeModal])

  const PENDING_STATUS = resetRequestStatus === PENDING

  return (
    <>
      {isRobotConnected ? (
        <Modal
          type="warning"
          title={t('reset_to_factory_settings')}
          onClose={closeModal}
        >
          <Flex flexDirection={DIRECTION_COLUMN}>
            <StyledText as="p" paddingBottom={SPACING.spacing5}>
              {t('factory_reset_modal_description')}
            </StyledText>
            <Flex justifyContent={JUSTIFY_FLEX_END} alignItems={ALIGN_CENTER}>
              <Link
                role="button"
                onClick={closeModal}
                textTransform={TYPOGRAPHY.textTransformCapitalize}
                marginRight={SPACING.spacing5}
                css={TYPOGRAPHY.linkPSemiBold}
                fontWeight={TYPOGRAPHY.fontWeightSemiBold}
              >
                {t('shared:cancel')}
              </Link>
              <AlertPrimaryButton
                onClick={triggerReset}
                disabled={PENDING_STATUS}
              >
                {t('yes_clear_data_and_restart_robot')}
              </AlertPrimaryButton>
            </Flex>
          </Flex>
        </Modal>
      ) : (
        <Modal
          title={t('connection_to_robot_lost')}
          icon={reconnectModalIcon}
          onClose={closeModal}
        >
          <StyledText
            as="p"
            marginBottom={SPACING.spacing5}
            paddingBottom={SPACING.spacing5}
          >
            {t('connection_lost_description')}
          </StyledText>
          <Flex justifyContent={JUSTIFY_FLEX_END}>
            <PrimaryButton
              onClick={closeModal}
              textTransform={TYPOGRAPHY.textTransformCapitalize}
            >
              {t('shared:close')}
            </PrimaryButton>
          </Flex>
        </Modal>
      )}
    </>
  )
}
