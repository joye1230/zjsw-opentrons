import { storedProtocolData } from '../../../../redux/protocol-storage/__fixtures__'

import type {
  LoadedLabwareById,
  LoadedLabwareDefinitionsById,
  ModuleModelsById,
  PipetteNamesById,
} from '@opentrons/api-client'
import type { LabwareDefinition2 } from '@opentrons/shared-data'
import type { StoredProtocolAnalysis } from '../useStoredProtocolAnalysis'

export const LABWARE_BY_ID: LoadedLabwareById = {
  'labware-0': {
    definitionId: 'fakeLabwareDefinitionId',
    displayName: 'a fake labware',
  },
}
export const LABWARE_DEFINITIONS: LoadedLabwareDefinitionsById = {
  fakeLabwareDefinitionId: {} as LabwareDefinition2,
}
export const MODULE_MODELS_BY_ID: ModuleModelsById = {
  'module-0': { model: 'thermocyclerModuleV1' },
}
export const PIPETTE_NAMES_BY_ID: PipetteNamesById = {
  'pipette-0': { name: 'p10_single' },
}

export const STORED_PROTOCOL_ANALYSIS = {
  ...storedProtocolData.mostRecentAnalysis,
  modules: MODULE_MODELS_BY_ID,
  labware: LABWARE_BY_ID,
  labwareDefinitions: LABWARE_DEFINITIONS,
  pipettes: PIPETTE_NAMES_BY_ID,
} as StoredProtocolAnalysis
