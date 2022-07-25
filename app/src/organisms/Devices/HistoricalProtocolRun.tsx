import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { css } from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  Flex,
  Box,
  Icon,
  SPACING,
  COLORS,
  JUSTIFY_SPACE_AROUND,
  ALIGN_CENTER,
  BORDERS,
} from '@opentrons/components'
import { StyledText } from '../../atoms/text'
import { getStoredProtocols } from '../../redux/protocol-storage'
import { formatInterval } from '../RunTimeControl/utils'
import { formatTimestamp } from './utils'
import { EMPTY_TIMESTAMP } from './constants'
import { HistoricalProtocolRunOverflowMenu as OverflowMenu } from './HistoricalProtocolRunOverflowMenu'
import { HistoricalProtocolRunOffsetDrawer as OffsetDrawer } from './HistoricalProtocolRunOffsetDrawer'
import type { RunData } from '@opentrons/api-client'
import type { State } from '../../redux/types'

const CLICK_STYLE = css`
  cursor: pointer;
  overflow-wrap: anywhere;
`

interface HistoricalProtocolRunProps {
  run: RunData
  protocolName: string
  robotName: string
  robotIsBusy: boolean
  protocolKey?: string
}

export function HistoricalProtocolRun(
  props: HistoricalProtocolRunProps
): JSX.Element | null {
  const { t } = useTranslation('run_details')
  const { run, protocolName, robotIsBusy, robotName, protocolKey } = props
  const history = useHistory()
  const [offsetDrawerOpen, setOffsetDrawerOpen] = React.useState(false)
  const storedProtocols = useSelector((state: State) =>
    getStoredProtocols(state)
  )
  const runStatus = run.status
  const runDisplayName = formatTimestamp(run.createdAt)
  let duration = EMPTY_TIMESTAMP
  if (runStatus !== 'idle') {
    if (run.completedAt != null && run.startedAt != null) {
      duration = formatInterval(run.startedAt, run.completedAt)
    } else if (run.startedAt != null) {
      duration = formatInterval(run.startedAt, new Date().toString())
    }
  }
  const protocolKeyInStoredKeys = storedProtocols.find(
    ({ protocolKey: key }) => protocolKey === key
  )

  return (
    <>
      <Flex
        justifyContent={JUSTIFY_SPACE_AROUND}
        alignItems={ALIGN_CENTER}
        padding={SPACING.spacing3}
        borderBottom={offsetDrawerOpen ? '' : BORDERS.lineBorder}
        backgroundColor={
          run.status === 'running' ? COLORS.lightBlue : COLORS.white
        }
      >
        <Box
          onClick={() => setOffsetDrawerOpen(!offsetDrawerOpen)}
          role="button"
        >
          <Icon
            name={offsetDrawerOpen ? 'chevron-up' : 'chevron-down'}
            width="15px"
            marginRight={SPACING.spacing3}
            css={{ cursor: 'pointer' }}
          />
        </Box>
        <StyledText
          as="p"
          width="25%"
          data-testid={`RecentProtocolRuns_Run_${protocolKey}`}
          onClick={() =>
            history.push(
              `${robotName}/protocol-runs/${run.id}/protocolRunDetailsTab?`
            )
          }
          css={css`
            cursor: pointer;
          `}
        >
          {runDisplayName}
        </StyledText>
        {protocolKeyInStoredKeys != null ? (
          <StyledText
            as="p"
            width="35%"
            data-testid={`RecentProtocolRuns_Protocol_${protocolKey}`}
            onClick={() => history.push(`/protocols/${protocolKey}`)}
            css={CLICK_STYLE}
            marginRight={SPACING.spacing4}
          >
            {protocolName}
          </StyledText>
        ) : (
          <StyledText
            as="p"
            width="35%"
            data-testid={`RecentProtocolRuns_Protocol_${protocolKey}`}
            overflowWrap="anywhere"
          >
            {protocolName}
          </StyledText>
        )}
        <StyledText
          as="p"
          width="20%"
          textTransform="capitalize"
          data-testid={`RecentProtocolRuns_Status_${protocolKey}`}
        >
          {runStatus === 'running' && (
            <Icon
              name="circle"
              color={COLORS.blue}
              size={SPACING.spacing2}
              marginX={SPACING.spacing2}
              marginBottom={SPACING.spacing2}
            />
          )}
          {runStatus != null ? t(`status_${runStatus}`) : ''}
        </StyledText>
        <StyledText
          as="p"
          width="20%"
          data-testid={`RecentProtocolRuns_Duration`}
        >
          {duration}
        </StyledText>
        <OverflowMenu
          runId={run.id}
          robotName={robotName}
          robotIsBusy={robotIsBusy}
        />
      </Flex>
      {offsetDrawerOpen && <OffsetDrawer run={run} robotName={robotName} />}
    </>
  )
}
