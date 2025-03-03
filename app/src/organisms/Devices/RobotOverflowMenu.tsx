import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  Flex,
  COLORS,
  POSITION_ABSOLUTE,
  DIRECTION_COLUMN,
  POSITION_RELATIVE,
  ALIGN_FLEX_END,
  TYPOGRAPHY,
  useHoverTooltip,
} from '@opentrons/components'

import { CONNECTABLE, removeRobot } from '../../redux/discovery'
import { getBuildrootUpdateDisplayInfo } from '../../redux/buildroot'
import { OverflowBtn } from '../../atoms/MenuList/OverflowBtn'
import { Tooltip } from '../../atoms/Tooltip'
import { Divider } from '../../atoms/structure'
import { MenuItem } from '../../atoms/MenuList/MenuItem'
import { Portal } from '../../App/portal'
import { ChooseProtocolSlideout } from '../ChooseProtocolSlideout'
import { useCurrentRunId } from '../ProtocolUpload/hooks'
import { ConnectionTroubleshootingModal } from './ConnectionTroubleshootingModal'
import { useMenuHandleClickOutside } from '../../atoms/MenuList/hooks'

import type { StyleProps } from '@opentrons/components'
import type { DiscoveredRobot } from '../../redux/discovery/types'
import type { Dispatch, State } from '../../redux/types'

interface RobotOverflowMenuProps extends StyleProps {
  robot: DiscoveredRobot
}

export function RobotOverflowMenu(props: RobotOverflowMenuProps): JSX.Element {
  const { robot, ...styleProps } = props
  const { t } = useTranslation(['devices_landing', 'shared'])
  const {
    menuOverlay,
    handleOverflowClick,
    showOverflowMenu,
    setShowOverflowMenu,
  } = useMenuHandleClickOutside()
  const [targetProps, tooltipProps] = useHoverTooltip()
  const dispatch = useDispatch<Dispatch>()
  const runId = useCurrentRunId()
  const [
    showChooseProtocolSlideout,
    setShowChooseProtocolSlideout,
  ] = React.useState<boolean>(false)
  const [
    showConnectionTroubleshootingModal,
    setShowConnectionTroubleshootingModal,
  ] = React.useState<boolean>(false)
  const isRobotOnWrongVersionOfSoftware = ['upgrade', 'downgrade'].includes(
    useSelector((state: State) => {
      return getBuildrootUpdateDisplayInfo(state, robot.name)
    })?.autoUpdateAction
  )

  const handleClickRun: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    e.stopPropagation()
    setShowChooseProtocolSlideout(true)
    setShowOverflowMenu(false)
  }
  const handleClickConnectionTroubleshooting: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    e.stopPropagation()
    setShowConnectionTroubleshootingModal(true)
    setShowOverflowMenu(false)
  }

  let menuItems: React.ReactNode
  if (robot.status === CONNECTABLE && runId == null) {
    menuItems = (
      <>
        <MenuItem
          {...targetProps}
          onClick={handleClickRun}
          disabled={isRobotOnWrongVersionOfSoftware}
          data-testid={`RobotOverflowMenu_${robot.name}_runProtocol`}
        >
          {t('run_a_protocol')}
        </MenuItem>
        {isRobotOnWrongVersionOfSoftware && (
          <Tooltip tooltipProps={tooltipProps}>
            {t('shared:a_software_update_is_available')}
          </Tooltip>
        )}
        <Divider marginY={'0'} />
        <MenuItem
          to={`/devices/${robot.name}/robot-settings`}
          as={Link}
          textTransform={TYPOGRAPHY.textTransformCapitalize}
          id={`RobotOverflowMenu_${robot.name}_robotSettings`}
        >
          {t('robot_settings')}
        </MenuItem>
      </>
    )
  } else if (robot.status === CONNECTABLE && runId != null) {
    menuItems = (
      <MenuItem
        to={`/devices/${robot.name}/robot-settings`}
        as={Link}
        textTransform={TYPOGRAPHY.textTransformCapitalize}
        id={`RobotOverflowMenu_${robot.name}_robotSettings_${runId}`}
      >
        {t('robot_settings')}
      </MenuItem>
    )
  } else {
    menuItems = (
      <>
        <MenuItem
          onClick={handleClickConnectionTroubleshooting}
          id={`RobotOverflowMenu_${robot.name}_robotUnavailable`}
        >
          {t('why_is_this_robot_unavailable')}
        </MenuItem>
        <MenuItem
          onClick={() => dispatch(removeRobot(robot.name))}
          id={`RobotOverflowMenu_${robot.name}_removeRobot`}
        >
          {t('forget_unavailable_robot')}
        </MenuItem>
      </>
    )
  }
  return (
    <Flex
      data-testid={`RobotCard_${robot.name}_overflowMenu`}
      flexDirection={DIRECTION_COLUMN}
      position={POSITION_RELATIVE}
      onClick={e => {
        e.stopPropagation()
      }}
      {...styleProps}
    >
      <OverflowBtn
        alignSelf={ALIGN_FLEX_END}
        aria-label="RobotOverflowMenu_button"
        onClick={handleOverflowClick}
      />
      {showOverflowMenu && !showConnectionTroubleshootingModal ? (
        <Flex
          width={'11rem'}
          zIndex={10}
          borderRadius={'4px 4px 0px 0px'}
          boxShadow={'0px 1px 3px rgba(0, 0, 0, 0.2)'}
          position={POSITION_ABSOLUTE}
          backgroundColor={COLORS.white}
          top="2.25rem"
          right="0"
          flexDirection={DIRECTION_COLUMN}
          id={`RobotOverflowMenu_${robot.name}_buttons`}
        >
          {menuItems}
        </Flex>
      ) : null}
      <Portal level="top">
        {showOverflowMenu && menuOverlay}
        {robot.status === CONNECTABLE ? (
          <ChooseProtocolSlideout
            robot={robot}
            showSlideout={showChooseProtocolSlideout}
            onCloseClick={() => {
              setShowChooseProtocolSlideout(false)
            }}
          />
        ) : null}
        {showConnectionTroubleshootingModal ? (
          <ConnectionTroubleshootingModal
            onClose={() => {
              setShowConnectionTroubleshootingModal(false)
            }}
          />
        ) : null}
      </Portal>
    </Flex>
  )
}
