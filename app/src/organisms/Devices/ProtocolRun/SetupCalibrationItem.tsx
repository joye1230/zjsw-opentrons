import * as React from 'react'
import { useTranslation } from 'react-i18next'

import {
  Flex,
  Icon,
  ALIGN_CENTER,
  DIRECTION_COLUMN,
  DIRECTION_ROW,
  JUSTIFY_SPACE_BETWEEN,
  SIZE_1,
  BORDERS,
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@opentrons/components'

import { StyledText } from '../../../atoms/text'
import { useRunHasStarted } from '../hooks'
import { formatTimestamp } from '../utils'

interface SetupCalibrationItemProps {
  calibratedDate: string | null
  runId: string
  label?: string
  title?: string
  subText?: string
  button?: JSX.Element
  id?: string
}

export function SetupCalibrationItem({
  label,
  title,
  subText,
  calibratedDate,
  button,
  id,
  runId,
}: SetupCalibrationItemProps): JSX.Element | null {
  const { t } = useTranslation('protocol_setup')

  const runHasStarted = useRunHasStarted(runId)

  const calibratedText =
    calibratedDate != null
      ? t('last_calibrated', {
          date: formatTimestamp(calibratedDate),
        })
      : t('not_calibrated')

  const calibrationDataNotAvailableText = runHasStarted ? (
    <StyledText>{t('calibration_data_not_available')}</StyledText>
  ) : null
  return (
    <Flex
      backgroundColor={COLORS.lightGrey}
      borderRadius={BORDERS.radiusSoftCorners}
      flexDirection={DIRECTION_ROW}
      justifyContent={JUSTIFY_SPACE_BETWEEN}
      minHeight="2.5rem" // 40px
      padding={`${SPACING.spacing3} ${SPACING.spacing4}`}
    >
      <Flex flexDirection={DIRECTION_ROW} alignItems={ALIGN_CENTER}>
        <Flex flexDirection={DIRECTION_ROW} alignItems={ALIGN_CENTER}>
          {!runHasStarted ? (
            <Icon
              size={SIZE_1}
              color={calibratedDate != null ? COLORS.success : COLORS.warning}
              marginRight={SPACING.spacing4}
              name={calibratedDate != null ? 'ot-check' : 'alert-circle'}
            />
          ) : null}
          <Flex flexDirection={DIRECTION_COLUMN} gridGap={SPACING.spacing2}>
            {label != null && (
              <StyledText
                color={COLORS.darkGreyEnabled}
                css={TYPOGRAPHY.h6SemiBold}
                textTransform={TYPOGRAPHY.textTransformUppercase}
                id={id}
              >
                {label}
              </StyledText>
            )}
            {title != null && (
              <StyledText as="p" color={COLORS.darkBlack} id={id}>
                {title}
              </StyledText>
            )}
            <StyledText as="label" color={COLORS.darkGreyEnabled}>
              {calibrationDataNotAvailableText ?? subText ?? calibratedText}
            </StyledText>
          </Flex>
        </Flex>
      </Flex>
      {button}
    </Flex>
  )
}
