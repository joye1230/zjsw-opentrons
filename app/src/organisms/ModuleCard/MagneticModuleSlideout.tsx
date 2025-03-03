import * as React from 'react'
import { useTranslation } from 'react-i18next'
import {
  useCreateCommandMutation,
  useCreateLiveCommandMutation,
} from '@opentrons/react-api-client'
import { useModuleIdFromRun } from './useModuleIdFromRun'
import {
  Flex,
  DIRECTION_ROW,
  DIRECTION_COLUMN,
  JUSTIFY_SPACE_BETWEEN,
  COLORS,
  TYPOGRAPHY,
  SPACING,
  JUSTIFY_END,
} from '@opentrons/components'
import {
  getModuleDisplayName,
  MAGNETIC_MODULE_TYPE_LABWARE_BOTTOM_HEIGHT,
  MAGNETIC_MODULE_V1,
  MAGNETIC_MODULE_V1_DISNEGAGED_HEIGHT,
  MAGNETIC_MODULES_MAX_ENGAGE_HEIGHT,
  MAGNETIC_MODULE_V2_DISNEGAGED_HEIGHT,
  MM,
} from '@opentrons/shared-data'

import { StyledText } from '../../atoms/text'
import { Slideout } from '../../atoms/Slideout'
import { InputField } from '../../atoms/InputField'
import { SubmitPrimaryButton } from '../../atoms/buttons'
import { useRunStatuses } from '../Devices/hooks'

import type { TFunctionResult } from 'i18next'
import type { MagneticModule } from '../../redux/modules/types'
import type { MagneticModuleModel } from '@opentrons/shared-data'
import type { MagneticModuleEngageMagnetCreateCommand } from '@opentrons/shared-data/protocol/types/schemaV6/command/module'

interface ModelContents {
  version: string
  units: string
  maxHeight: number
  labwareBottomHeight: number
  disengagedHeight: number
}

const getInfoByModel = (model: MagneticModuleModel): ModelContents => {
  if (model === MAGNETIC_MODULE_V1) {
    return {
      version: 'GEN 1',
      units: MM,
      maxHeight: MAGNETIC_MODULES_MAX_ENGAGE_HEIGHT,
      labwareBottomHeight: MAGNETIC_MODULE_TYPE_LABWARE_BOTTOM_HEIGHT,
      disengagedHeight: MAGNETIC_MODULE_V1_DISNEGAGED_HEIGHT,
    }
  } else {
    return {
      version: 'GEN 2',
      units: MM,
      maxHeight: MAGNETIC_MODULES_MAX_ENGAGE_HEIGHT,
      labwareBottomHeight: MAGNETIC_MODULE_TYPE_LABWARE_BOTTOM_HEIGHT,
      disengagedHeight: MAGNETIC_MODULE_V2_DISNEGAGED_HEIGHT,
    }
  }
}
interface MagneticModuleSlideoutProps {
  module: MagneticModule
  onCloseClick: () => unknown
  isExpanded: boolean
  isLoadedInRun: boolean
  currentRunId?: string
}

export const MagneticModuleSlideout = (
  props: MagneticModuleSlideoutProps
): JSX.Element | null => {
  const {
    module,
    isExpanded,
    onCloseClick,
    isLoadedInRun,
    currentRunId,
  } = props
  const { t } = useTranslation('device_details')
  const { createLiveCommand } = useCreateLiveCommandMutation()
  const { createCommand } = useCreateCommandMutation()
  const { isRunTerminal, isRunIdle } = useRunStatuses()
  const [engageHeightValue, setEngageHeightValue] = React.useState<
    string | null
  >(null)
  const { moduleIdFromRun } = useModuleIdFromRun(module, currentRunId ?? null)

  const moduleName = getModuleDisplayName(module.moduleModel)
  const info = getInfoByModel(module.moduleModel)

  let max: number | TFunctionResult = 0
  let labwareBottom: number | TFunctionResult = 0
  let disengageHeight: number | TFunctionResult = 0

  switch (info.version) {
    case 'GEN 1': {
      max = t('num_units', { num: info.maxHeight })
      labwareBottom = t('num_units', { num: info.labwareBottomHeight })
      disengageHeight = t('num_units', { num: info.disengagedHeight })
      break
    }
    case 'GEN 2': {
      max = t('num_units', { num: info.maxHeight })
      labwareBottom = t('num_units', { num: info.labwareBottomHeight })
      disengageHeight = t('num_units', { num: info.disengagedHeight })
    }
  }

  const errorMessage =
    engageHeightValue != null &&
    (parseInt(engageHeightValue) < info.disengagedHeight ||
      parseInt(engageHeightValue) > info.maxHeight)
      ? t('input_out_of_range')
      : null

  const handleSubmitHeight = (): void => {
    if (engageHeightValue != null) {
      const setEngageCommand: MagneticModuleEngageMagnetCreateCommand = {
        commandType: 'magneticModule/engage',
        params: {
          moduleId: isRunIdle ? moduleIdFromRun : module.id,
          height: parseInt(engageHeightValue),
        },
      }
      if (isRunIdle && currentRunId != null && isLoadedInRun) {
        createCommand({ runId: currentRunId, command: setEngageCommand }).catch(
          (e: Error) => {
            console.error(
              `error setting module status with command type ${setEngageCommand.commandType} and run id ${currentRunId}: ${e.message}`
            )
          }
        )
      } else if (isRunTerminal || currentRunId == null) {
        createLiveCommand({ command: setEngageCommand }).catch((e: Error) => {
          console.error(
            `error setting module status with command type ${setEngageCommand.commandType}: ${e.message}`
          )
        })
      }
    }
    setEngageHeightValue(null)
    onCloseClick()
  }

  return (
    <Slideout
      title={t('set_engage_height_for_module', { name: moduleName })}
      onCloseClick={onCloseClick}
      isExpanded={isExpanded}
      footer={
        <SubmitPrimaryButton
          form="MagneticModuleSlideout_submitValue"
          value={t('confirm')}
          onClick={handleSubmitHeight}
          disabled={engageHeightValue == null || errorMessage !== null}
          data-testid={`MagneticModuleSlideout_btn_${module.serialNumber}`}
        />
      }
    >
      <StyledText
        fontWeight={TYPOGRAPHY.fontWeightRegular}
        fontSize={TYPOGRAPHY.fontSizeP}
        paddingTop={SPACING.spacing2}
        data-testid={`MagneticModuleSlideout_body_text_${module.serialNumber}`}
      >
        {t('set_engage_height_and_enter_integer', {
          lower:
            module.moduleModel === MAGNETIC_MODULE_V1
              ? MAGNETIC_MODULE_V1_DISNEGAGED_HEIGHT
              : MAGNETIC_MODULE_V2_DISNEGAGED_HEIGHT,
          higher: MAGNETIC_MODULES_MAX_ENGAGE_HEIGHT,
        })}
      </StyledText>
      <StyledText
        fontSize={TYPOGRAPHY.fontSizeH6}
        color={COLORS.darkGreyEnabled}
        fontWeight={TYPOGRAPHY.fontWeightSemiBold}
        paddingTop={SPACING.spacing4}
        textTransform={TYPOGRAPHY.textTransformUppercase}
        paddingBottom={SPACING.spacing3}
        data-testid={`MagneticModuleSlideout_body_subtitle_${module.serialNumber}`}
      >
        {t('height_ranges', { gen: info.version })}
      </StyledText>
      <Flex
        backgroundColor={COLORS.background}
        flexDirection={DIRECTION_ROW}
        justifyContent={JUSTIFY_SPACE_BETWEEN}
        fontWeight={TYPOGRAPHY.fontWeightRegular}
        fontSize={TYPOGRAPHY.fontSizeP}
        padding={SPACING.spacing4}
      >
        <Flex
          flexDirection={DIRECTION_COLUMN}
          data-testid={`MagneticModuleSlideout_body_data_text_${module.serialNumber}`}
        >
          <StyledText paddingBottom={SPACING.spacing3}>
            {t('max_engage_height')}
          </StyledText>
          <StyledText paddingBottom={SPACING.spacing3}>
            {t('labware_bottom')}
          </StyledText>
          <StyledText>{t('disengaged')}</StyledText>
        </Flex>
        <Flex
          flexDirection={DIRECTION_COLUMN}
          justifyContent={JUSTIFY_END}
          data-testid={`MagneticModuleSlideout_body_data_num_${module.serialNumber}`}
        >
          <StyledText
            paddingLeft={SPACING.spacing3}
            paddingBottom={SPACING.spacing3}
          >
            {max}
          </StyledText>
          <StyledText
            paddingLeft={SPACING.spacing4}
            paddingBottom={SPACING.spacing3}
          >
            {labwareBottom}
          </StyledText>
          <StyledText>{disengageHeight}</StyledText>
        </Flex>
      </Flex>
      <Flex
        marginTop={SPACING.spacing4}
        flexDirection={DIRECTION_COLUMN}
        data-testid={`MagneticModuleSlideout_input_field_${module.serialNumber}`}
      >
        <StyledText
          fontWeight={TYPOGRAPHY.fontWeightSemiBold}
          fontSize={TYPOGRAPHY.fontSizeH6}
          color={COLORS.darkGrey}
          paddingBottom={SPACING.spacing3}
        >
          {t('set_engage_height')}
        </StyledText>
        <form id="MagneticModuleSlideout_submitValue">
          <InputField
            data-testid={`${module.moduleModel}`}
            id={`${module.moduleModel}`}
            units={info.units}
            value={engageHeightValue}
            autoFocus
            onChange={e => setEngageHeightValue(e.target.value)}
            type="number"
            caption={t('module_status_range', {
              min: info.disengagedHeight,
              max: info.maxHeight,
              unit: info.units,
            })}
            error={errorMessage}
          />
        </form>
      </Flex>
    </Slideout>
  )
}
