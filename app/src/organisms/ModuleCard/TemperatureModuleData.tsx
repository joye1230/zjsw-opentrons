import * as React from 'react'
import { useTranslation } from 'react-i18next'
import {
  DIRECTION_COLUMN,
  Flex,
  FONT_SIZE_CAPTION,
  Text,
  SPACING,
  COLORS,
} from '@opentrons/components'
import { StatusLabel } from '../../atoms/StatusLabel'
import type { TemperatureStatus } from '../../redux/modules/api-types'

interface TemperatureModuleProps {
  moduleStatus: TemperatureStatus
  targetTemp: number | null
  currentTemp: number
}

export const TemperatureModuleData = (
  props: TemperatureModuleProps
): JSX.Element | null => {
  const { moduleStatus, targetTemp, currentTemp } = props
  const { t } = useTranslation('device_details')

  let backgroundColor: string = COLORS.medGrey
  let iconColor: string = COLORS.darkGrey
  let textColor
  let pulse
  switch (moduleStatus) {
    case 'idle': {
      backgroundColor = COLORS.medGrey
      iconColor = COLORS.darkGrey
      textColor = COLORS.darkBlack
      break
    }
    case 'holding at target': {
      backgroundColor = COLORS.medBlue
      iconColor = COLORS.blue
      break
    }
    case 'cooling':
    case 'heating': {
      backgroundColor = COLORS.medBlue
      pulse = true
      break
    }
  }

  return (
    <>
      <StatusLabel
        status={moduleStatus}
        backgroundColor={backgroundColor}
        iconColor={iconColor}
        textColor={textColor}
        pulse={pulse}
      />
      <Flex
        fontSize={FONT_SIZE_CAPTION}
        flexDirection={DIRECTION_COLUMN}
        data-testid={`temp_module_data`}
      >
        <Text marginBottom={SPACING.spacing1}>
          {t(targetTemp == null ? 'na_temp' : 'target_temp', {
            temp: targetTemp,
          })}
        </Text>
        <Text>{t('current_temp', { temp: currentTemp })}</Text>
      </Flex>
    </>
  )
}
