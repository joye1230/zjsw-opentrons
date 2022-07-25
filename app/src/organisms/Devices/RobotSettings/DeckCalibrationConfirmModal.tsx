import * as React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Flex,
  DIRECTION_COLUMN,
  JUSTIFY_FLEX_END,
  ALIGN_CENTER,
  COLORS,
  TYPOGRAPHY,
  SPACING,
  Link,
} from '@opentrons/components'
import { Modal } from '../../../atoms/Modal'
import { StyledText } from '../../../atoms/text'
import { PrimaryButton } from '../../../atoms/buttons'

interface DeckCalibrationConfirmModalProps {
  confirm: () => unknown
  cancel: () => unknown
}

export function DeckCalibrationConfirmModal({
  confirm,
  cancel,
}: DeckCalibrationConfirmModalProps): JSX.Element {
  const { t } = useTranslation(['device_settings', 'shared'])

  return (
    <Modal
      type="warning"
      title={t('deck_calibration_modal_title')}
      onClose={cancel}
    >
      <Flex flexDirection={DIRECTION_COLUMN}>
        <StyledText as="p" marginBottom={SPACING.spacing4}>
          {t('deck_calibration_modal_description')}
        </StyledText>
        <StyledText
          as="p"
          fontWeight={TYPOGRAPHY.fontWeightSemiBold}
          marginBottom={SPACING.spacing5}
        >
          {t('deck_calibration_modal_pipette_description')}
        </StyledText>
        <Flex justifyContent={JUSTIFY_FLEX_END} alignItems={ALIGN_CENTER}>
          <Link
            role="button"
            onClick={cancel}
            textTransform={TYPOGRAPHY.textTransformCapitalize}
            marginRight={SPACING.spacing5}
            color={COLORS.blue}
            css={TYPOGRAPHY.fontSizeP}
            fontWeight={TYPOGRAPHY.fontWeightSemiBold}
          >
            {t('shared:cancel')}
          </Link>
          <PrimaryButton
            backgroundColor={COLORS.error}
            textTransform={TYPOGRAPHY.textTransformCapitalize}
            css={TYPOGRAPHY.fontSizeP}
            fontWeight={TYPOGRAPHY.fontWeightSemiBold}
            onClick={confirm}
          >
            {t('shared:yes')}
          </PrimaryButton>
        </Flex>
      </Flex>
    </Modal>
  )
}
