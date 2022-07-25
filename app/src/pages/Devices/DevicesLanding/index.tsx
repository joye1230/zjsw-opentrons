import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import partition from 'lodash/partition'
import { css } from 'styled-components'

import {
  Box,
  Flex,
  Icon,
  JUSTIFY_SPACE_BETWEEN,
  ALIGN_CENTER,
  DIRECTION_COLUMN,
  SIZE_6,
  SPACING,
  COLORS,
  Link,
  TYPOGRAPHY,
  POSITION_ABSOLUTE,
  TEXT_ALIGN_CENTER,
} from '@opentrons/components'
import { ApiHostProvider } from '@opentrons/react-api-client'
import {
  getScanning,
  getConnectableRobots,
  getReachableRobots,
  getUnreachableRobots,
} from '../../../redux/discovery'
import { RobotCard } from '../../../organisms/Devices/RobotCard'
import { DevicesEmptyState } from '../../../organisms/Devices/DevicesEmptyState'
import { CollapsibleSection } from '../../../molecules/CollapsibleSection'

import { Divider } from '../../../atoms/structure'
import { StyledText } from '../../../atoms/text'
import { NewRobotSetupHelp } from './NewRobotSetupHelp'

import type { State } from '../../../redux/types'

export const TROUBLESHOOTING_CONNECTION_PROBLEMS_URL =
  'https://support.opentrons.com/en/articles/2687601-troubleshooting-connection-problems'

const LINK_STYLES = css`
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

export function DevicesLanding(): JSX.Element {
  const { t } = useTranslation('devices_landing')

  const isScanning = useSelector((state: State) => getScanning(state))
  const healthyReachableRobots = useSelector((state: State) =>
    getConnectableRobots(state)
  )
  const reachableRobots = useSelector((state: State) =>
    getReachableRobots(state)
  )
  const unreachableRobots = useSelector((state: State) =>
    getUnreachableRobots(state)
  )

  const [unhealthyReachableRobots, recentlySeenRobots] = partition(
    reachableRobots,
    robot => robot.healthStatus === 'ok'
  )

  const noRobots =
    [
      ...healthyReachableRobots,
      ...recentlySeenRobots,
      ...unhealthyReachableRobots,
      ...unreachableRobots,
    ].length === 0

  return (
    <Box minWidth={SIZE_6} padding={`${SPACING.spacing3} ${SPACING.spacing4}`}>
      <Flex
        justifyContent={JUSTIFY_SPACE_BETWEEN}
        alignItems={ALIGN_CENTER}
        marginTop={SPACING.spacing3}
        height="2.25rem"
      >
        <StyledText as="h1" id="DevicesLanding_title">
          {t('devices')}
        </StyledText>
        <NewRobotSetupHelp />
      </Flex>
      {isScanning && noRobots ? <DevicesLoadingState /> : null}
      {!isScanning && noRobots ? <DevicesEmptyState /> : null}
      {!noRobots ? (
        <>
          <CollapsibleSection
            marginY={SPACING.spacing3}
            title={t('available', {
              count: [...healthyReachableRobots, ...unhealthyReachableRobots]
                .length,
            })}
          >
            {healthyReachableRobots.map(robot => (
              <ApiHostProvider key={robot.name} hostname={robot.ip ?? null}>
                <RobotCard robot={robot} />
              </ApiHostProvider>
            ))}
            {unhealthyReachableRobots.map(robot => (
              <ApiHostProvider key={robot.name} hostname={robot.ip ?? null}>
                <RobotCard robot={robot} />
              </ApiHostProvider>
            ))}
          </CollapsibleSection>
          <Divider />
          <CollapsibleSection
            marginY={SPACING.spacing3}
            title={t('unavailable', {
              count: [...recentlySeenRobots, ...unreachableRobots].length,
            })}
            isExpandedInitially={healthyReachableRobots.length === 0}
          >
            {recentlySeenRobots.map(robot => (
              <RobotCard key={robot.name} robot={{ ...robot, local: null }} />
            ))}
            {unreachableRobots.map(robot => (
              <RobotCard key={robot.name} robot={robot} />
            ))}
          </CollapsibleSection>
        </>
      ) : null}
    </Box>
  )
}

function DevicesLoadingState(): JSX.Element {
  const { t } = useTranslation('devices_landing')
  return (
    <Flex
      flexDirection={DIRECTION_COLUMN}
      alignItems={ALIGN_CENTER}
      marginTop="10vh"
      marginBottom="10vh"
    >
      <StyledText as="h1">{t('looking_for_robots')}</StyledText>
      <Icon
        name="ot-spinner"
        aria-label="ot-spinner"
        spin
        size="3.25rem"
        marginTop={SPACING.spacing4}
        marginBottom={SPACING.spacing4}
        color={COLORS.darkGreyEnabled}
      />
      <Flex
        flexDirection={DIRECTION_COLUMN}
        alignItems={ALIGN_CENTER}
        position={POSITION_ABSOLUTE}
        bottom="2.5rem"
        left="0"
        right="0"
        marginLeft="auto"
        marginRight="auto"
        textAlign={TEXT_ALIGN_CENTER}
      >
        <Link
          css={LINK_STYLES}
          external
          href={TROUBLESHOOTING_CONNECTION_PROBLEMS_URL}
          display="flex"
          alignItems={ALIGN_CENTER}
          color={COLORS.darkBlack}
          fontSize={TYPOGRAPHY.fontSizeLabel}
          fontWeight={TYPOGRAPHY.fontWeightSemiBold}
          id="DevicesEmptyState_troubleshootingConnectionProblems"
        >
          {t('troubleshooting_connection_problems')}
          <Icon
            name="open-in-new"
            size="0.5rem"
            marginLeft={SPACING.spacing2}
          />
        </Link>
      </Flex>
    </Flex>
  )
}
