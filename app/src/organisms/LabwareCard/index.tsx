import * as React from 'react'
import { useTranslation } from 'react-i18next'
import startCase from 'lodash/startCase'
import { format } from 'date-fns'

import {
  Box,
  Flex,
  Icon,
  LabwareRender,
  RobotWorkSpace,
  SPACING,
  TYPOGRAPHY,
  BORDERS,
  COLORS,
  JUSTIFY_SPACE_BETWEEN,
  DIRECTION_COLUMN,
  ALIGN_FLEX_END,
  ALIGN_CENTER,
} from '@opentrons/components'

import { StyledText } from '../../atoms/text'
import { CustomLabwareOverflowMenu } from './CustomLabwareOverflowMenu'

import type { LabwareDefAndDate } from '../../pages/Labware/hooks'

export interface LabwareCardProps {
  labware: LabwareDefAndDate
  onClick: () => void
}

export function LabwareCard(props: LabwareCardProps): JSX.Element {
  const { t } = useTranslation('labware_landing')
  const { definition, modified, filename } = props.labware
  const apiName = definition.parameters.loadName
  const displayName = definition?.metadata.displayName
  const displayCategory = startCase(definition.metadata.displayCategory)
  const isCustomDefinition = definition.namespace !== 'opentrons'

  return (
    <Box
      role="link"
      backgroundColor={COLORS.white}
      color={COLORS.black}
      css={BORDERS.cardOutlineBorder}
      paddingLeft={SPACING.spacing4}
      paddingY={SPACING.spacing4}
      height="auto"
      onClick={props.onClick}
      cursor="pointer"
      display="grid"
      gridTemplateColumns=" minmax(5rem, 1fr) minmax(7.5rem, 1fr) 4fr minmax(
        3rem,
        1fr
      )"
    >
      <Box id="LabwareCard_labwareImage" marginRight={SPACING.spacing5}>
        <RobotWorkSpace
          viewBox={`0 0 ${definition.dimensions.xDimension} ${definition.dimensions.yDimension}`}
        >
          {() => <LabwareRender definition={definition} />}
        </RobotWorkSpace>
      </Box>
      {/* labware category name min:7.5 rem for the longest, Aluminum Block  */}
      <Box marginRight={SPACING.spacing4}>
        <StyledText css={TYPOGRAPHY.pSemiBold} id="displayCategory">
          {displayCategory}
        </StyledText>
      </Box>
      {/* labware info */}
      <Box>
        <Flex
          flexDirection={DIRECTION_COLUMN}
          justifyContent={JUSTIFY_SPACE_BETWEEN}
        >
          <Box>
            <StyledText as="h3" id="LabwareCard_labwareName">
              {displayName}
            </StyledText>
            {isCustomDefinition ? (
              <StyledText
                as="label"
                color={COLORS.darkGreyEnabled}
                id="LabwareCard_customDef"
              >
                {t('custom_def')}
              </StyledText>
            ) : (
              <Flex alignItems={ALIGN_CENTER} marginTop={SPACING.spacing2}>
                <Icon
                  color={COLORS.blue}
                  name="check-decagram"
                  height=".7rem"
                />
                <StyledText
                  as="label"
                  id="LabwareCard_opentronsDef"
                  marginLeft={SPACING.spacing2}
                >
                  {t('opentrons_def')}
                </StyledText>
              </Flex>
            )}
          </Box>
          <Box paddingTop={SPACING.spacing4}>
            <StyledText
              as="h6"
              textTransform={TYPOGRAPHY.textTransformUppercase}
              color={COLORS.darkGreyEnabled}
              id="LabwareCard_apiName"
            >
              {t('api_name')}
            </StyledText>
            <StyledText as="p">
              <Box overflowWrap="anywhere">{apiName}</Box>
            </StyledText>
          </Box>
        </Flex>
      </Box>
      {/* space for custom labware min: 3rem for date */}
      {/* Note kj 06/30/2022 currently this section would not be ideal implementation
        Once the team have an agreement for grid system, we could refactor */}
      <Box marginTop={`-${SPACING.spacingSM}`} paddingRight={SPACING.spacing3}>
        {modified != null && filename != null && (
          <Flex
            height="100%"
            flexDirection={DIRECTION_COLUMN}
            justifyContent={JUSTIFY_SPACE_BETWEEN}
            alignItems={ALIGN_FLEX_END}
          >
            <CustomLabwareOverflowMenu filename={filename} />
            <Flex flexDirection={DIRECTION_COLUMN}>
              <StyledText
                as="label"
                color={COLORS.darkGreyEnabled}
                textAlign={TYPOGRAPHY.textAlignRight}
              >
                {t('date_added')}
              </StyledText>
              <StyledText
                as="label"
                color={COLORS.darkGreyEnabled}
                id="LabwareCard_dateAdded"
              >
                {format(new Date(modified), 'MM/dd/yyyy')}
              </StyledText>
            </Flex>
          </Flex>
        )}
      </Box>
    </Box>
  )
}
