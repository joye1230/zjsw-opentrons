import { useContext, createContext } from 'react'
import standardDeckDef from '@opentrons/shared-data/deck/definitions/3/ot2_standard.json'
import { checkModuleCompatibility } from '@opentrons/shared-data'
import { useProtocolDetails } from '../RunDetails/hooks'
import { useSelector } from 'react-redux'
import { State } from '../../redux/types'
import { getProtocolModulesInfo } from '../Devices/ProtocolRun/utils/getProtocolModulesInfo'
import { getLabwareRenderInfo } from '../Devices/ProtocolRun/utils/getLabwareRenderInfo'
import { getAttachedModules } from '../../redux/modules'
import { getConnectedRobotName } from '../../redux/robot/selectors'
import { AttachedModule } from '../../redux/modules/types'
import { useCurrentProtocol } from '../ProtocolUpload/hooks'

import type { ProtocolModuleInfo } from '../Devices/ProtocolRun/utils/getProtocolModulesInfo'
import type { LabwareRenderInfoById } from '../Devices/ProtocolRun/utils/getLabwareRenderInfo'
import type { RunTimeCommand } from '@opentrons/shared-data/protocol/types/schemaV6'
import type { LoadPipetteRunTimeCommand } from '@opentrons/shared-data/protocol/types/schemaV6/command/setup'

interface ProtocolMetadata {
  author?: string
  lastUpdated?: number | null
  description?: string | null
  creationMethod?: 'json' | 'python'
  [key: string]: any
}

export function useProtocolMetadata(): ProtocolMetadata {
  const protocolRecord = useCurrentProtocol()
  const protocolMetadata = protocolRecord?.data?.metadata
  const creationMethod = protocolRecord?.data?.protocolType
  const author = protocolMetadata?.author
  const description = protocolMetadata?.description
  const lastUpdated = protocolMetadata?.lastModified

  return {
    ...protocolMetadata,
    author,
    lastUpdated,
    description,
    creationMethod,
  }
}

interface ModuleRenderInfo extends ProtocolModuleInfo {
  attachedModuleMatch: AttachedModule | null
}
export function useModuleRenderInfoById(): {
  [moduleId: string]: ModuleRenderInfo
} {
  const { protocolData } = useProtocolDetails()
  const robotName = useSelector((state: State) => getConnectedRobotName(state))
  const attachedModules = useSelector((state: State) =>
    getAttachedModules(state, robotName)
  )
  if (protocolData == null) return {}

  const protocolModulesInfo = getProtocolModulesInfo(
    protocolData,
    standardDeckDef as any
  )
  const protocolModulesInfoInLoadOrder = protocolModulesInfo.sort(
    (modA, modB) => modA.protocolLoadOrder - modB.protocolLoadOrder
  )
  let matchedAmod: AttachedModule[] = []
  const allModuleRenderInfo = protocolModulesInfoInLoadOrder.map(
    protocolMod => {
      const compatibleAttachedModule =
        attachedModules.find(
          attachedMod =>
            checkModuleCompatibility(
              attachedMod.moduleModel,
              protocolMod.moduleDef.model
            ) && !matchedAmod.find(m => m === attachedMod)
        ) ?? null
      if (compatibleAttachedModule !== null) {
        matchedAmod = [...matchedAmod, compatibleAttachedModule]
        return {
          ...protocolMod,
          attachedModuleMatch: compatibleAttachedModule,
        }
      }
      return {
        ...protocolMod,
        attachedModuleMatch: null,
      }
    }
  )
  return allModuleRenderInfo.reduce(
    (acc, moduleInfo) => ({
      ...acc,
      [moduleInfo.moduleId]: moduleInfo,
    }),
    {}
  )
}

export function useLabwareRenderInfoById(): LabwareRenderInfoById {
  const { protocolData } = useProtocolDetails()
  return protocolData != null
    ? getLabwareRenderInfo(protocolData, standardDeckDef as any)
    : {}
}

export function usePipetteMount(
  pipetteId: string
): LoadPipetteRunTimeCommand['params']['mount'] | null {
  const { protocolData } = useProtocolDetails()
  return (
    protocolData?.commands.find(
      (command: RunTimeCommand): command is LoadPipetteRunTimeCommand =>
        command.commandType === 'loadPipette' &&
        command.params.pipetteId === pipetteId
    )?.params.mount ?? null
  )
}

// this context is used to trigger an LPC success toast render from an LPC component lower in the tree
export const LPCSuccessToastContext = createContext<{
  setIsShowingLPCSuccessToast: (isShowing: boolean) => void
}>({ setIsShowingLPCSuccessToast: () => null })

export function useLPCSuccessToast(): {
  setIsShowingLPCSuccessToast: (isShowing: boolean) => void
} {
  const { setIsShowingLPCSuccessToast } = useContext(LPCSuccessToastContext)
  return { setIsShowingLPCSuccessToast }
}
