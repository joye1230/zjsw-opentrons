import * as React from 'react'
import cx from 'classnames'
import {
  Tooltip,
  useHoverTooltip,
  TOOLTIP_FIXED,
  UseHoverTooltipTargetProps,
} from '@opentrons/components'
import { i18n } from '../../localization'
import { PDListItem } from '../lists'
import { LabwareTooltipContents } from './LabwareTooltipContents'
import styles from './StepItem.css'
import { ModuleType } from '@opentrons/shared-data'

export interface ModuleStepItemRowProps {
  label?: string | null
  value?: string | null
  targetProps?: UseHoverTooltipTargetProps
}

export const ModuleStepItemRow = (
  props: ModuleStepItemRowProps
): JSX.Element => (
  <PDListItem
    className={cx(styles.step_subitem_column_header, styles.substep_content)}
  >
    <span {...props.targetProps} className={styles.labware_display_name}>
      {props.label}
    </span>
    <span className={styles.module_substep_value}>{props.value}</span>
  </PDListItem>
)

interface Props {
  action?: string
  moduleType: ModuleType
  actionText: string
  labwareNickname?: string | null
  message?: string | null
  children?: React.ReactNode
  hideHeader?: boolean
}

export const ModuleStepItems = (props: Props): JSX.Element => {
  const [targetProps, tooltipProps] = useHoverTooltip({
    placement: 'bottom-start',
    strategy: TOOLTIP_FIXED,
  })
  return (
    <>
      {!props.hideHeader && (
        <li className={styles.substep_header}>
          <span>{i18n.t(`modules.module_long_names.${props.moduleType}`)}</span>
          <span>{props.action}</span>
        </li>
      )}
      <Tooltip {...tooltipProps}>
        <LabwareTooltipContents labwareNickname={props.labwareNickname} />
      </Tooltip>
      <ModuleStepItemRow
        label={props.labwareNickname}
        targetProps={targetProps}
        value={props.actionText}
      />
      {props.children}
      {props.message && (
        <PDListItem className={cx(styles.substep_content, 'step-item-message')}>
          &quot;{props.message}&quot;
        </PDListItem>
      )}
    </>
  )
}
