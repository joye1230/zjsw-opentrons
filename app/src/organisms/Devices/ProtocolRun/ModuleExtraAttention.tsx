import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useCreateCommandMutation } from '@opentrons/react-api-client'
import {
  HEATERSHAKER_MODULE_TYPE,
  MAGNETIC_MODULE_TYPE,
  ModuleType,
  THERMOCYCLER_MODULE_TYPE,
} from '@opentrons/shared-data'
import { COLORS } from '@opentrons/components'
import { Divider } from '../../../atoms/structure/Divider'
import {
  Banner,
  BannerItem,
} from '../../ProtocolSetup/RunSetupCard/ModuleSetup/Banner/Banner'
import { SecureLabwareModal } from '../../ProtocolSetup/RunSetupCard/LabwareSetup/SecureLabwareModal'

import type { ModuleRenderInfoForProtocol } from '../hooks'
import type {
  HeaterShakerCloseLatchCreateCommand,
  HeaterShakerOpenLatchCreateCommand,
} from '@opentrons/shared-data/protocol/types/schemaV6/command/module'
import type { ModuleTypesThatRequiresExtraAttention } from '../../ProtocolSetup/RunSetupCard/LabwareSetup/utils/getModuleTypesThatRequireExtraAttention'

interface ModuleExtraAttentionProps {
  moduleTypes: ModuleType[]
  modulesInfo: { [moduleId: string]: ModuleRenderInfoForProtocol }
  runId: string
}

export const ModuleExtraAttention = (
  props: ModuleExtraAttentionProps
): JSX.Element => {
  const { moduleTypes, modulesInfo, runId } = props
  const { t } = useTranslation('protocol_setup')
  const [
    secureLabwareModalType,
    setSecureLabwareModalType,
  ] = React.useState<ModuleType | null>(null)

  const modulesThatRequireExtraAttention = Object.values(
    modulesInfo
  ).filter(module => moduleTypes.includes(module.moduleDef.moduleType))

  return (
    <Banner title={t('extra_attention_warning_title')}>
      {secureLabwareModalType != null && (
        <SecureLabwareModal
          type={secureLabwareModalType as ModuleTypesThatRequiresExtraAttention}
          onCloseClick={() => setSecureLabwareModalType(null)}
        />
      )}
      {modulesThatRequireExtraAttention.map((module, index) => {
        return (
          <React.Fragment key={index}>
            {index > 0 && <Divider color={COLORS.medGrey} />}
            {
              <ModuleExtraAttentionItem
                runId={runId}
                moduleInfo={module}
                onClick={() =>
                  setSecureLabwareModalType(module.moduleDef.moduleType)
                }
              />
            }
          </React.Fragment>
        )
      })}
    </Banner>
  )
}

interface ModuleExtraAttentionItemProps {
  moduleInfo: ModuleRenderInfoForProtocol
  onClick: () => unknown
  runId: string
}

const ModuleExtraAttentionItem = (
  props: ModuleExtraAttentionItemProps
): JSX.Element | null => {
  const { moduleInfo, onClick, runId } = props
  const { t } = useTranslation(['heater_shaker', 'protocol_setup'])
  const { createCommand } = useCreateCommandMutation()

  switch (moduleInfo.moduleDef.moduleType) {
    case MAGNETIC_MODULE_TYPE:
      return (
        <BannerItem
          title={t('module_in_slot', {
            moduleName: moduleInfo.moduleDef.displayName,
            slotName: moduleInfo.slotName,
          })}
          body={t('protocol_setup:magnetic_module_extra_attention')}
          btnText={t('view_instructions')}
          onClick={onClick}
        />
      )
    case HEATERSHAKER_MODULE_TYPE:
      if (moduleInfo.attachedModuleMatch !== null) {
        const isLatchClosed =
          moduleInfo.attachedModuleMatch.moduleType ===
            'heaterShakerModuleType' &&
          (moduleInfo.attachedModuleMatch.data.labwareLatchStatus ===
            'idle_closed' ||
            moduleInfo.attachedModuleMatch.data.labwareLatchStatus ===
              'closing')

        const latchCommand:
          | HeaterShakerOpenLatchCreateCommand
          | HeaterShakerCloseLatchCreateCommand = {
          commandType: isLatchClosed
            ? 'heaterShaker/openLabwareLatch'
            : 'heaterShaker/closeLabwareLatch',
          params: { moduleId: moduleInfo.moduleId },
        }

        const toggleLatch = (): void => {
          createCommand({
            runId: runId,
            command: latchCommand,
          }).catch((e: Error) => {
            console.error(
              `error setting module status with command type ${latchCommand.commandType}: ${e.message}`
            )
          })
        }
        return (
          <BannerItem
            title={t('module_in_slot', {
              moduleName: moduleInfo.moduleDef.displayName,
              slotName: moduleInfo.slotName,
            })}
            body={t('protocol_setup:heater_shaker_extra_attention')}
            btnText={
              isLatchClosed ? t('open_labware_latch') : t('close_labware_latch')
            }
            onClick={toggleLatch}
          />
        )
      } else {
        return null
      }
    case THERMOCYCLER_MODULE_TYPE:
      return (
        <BannerItem
          title={t('module_in_slot', {
            moduleName: moduleInfo.moduleDef.displayName,
            slotName: moduleInfo.slotName,
          })}
          body={t('protocol_setup:thermocycler_extra_attention')}
          btnText={t('view_instructions')}
          onClick={onClick}
        />
      )
    default:
      return null
  }
}
