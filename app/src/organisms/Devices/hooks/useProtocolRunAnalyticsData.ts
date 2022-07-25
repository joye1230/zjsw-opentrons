import { useSelector } from 'react-redux'

import { hash } from '../../../redux/analytics/hash'
import { getStoredProtocol } from '../../../redux/protocol-storage'
import { useStoredProtocolAnalysis, useProtocolDetailsForRun } from './'
import { useProtocolMetadata } from '../../ProtocolSetup/hooks'
import { useRunTimestamps } from '../../RunTimeControl/hooks'
import { formatInterval } from '../../RunTimeControl/utils'
import { EMPTY_TIMESTAMP } from '../constants'

import type { ProtocolAnalyticsData } from '../../../redux/analytics/types'
import type { StoredProtocolData } from '../../../redux/protocol-storage/types'
import type { State } from '../../../redux/types'
import type { StoredProtocolAnalysis } from './'

export const parseProtocolRunAnalyticsData = (
  protocolAnalysis: StoredProtocolAnalysis | null,
  storedProtocol: StoredProtocolData | null,
  startedAt: string | null
) => () => {
  const hashTasks = [
    hash(protocolAnalysis?.metadata?.author) ?? '',
    hash(storedProtocol?.srcFiles?.toString() ?? '') ?? '',
  ]

  return Promise.all(hashTasks).then(([protocolAuthor, protocolText]) => ({
    protocolRunAnalyticsData: {
      protocolType: protocolAnalysis?.config?.protocolType ?? '',
      protocolAppName:
        protocolAnalysis?.config?.protocolType === 'json'
          ? 'Protocol Designer'
          : 'Python API',
      protocolAppVersion:
        protocolAnalysis?.config?.protocolType === 'json'
          ? protocolAnalysis?.config?.schemaVersion.toFixed(1)
          : protocolAnalysis?.metadata?.apiLevel,
      protocolApiVersion: protocolAnalysis?.metadata?.apiLevel ?? '',
      protocolSource: protocolAnalysis?.metadata?.source ?? '',
      protocolName: protocolAnalysis?.metadata?.protocolName ?? '',
      pipettes: Object.values(protocolAnalysis?.pipettes ?? {})
        .map(pipette => pipette.name)
        .join(','),
      modules: Object.values(protocolAnalysis?.modules ?? {})
        .map(module => module.model)
        .join(','),
      protocolAuthor: protocolAuthor !== '' ? protocolAuthor : '',
      protocolText: protocolText !== '' ? protocolText : '',
    },
    runTime:
      startedAt != null ? formatInterval(startedAt, Date()) : EMPTY_TIMESTAMP,
  }))
}

type GetProtocolRunAnalyticsData = () => Promise<{
  protocolRunAnalyticsData: ProtocolAnalyticsData
  runTime: string
}>

/**
 *
 * @param   {string | null} runId
 * @returns {{ getProtocolRunAnalyticsData: GetProtocolRunAnalyticsData }}
 *          Function returned returns a promise that resolves to protocol analytics
 *          data properties for use in event trackEvent
 */
export function useProtocolRunAnalyticsData(
  runId: string | null
): {
  getProtocolRunAnalyticsData: GetProtocolRunAnalyticsData
} {
  const robotProtocolMetadata = useProtocolMetadata()
  const { protocolData: robotProtocolAnalysis } = useProtocolDetailsForRun(
    runId
  )
  const storedProtocolAnalysis = useStoredProtocolAnalysis(runId)
  const storedProtocol = useSelector((state: State) =>
    getStoredProtocol(state, storedProtocolAnalysis?.metadata?.protocolKey)
  )
  const protocolAnalysis =
    robotProtocolAnalysis != null && robotProtocolMetadata != null
      ? {
          ...robotProtocolAnalysis,
          metadata: robotProtocolMetadata,
          config: storedProtocolAnalysis?.config,
          createdAt: storedProtocolAnalysis?.createdAt ?? '',
          errors: storedProtocolAnalysis?.errors,
          files: storedProtocolAnalysis?.files ?? [],
        }
      : storedProtocolAnalysis
  const { startedAt } = useRunTimestamps(runId)

  const getProtocolRunAnalyticsData = parseProtocolRunAnalyticsData(
    protocolAnalysis as StoredProtocolAnalysis | null,
    storedProtocol,
    startedAt
  )

  return { getProtocolRunAnalyticsData }
}
