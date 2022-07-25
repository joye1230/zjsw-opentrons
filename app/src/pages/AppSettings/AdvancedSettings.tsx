import * as React from 'react'
import { useTranslation } from 'react-i18next'
import path from 'path'
import { useSelector, useDispatch } from 'react-redux'
import { css } from 'styled-components'

import {
  Flex,
  Box,
  Link,
  Icon,
  DropdownField,
  RadioGroup,
  SPACING_AUTO,
  ALIGN_CENTER,
  JUSTIFY_SPACE_BETWEEN,
  COLORS,
  SPACING,
  TYPOGRAPHY,
  DIRECTION_COLUMN,
  useConditionalConfirm,
  JUSTIFY_FLEX_END,
  Btn,
  DIRECTION_ROW,
} from '@opentrons/components'

import * as Config from '../../redux/config'
import * as Calibration from '../../redux/calibration'
import * as CustomLabware from '../../redux/custom-labware'
import {
  clearDiscoveryCache,
  getReachableRobots,
  getUnreachableRobots,
} from '../../redux/discovery'
import { Modal } from '../../atoms/Modal'
import { Portal } from '../../App/portal'
import { Toast } from '../../atoms/Toast'
import { useTrackEvent } from '../../redux/analytics'
import {
  getU2EAdapterDevice,
  getU2EWindowsDriverStatus,
  OUTDATED,
} from '../../redux/system-info'
import { Divider } from '../../atoms/structure'
import {
  AlertPrimaryButton,
  TertiaryButton,
  ToggleButton,
} from '../../atoms/buttons'
import { StyledText } from '../../atoms/text'
import { Banner } from '../../atoms/Banner'

import type { Dispatch, State } from '../../redux/types'
import type { DropdownOption } from '@opentrons/components'

const ALWAYS_BLOCK: 'always-block' = 'always-block'
const ALWAYS_TRASH: 'always-trash' = 'always-trash'
const ALWAYS_PROMPT: 'always-prompt' = 'always-prompt'
const REALTEK_URL = 'https://www.realtek.com/en/'

const INPUT_STYLES = css`
  position: fixed;
  clip: rect(1px 1px 1px 1px);
`

type BlockSelection =
  | typeof ALWAYS_BLOCK
  | typeof ALWAYS_TRASH
  | typeof ALWAYS_PROMPT

export function AdvancedSettings(): JSX.Element {
  const { t } = useTranslation(['app_settings', 'shared'])
  const pythonDirectoryFileInput = React.useRef<HTMLInputElement>(null)
  const useTrashSurfaceForTipCal = useSelector((state: State) =>
    Config.getUseTrashSurfaceForTipCal(state)
  )
  const trackEvent = useTrackEvent()
  const devToolsOn = useSelector(Config.getDevtoolsEnabled)
  const channel = useSelector(Config.getUpdateChannel)
  const channelOptions: DropdownOption[] = useSelector(
    Config.getUpdateChannelOptions
  )
  const labwarePath = useSelector(CustomLabware.getCustomLabwareDirectory)
  const isLabwareOffsetCodeSnippetsOn = useSelector(
    Config.getIsLabwareOffsetCodeSnippetsOn
  )
  const isHeaterShakerAttachmentModalVisible = useSelector(
    Config.getIsHeaterShakerAttached
  )
  const pathToPythonInterpreter = useSelector(Config.getPathToPythonOverride)

  const dispatch = useDispatch<Dispatch>()
  const [showSuccessToast, setShowSuccessToast] = React.useState(false)
  const [showErrorToast, setShowErrorToast] = React.useState(false)
  const reachableRobots = useSelector((state: State) =>
    getReachableRobots(state)
  )
  const unreachableRobots = useSelector((state: State) =>
    getUnreachableRobots(state)
  )
  const recentlySeenRobots = reachableRobots.filter(
    robot => robot.healthStatus !== 'ok'
  )
  const isUnavailableRobots =
    unreachableRobots.length > 0 || recentlySeenRobots.length > 0

  const handleDeleteUnavailRobots = (): void => {
    if (isUnavailableRobots) {
      setShowSuccessToast(true)
      dispatch(clearDiscoveryCache())
    } else {
      setShowErrorToast(true)
    }
  }

  const {
    confirm: confirmDeleteUnavailRobots,
    showConfirmation: showConfirmDeleteUnavailRobots,
    cancel: cancelExit,
  } = useConditionalConfirm(handleDeleteUnavailRobots, true)

  const handleUseTrashSelection = (selection: BlockSelection): void => {
    switch (selection) {
      case ALWAYS_PROMPT:
        dispatch(Calibration.resetUseTrashSurfaceForTipCal())
        break
      case ALWAYS_BLOCK:
        dispatch(Calibration.setUseTrashSurfaceForTipCal(false))
        break
      case ALWAYS_TRASH:
        dispatch(Calibration.setUseTrashSurfaceForTipCal(true))
        break
    }
  }

  const device = useSelector(getU2EAdapterDevice)
  const driverOutdated = useSelector((state: State) => {
    const status = getU2EWindowsDriverStatus(state)
    return status === OUTDATED
  })

  const toggleLabwareOffsetData = (): unknown =>
    dispatch(
      Config.updateConfigValue(
        'labware.showLabwareOffsetCodeSnippets',
        Boolean(!isLabwareOffsetCodeSnippetsOn)
      )
    )

  const toggleHeaterShakerModalVisibilty = (): unknown =>
    dispatch(
      Config.updateConfigValue(
        'modules.heaterShaker.isAttached',
        Boolean(!isHeaterShakerAttachmentModalVisible)
      )
    )

  //  TODO(jr, 5/6/22): find another way to get webkitdirectory to work in the input DOM https://github.com/facebook/react/issues/3468
  React.useEffect(() => {
    if (pythonDirectoryFileInput.current !== null) {
      pythonDirectoryFileInput.current.setAttribute('directory', 'true')
      pythonDirectoryFileInput.current.setAttribute('webkitdirectory', 'true')
    }
  }, [pythonDirectoryFileInput])

  const handleClickPythonDirectoryChange: React.MouseEventHandler<HTMLButtonElement> = _event => {
    pythonDirectoryFileInput.current?.click()
    trackEvent({
      name: 'changePathToPythonDirectory',
      properties: {},
    })
  }

  const setPythonInterpreterDirectory: React.ChangeEventHandler<HTMLInputElement> = event => {
    const { files = [] } = event.target ?? {}
    const dirName =
      files?.[0]?.path != null ? path.dirname(files?.[0]?.path) : null
    dispatch(Config.updateConfigValue('python.pathToPythonOverride', dirName))
    event.target.value = ''
  }

  const toggleDevtools = (): unknown => dispatch(Config.toggleDevtools())
  const handleChannel: React.ChangeEventHandler<HTMLSelectElement> = event =>
    dispatch(Config.updateConfigValue('update.channel', event.target.value))
  const displayUnavailRobots = useSelector((state: State) => {
    return Config.getConfig(state)?.discovery.disableCache ?? false
  })

  return (
    <>
      <Box paddingX={SPACING.spacing4} paddingY={SPACING.spacing5}>
        <Flex
          alignItems={ALIGN_CENTER}
          justifyContent={JUSTIFY_SPACE_BETWEEN}
          gridGap={SPACING.spacing4}
        >
          {showSuccessToast && (
            <Toast
              message={t('successfully_deleted_unavail_robots')}
              type={'success'}
              onClose={() => setShowSuccessToast(false)}
            />
          )}
          {showErrorToast && (
            <Toast
              message={t('no_unavail_robots_to_clear')}
              type={'error'}
              onClose={() => setShowErrorToast(false)}
            />
          )}
          {showConfirmDeleteUnavailRobots ? (
            <Portal level="top">
              <Modal
                type="warning"
                title={t('clear_unavailable_robots')}
                onClose={cancelExit}
              >
                <StyledText as="p">{t('clearing_cannot_be_undone')}</StyledText>
                <Flex
                  flexDirection={DIRECTION_ROW}
                  paddingTop={SPACING.spacingXL}
                  justifyContent={JUSTIFY_FLEX_END}
                >
                  <Flex
                    paddingRight={SPACING.spacing2}
                    data-testid={`AdvancedSettings_ConfirmClear_Cancel
                    `}
                  >
                    <Btn
                      onClick={cancelExit}
                      textTransform={TYPOGRAPHY.textTransformCapitalize}
                      color={COLORS.blue}
                      fontWeight={TYPOGRAPHY.fontWeightSemiBold}
                      marginRight={SPACING.spacing6}
                    >
                      {t('shared:cancel')}
                    </Btn>
                  </Flex>
                  <Flex data-testid={`AdvancedSettings_ConfirmClear_Proceed`}>
                    <AlertPrimaryButton onClick={confirmDeleteUnavailRobots}>
                      {t('clear_confirm')}
                    </AlertPrimaryButton>
                  </Flex>
                </Flex>
              </Modal>
            </Portal>
          ) : null}
          <Box width="70%">
            <StyledText
              css={TYPOGRAPHY.h3SemiBold}
              paddingBottom={SPACING.spacing3}
              id="AdvancedSettings_updatedChannel"
            >
              {t('update_channel')}
            </StyledText>
            <StyledText as="p" paddingBottom={SPACING.spacing3}>
              {t('update_description')}
            </StyledText>
          </Box>
          <Box width="10rem">
            <DropdownField
              options={channelOptions}
              onChange={handleChannel}
              value={channel}
              id={`AdvancedSettings_${channel}`}
            />
          </Box>
        </Flex>
        <Divider marginY={SPACING.spacing5} />
        <Flex alignItems={ALIGN_CENTER} justifyContent={JUSTIFY_SPACE_BETWEEN}>
          <Box width="70%">
            <StyledText
              css={TYPOGRAPHY.h3SemiBold}
              paddingBottom={SPACING.spacing3}
              id="AdvancedSettings_customLabware"
            >
              {t('additional_labware_folder_title')}
            </StyledText>
            <StyledText as="p" paddingBottom={SPACING.spacing3}>
              {t('additional_folder_description')}
            </StyledText>
            <StyledText
              as="h6"
              textTransform={TYPOGRAPHY.textTransformUppercase}
              color={COLORS.darkGreyEnabled}
              paddingBottom={SPACING.spacing2}
            >
              {t('additional_folder_location')}
            </StyledText>
            {labwarePath !== '' ? (
              <Link
                role="button"
                css={TYPOGRAPHY.pRegular}
                color={COLORS.darkBlack}
                onClick={() =>
                  dispatch(CustomLabware.openCustomLabwareDirectory())
                }
                id="AdvancedSettings_sourceFolderLink"
              >
                {labwarePath}
                <Icon
                  height="0.75rem"
                  marginLeft={SPACING.spacing3}
                  name="open-in-new"
                />
              </Link>
            ) : (
              <StyledText as="p">{t('no_folder')}</StyledText>
            )}
          </Box>
          {
            <TertiaryButton
              marginLeft={SPACING_AUTO}
              onClick={() => {
                dispatch(CustomLabware.changeCustomLabwareDirectory())
                trackEvent({
                  name: 'changeCustomLabwareSourceFolder',
                  properties: {},
                })
              }}
              id="AdvancedSettings_changeLabwareSource"
            >
              {labwarePath !== ''
                ? t('change_folder_button')
                : t('add_folder_button')}
            </TertiaryButton>
          }
        </Flex>
        <Divider marginY={SPACING.spacing5} />
        <Box>
          <StyledText
            css={TYPOGRAPHY.h3SemiBold}
            paddingBottom={SPACING.spacing3}
            id="AdvancedSettings_tipLengthCalibration"
          >
            {t('tip_length_cal_method')}
          </StyledText>
          <RadioGroup
            useBlueChecked
            css={css`
              ${TYPOGRAPHY.pRegular}
              line-height: ${TYPOGRAPHY.lineHeight20};
            `}
            value={
              useTrashSurfaceForTipCal === true
                ? ALWAYS_TRASH
                : useTrashSurfaceForTipCal === false
                ? ALWAYS_BLOCK
                : ALWAYS_PROMPT
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              // you know this is a limited-selection field whose values are only
              // the elements of BlockSelection; i know this is a limited-selection
              // field whose values are only the elements of BlockSelection; but sadly,
              // neither of us can get Flow to know it
              handleUseTrashSelection(
                event.currentTarget.value as BlockSelection
              )
            }}
            options={[
              { name: t('cal_block'), value: ALWAYS_BLOCK },
              { name: t('trash_bin'), value: ALWAYS_TRASH },
              { name: t('prompt'), value: ALWAYS_PROMPT },
            ]}
          />
        </Box>
        <Divider marginY={SPACING.spacing5} />
        <Flex alignItems={ALIGN_CENTER} justifyContent={JUSTIFY_SPACE_BETWEEN}>
          <Box width="70%">
            <StyledText
              css={TYPOGRAPHY.h3SemiBold}
              paddingBottom={SPACING.spacing3}
              id="AdvancedSettings_unavailableRobots"
            >
              {t('disable_robot_caching')}
            </StyledText>
            <StyledText as="p" marginBottom={SPACING.spacing4}>
              {t('note_this_will_clear_caching')}
            </StyledText>
            <StyledText as="p">
              {t('disable_robot_caching_descriptions')}
            </StyledText>
          </Box>
          <ToggleButton
            label="display_unavailable_robots"
            toggledOn={!displayUnavailRobots}
            onClick={() =>
              dispatch(Config.toggleConfigValue('discovery.disableCache'))
            }
            id="AdvancedSettings_unavailableRobotsToggleButton"
          />
        </Flex>
        <Divider marginY={SPACING.spacing5} />
        <Flex alignItems={ALIGN_CENTER} justifyContent={JUSTIFY_SPACE_BETWEEN}>
          <Box>
            <StyledText
              css={TYPOGRAPHY.h3SemiBold}
              paddingBottom={SPACING.spacing3}
              id="AdvancedSettings_u2eInformation"
            >
              {t('usb_to_ethernet_adapter_info')}
            </StyledText>
            <StyledText as="p">
              {t('usb_to_ethernet_adapter_info_description')}
            </StyledText>
            {driverOutdated && (
              <Banner type="warning" marginTop={SPACING.spacing4}>
                <Flex justifyContent={JUSTIFY_SPACE_BETWEEN} width="100%">
                  <StyledText as="p" color={COLORS.darkBlack}>
                    {t('usb_to_ethernet_adapter_toast_message')}
                  </StyledText>
                  <Link
                    external
                    href={REALTEK_URL}
                    css={TYPOGRAPHY.pRegular}
                    color={COLORS.darkBlack}
                    textDecoration={TYPOGRAPHY.textDecorationUnderline}
                    id="AdvancedSettings_realtekLink"
                  >
                    {t('usb_to_ethernet_adapter_link')}
                  </Link>
                </Flex>
              </Banner>
            )}
            {device === null ? (
              <StyledText as="p" marginTop={SPACING.spacing4}>
                {t('usb_to_ethernet_not_connected')}
              </StyledText>
            ) : (
              <Flex
                justifyContent={JUSTIFY_SPACE_BETWEEN}
                marginTop={SPACING.spacing4}
              >
                <Flex
                  flexDirection={DIRECTION_COLUMN}
                  paddingRight={SPACING.spacing4}
                >
                  <StyledText css={TYPOGRAPHY.pSemiBold}>
                    {t('usb_to_ethernet_adapter_description')}
                  </StyledText>
                  <StyledText as="p">{device?.deviceName}</StyledText>
                </Flex>
                <Flex
                  flexDirection={DIRECTION_COLUMN}
                  paddingRight={SPACING.spacing4}
                >
                  <StyledText css={TYPOGRAPHY.pSemiBold}>
                    {t('usb_to_ethernet_adapter_manufacturer')}
                  </StyledText>
                  <StyledText as="p">{device?.manufacturer}</StyledText>
                </Flex>
                <Flex
                  flexDirection={DIRECTION_COLUMN}
                  paddingRight={SPACING.spacing4}
                >
                  <StyledText css={TYPOGRAPHY.pSemiBold}>
                    {t('usb_to_ethernet_adapter_driver_version')}
                  </StyledText>
                  <StyledText as="p">
                    {device?.windowsDriverVersion
                      ? device.windowsDriverVersion
                      : t('usb_to_ethernet_adapter_no_driver_version')}
                  </StyledText>
                </Flex>
              </Flex>
            )}
          </Box>
        </Flex>
        <Divider marginY={SPACING.spacing5} />
        <Flex alignItems={ALIGN_CENTER} justifyContent={JUSTIFY_SPACE_BETWEEN}>
          <Box width="70%">
            <StyledText
              css={TYPOGRAPHY.h3SemiBold}
              paddingBottom={SPACING.spacing3}
              id="AdvancedSettings_showLink"
            >
              {t('show_link_labware_data')}
            </StyledText>
            <StyledText as="p">
              {t('show_link_labware_data_description')}
            </StyledText>
          </Box>
          <ToggleButton
            label="show_link_to_get_labware_offset_data"
            toggledOn={isLabwareOffsetCodeSnippetsOn}
            onClick={toggleLabwareOffsetData}
            id="AdvancedSettings_showLinkToggleButton"
          />
        </Flex>
        <Divider marginY={SPACING.spacing5} />
        <Flex alignItems={ALIGN_CENTER} justifyContent={JUSTIFY_SPACE_BETWEEN}>
          <Box width="70%">
            <StyledText
              css={TYPOGRAPHY.h3SemiBold}
              paddingBottom={SPACING.spacing3}
              id="AdvancedSettings_showHeaterShakerAttachmentModal"
            >
              {t('heater_shaker_attach_visible')}
            </StyledText>
            <StyledText as="p">
              {t('heater_shaker_attach_description')}
            </StyledText>
          </Box>
          <ToggleButton
            label="show_heater_shaker_modal"
            toggledOn={!isHeaterShakerAttachmentModalVisible}
            onClick={toggleHeaterShakerModalVisibilty}
            id="AdvancedSettings_showHeaterShakerAttachmentBtn"
          />
        </Flex>
        <Divider marginY={SPACING.spacing5} />
        <Flex alignItems={ALIGN_CENTER} justifyContent={JUSTIFY_SPACE_BETWEEN}>
          <Box width="70%">
            <StyledText
              css={TYPOGRAPHY.h3SemiBold}
              paddingBottom={SPACING.spacing3}
              id="AdvancedSettings_clearRobots"
            >
              {t('clear_unavail_robots')}
            </StyledText>
            <StyledText as="p">{t('clear_robots_description')}</StyledText>
          </Box>
          <TertiaryButton
            marginLeft={SPACING_AUTO}
            onClick={confirmDeleteUnavailRobots}
            id="AdvancedSettings_clearUnavailableRobots"
          >
            {t('clear_robots_button')}
          </TertiaryButton>
        </Flex>
        <Divider marginY={SPACING.spacing5} />

        <Flex alignItems={ALIGN_CENTER} justifyContent={JUSTIFY_SPACE_BETWEEN}>
          <Box width="70%">
            <StyledText
              css={TYPOGRAPHY.h3SemiBold}
              paddingBottom={SPACING.spacing3}
              id="AdvancedSettings_overridePathToPython"
            >
              {t('override_path_to_python')}
            </StyledText>
            <StyledText as="p" paddingBottom={SPACING.spacing3}>
              {t('opentrons_app_will_use_interpreter')}
            </StyledText>
            <StyledText
              as="h6"
              textTransform={TYPOGRAPHY.textTransformUppercase}
              color={COLORS.darkGreyEnabled}
              paddingBottom={SPACING.spacing2}
            >
              {t('override_path')}
            </StyledText>
            {pathToPythonInterpreter !== null ? (
              <Link
                role="button"
                css={TYPOGRAPHY.pRegular}
                color={COLORS.darkBlack}
                onClick={() =>
                  dispatch(Config.openPythonInterpreterDirectory())
                }
                id="AdvancedSettings_sourceFolderLinkPython"
              >
                {pathToPythonInterpreter}
                <Icon
                  height="0.75rem"
                  marginLeft={SPACING.spacing3}
                  name="open-in-new"
                />
              </Link>
            ) : (
              <StyledText as="p">{t('no_specified_folder')}</StyledText>
            )}
          </Box>
          {pathToPythonInterpreter !== null ? (
            <TertiaryButton
              marginLeft={SPACING_AUTO}
              onClick={() =>
                dispatch(Config.resetConfigValue('python.pathToPythonOverride'))
              }
              id="AdvancedSettings_changePythonInterpreterSource"
            >
              {t('reset_to_default')}
            </TertiaryButton>
          ) : (
            <TertiaryButton
              marginLeft={SPACING_AUTO}
              onClick={handleClickPythonDirectoryChange}
              id="AdvancedSettings_changePythonInterpreterSource"
            >
              {t('add_override_path')}
            </TertiaryButton>
          )}
          <input
            id="AdvancedSetting_pythonPathDirectoryInput"
            data-testid="AdvancedSetting_pythonPathDirectoryInput"
            type="file"
            css={INPUT_STYLES}
            ref={pythonDirectoryFileInput}
            onChange={setPythonInterpreterDirectory}
          />
        </Flex>
        <Divider marginY={SPACING.spacing5} />
        <Flex alignItems={ALIGN_CENTER} justifyContent={JUSTIFY_SPACE_BETWEEN}>
          <Box width="70%">
            <StyledText
              css={TYPOGRAPHY.h3SemiBold}
              paddingBottom={SPACING.spacing3}
              id="AdvancedSettings_devTools"
            >
              {t('enable_dev_tools')}
            </StyledText>
            <StyledText as="p">{t('enable_dev_tools_description')}</StyledText>
          </Box>
          <ToggleButton
            label="enable_dev_tools"
            toggledOn={devToolsOn}
            onClick={toggleDevtools}
            id="AdvancedSettings_devTooltoggle"
          />
        </Flex>
      </Box>
    </>
  )
}
