import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Redirect, useParams } from 'react-router-dom'

import {
  Box,
  Flex,
  DIRECTION_COLUMN,
  OVERFLOW_SCROLL,
  SIZE_6,
  BORDERS,
  COLORS,
  SPACING,
  TYPOGRAPHY,
} from '@opentrons/components'
import { ApiHostProvider } from '@opentrons/react-api-client'

import { CONNECTABLE, UNREACHABLE, REACHABLE } from '../../../redux/discovery'
import { StyledText } from '../../../atoms/text'
import { Banner } from '../../../atoms/Banner'
import { useRobot } from '../../../organisms/Devices/hooks'
import { Line } from '../../../atoms/structure'
import { NavTab } from '../../../atoms/NavTab'
import { RobotSettingsCalibration } from '../../../organisms/Devices/RobotSettings/RobotSettingsCalibration'
import { RobotSettingsAdvanced } from '../../../organisms/Devices/RobotSettings/RobotSettingsAdvanced'
import { RobotSettingsNetworking } from '../../../organisms/Devices/RobotSettings/RobotSettingsNetworking'
import { ReachableBanner } from '../../../organisms/Devices/ReachableBanner'

import type { NavRouteParams, RobotSettingsTab } from '../../../App/types'

export function RobotSettings(): JSX.Element | null {
  const { t } = useTranslation('device_settings')
  const { robotName, robotSettingsTab } = useParams<NavRouteParams>()
  const robot = useRobot(robotName)
  const isCalibrationDisabled = robot?.status !== CONNECTABLE
  const isNetworkingDisabled = robot?.status === UNREACHABLE
  const [showRobotBusyBanner, setShowRobotBusyBanner] = React.useState<boolean>(
    false
  )

  const updateRobotStatus = (isRobotBusy: boolean): void => {
    if (isRobotBusy) setShowRobotBusyBanner(true)
  }

  const robotSettingsContentByTab: {
    [K in RobotSettingsTab]: () => JSX.Element
  } = {
    calibration: () => (
      <RobotSettingsCalibration
        robotName={robotName}
        updateRobotStatus={updateRobotStatus}
      />
    ),
    networking: () => (
      <RobotSettingsNetworking
        robotName={robotName}
        updateRobotStatus={updateRobotStatus}
      />
    ),
    advanced: () => (
      <RobotSettingsAdvanced
        robotName={robotName}
        updateRobotStatus={updateRobotStatus}
      />
    ),
  }

  if (
    robot == null ||
    robot?.status === UNREACHABLE ||
    (robot?.status === REACHABLE && robot?.serverHealthStatus !== 'ok')
  ) {
    return <Redirect to={`/devices/${robotName}`} />
  }
  if (robotSettingsTab === 'calibration' && isCalibrationDisabled) {
    return <Redirect to={`/devices/${robotName}/robot-settings/networking`} />
  }

  const RobotSettingsContent =
    robotSettingsContentByTab[robotSettingsTab] ??
    // default to the calibration tab if no tab or nonexistent tab is passed as a param
    (() => <Redirect to={`/devices/${robotName}/robot-settings/calibration`} />)

  return (
    <Box
      minWidth={SIZE_6}
      height="100%"
      overflow={OVERFLOW_SCROLL}
      padding={SPACING.spacing4}
    >
      <Flex
        backgroundColor={COLORS.white}
        border={BORDERS.lineBorder}
        borderRadius={BORDERS.radiusSoftCorners}
        flexDirection={DIRECTION_COLUMN}
        marginBottom={SPACING.spacing4}
        width="100%"
      >
        <Box padding={`0 ${SPACING.spacing4}`}>
          <Box
            color={COLORS.black}
            css={TYPOGRAPHY.h1Default}
            padding={`${SPACING.spacing5} 0`}
          >
            {t('robot_settings')}
          </Box>
          <ReachableBanner robot={robot} />
          {showRobotBusyBanner && (
            <Banner type="warning" marginBottom={SPACING.spacing4}>
              <StyledText as="p">
                {t('some_robot_controls_are_not_available')}
              </StyledText>
            </Banner>
          )}
          <Flex gridGap={SPACING.spacing4}>
            <NavTab
              to={`/devices/${robotName}/robot-settings/calibration`}
              tabName={t('calibration')}
              disabled={isCalibrationDisabled}
            />
            <NavTab
              to={`/devices/${robotName}/robot-settings/networking`}
              tabName={t('networking')}
              disabled={isNetworkingDisabled}
            />
            <NavTab
              to={`/devices/${robotName}/robot-settings/advanced`}
              tabName={t('advanced')}
            />
          </Flex>
        </Box>
        <Line />
        <Box padding={`${SPACING.spacing5} ${SPACING.spacing4}`}>
          <ApiHostProvider
            hostname={robot?.ip ?? null}
            port={robot?.port ?? null}
          >
            <RobotSettingsContent />
          </ApiHostProvider>
        </Box>
      </Flex>
    </Box>
  )
}
