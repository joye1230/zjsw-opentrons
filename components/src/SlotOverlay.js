// @flow
import * as React from 'react'
import cx from 'classnames'
import {Icon} from './icons'
import type {IconNames} from './icons'

import styles from './SlotOverlay.css'

type SlotOverlayProps = {
  text?: string,
  icon?: IconNames,
  className?: string
}

// TODO rename b/c the icon is optional...
export function SlotOverlay (props: SlotOverlayProps) {
  const {icon, text, className} = props
  const leftRightPadding = 3 // LR padding as %
  const topPadding = 33 // as %
  const textProps = icon
    ? {x: '25%'} // left-aligned with offset for icon
    : {x: '50%', textAnchor: 'middle'} // centered text

  return <g className={cx(styles.overlay, className)}>
    <rect
      className={styles.overlayBackground}
      x={leftRightPadding + '%'}
      y={topPadding + '%'}
      height='33%'
      width={100 - (leftRightPadding * 2) + '%'} rx='6'
    />

    {/* TODO: control icon x y and size */}
    {icon && <Icon name={icon} className={styles.icon} />}

    <text {...textProps} y={topPadding + 20 + '%'}>
      {text}
    </text>
  </g>
}
