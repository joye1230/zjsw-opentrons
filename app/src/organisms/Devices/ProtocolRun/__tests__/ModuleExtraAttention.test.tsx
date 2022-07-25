import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import { HeaterShakerModule } from '@opentrons/api-client'
import { renderWithProviders } from '@opentrons/components'
import { useCreateCommandMutation } from '@opentrons/react-api-client'
import { i18n } from '../../../../i18n'
import { RUN_ID_1 } from '../../../RunTimeControl/__fixtures__'
import { ModuleExtraAttention } from '../ModuleExtraAttention'
import {
  mockHeaterShaker as mockHeaterShakerAttachedModule,
  mockThermocycler as mockThermocyclerAttachedModule,
} from '../../../../redux/modules/__fixtures__'

import type { ModuleModel, ModuleType } from '@opentrons/shared-data'
import type { AttachedModule } from '../../../../redux/modules/types'

jest.mock('@opentrons/react-api-client')

const mockUseCreateCommandMutation = useCreateCommandMutation as jest.MockedFunction<
  typeof useCreateCommandMutation
>

const MOCK_MAGNETIC_MODULE_COORDS = [10, 20, 0]
const mockMagneticModule = {
  moduleId: 'someMagneticModule',
  model: 'magneticModuleV2' as ModuleModel,
  moduleType: 'magneticModuleType' as ModuleType,
  labwareOffset: { x: 5, y: 5, z: 5 },
  cornerOffsetFromSlot: { x: 1, y: 1, z: 1 },
  calibrationPoint: { x: 0, y: 0 },
  displayName: 'Magnetic Module',
  dimensions: {
    xDimension: 100,
    yDimension: 100,
    footprintXDimension: 50,
    footprintYDimension: 50,
    labwareInterfaceXDimension: 80,
    labwareInterfaceYDimension: 120,
  },
  twoDimensionalRendering: { children: [] },
  quirks: [],
}

const mockHeaterShaker = {
  moduleId: 'someHeaterShakerModule',
  model: 'heaterShakerModuleV1' as ModuleModel,
  moduleType: 'heaterShakerModuleType' as ModuleType,
  labwareOffset: { x: 5, y: 5, z: 5 },
  cornerOffsetFromSlot: { x: 1, y: 1, z: 1 },
  calibrationPoint: { x: 0, y: 0 },
  displayName: 'Heater Shaker Module',
  dimensions: {
    xDimension: 100,
    yDimension: 100,
    footprintXDimension: 50,
    footprintYDimension: 50,
    labwareInterfaceXDimension: 80,
    labwareInterfaceYDimension: 120,
  },
  twoDimensionalRendering: { children: [] },
  quirks: [],
}

const mockThermocycler = {
  moduleId: 'someThermocyclerModule',
  model: 'thermocyclerModuleV1' as ModuleModel,
  moduleType: 'thermocyclerModuleType' as ModuleType,
  labwareOffset: { x: 5, y: 5, z: 5 },
  cornerOffsetFromSlot: { x: 1, y: 1, z: 1 },
  calibrationPoint: { x: 0, y: 0 },
  displayName: 'Thermocycler Module',
  dimensions: {
    xDimension: 100,
    yDimension: 100,
    footprintXDimension: 50,
    footprintYDimension: 50,
    labwareInterfaceXDimension: 80,
    labwareInterfaceYDimension: 120,
  },
  twoDimensionalRendering: { children: [] },
  quirks: [],
}

const mockHeaterShakerLatchClosed: HeaterShakerModule = {
  id: 'heatershaker_id',
  moduleModel: 'heaterShakerModuleV1',
  moduleType: 'heaterShakerModuleType',
  serialNumber: 'jkl123',
  hardwareRevision: 'heatershaker_v4.0',
  firmwareVersion: 'v2.0.0',
  hasAvailableUpdate: true,
  data: {
    labwareLatchStatus: 'idle_closed',
    speedStatus: 'idle',
    temperatureStatus: 'idle',
    currentSpeed: null,
    currentTemperature: null,
    targetSpeed: null,
    targetTemperature: null,
    errorDetails: null,
    status: 'idle',
  },
  usbPort: { path: '/dev/ot_module_heatershaker0', port: 1, hub: null },
}

const render = (props: React.ComponentProps<typeof ModuleExtraAttention>) => {
  return renderWithProviders(<ModuleExtraAttention {...props} />, {
    i18nInstance: i18n,
  })[0]
}

describe('ModuleExtraAttention', () => {
  let props: React.ComponentProps<typeof ModuleExtraAttention>
  let mockCreateCommand = jest.fn()

  beforeEach(() => {
    props = { moduleTypes: [], modulesInfo: {}, runId: RUN_ID_1 }
    mockCreateCommand = jest.fn()
    mockCreateCommand.mockResolvedValue(null)
    mockUseCreateCommandMutation.mockReturnValue({
      createCommand: mockCreateCommand,
    } as any)
  })

  it('should render the correct title', () => {
    const { getByText } = render(props)
    getByText(/Secure Labware and Modules Before Proceeding to Run/i)
  })

  it('if there is a magnetic module it should show the correct item and information', () => {
    props = {
      moduleTypes: [mockMagneticModule.moduleType],
      modulesInfo: {
        [mockMagneticModule.moduleId]: {
          moduleId: mockMagneticModule.moduleId,
          x: MOCK_MAGNETIC_MODULE_COORDS[0],
          y: MOCK_MAGNETIC_MODULE_COORDS[1],
          z: MOCK_MAGNETIC_MODULE_COORDS[2],
          moduleDef: mockMagneticModule as any,
          nestedLabwareDisplayName: 'Source Plate',
          nestedLabwareDef: null,
          nestedLabwareId: null,
          protocolLoadOrder: 0,
          slotName: '3',
          attachedModuleMatch: null,
        },
      },
      runId: RUN_ID_1,
    }

    const { getByText } = render(props)
    getByText('Magnetic Module in Slot 3')
    getByText('Opentrons recommends securing labware with the module’s bracket')
    getByText('View instructions')
  })

  it('if there is a heater shaker module it should show the correct item and clicking on button sends close command', () => {
    props = {
      moduleTypes: [mockHeaterShaker.moduleType],
      modulesInfo: {
        [mockHeaterShaker.moduleId]: {
          moduleId: mockHeaterShaker.moduleId,
          x: 1,
          y: 1,
          z: 1,
          moduleDef: mockHeaterShaker as any,
          nestedLabwareDisplayName: 'Source Plate',
          nestedLabwareDef: null,
          nestedLabwareId: null,
          protocolLoadOrder: 0,
          slotName: '1',
          attachedModuleMatch: mockHeaterShakerAttachedModule as AttachedModule,
        },
      },
      runId: RUN_ID_1,
    }

    const { getByText, getByRole } = render(props)
    getByText('Heater Shaker Module in Slot 1')
    getByText('Use latch controls for easy placement of labware.')
    const closeBtn = getByRole('button', { name: 'Close Labware Latch' })
    fireEvent.click(closeBtn)
    expect(mockCreateCommand).toHaveBeenCalledWith({
      command: {
        commandType: 'heaterShaker/closeLabwareLatch',
        params: {
          moduleId: mockHeaterShaker.moduleId,
        },
      },
      runId: RUN_ID_1,
    })
  })

  it('if there is a heater shaker module and clicking on button sends open latch command', () => {
    props = {
      moduleTypes: [mockHeaterShaker.moduleType],
      modulesInfo: {
        [mockHeaterShaker.moduleId]: {
          moduleId: mockHeaterShaker.moduleId,
          x: 1,
          y: 1,
          z: 1,
          moduleDef: mockHeaterShaker as any,
          nestedLabwareDisplayName: 'Source Plate',
          nestedLabwareDef: null,
          nestedLabwareId: null,
          protocolLoadOrder: 0,
          slotName: '1',
          attachedModuleMatch: mockHeaterShakerLatchClosed as AttachedModule,
        },
      },
      runId: RUN_ID_1,
    }

    const { getByRole } = render(props)
    const openBtn = getByRole('button', { name: 'Open Labware Latch' })
    fireEvent.click(openBtn)
    expect(mockCreateCommand).toHaveBeenCalledWith({
      command: {
        commandType: 'heaterShaker/openLabwareLatch',
        params: {
          moduleId: mockHeaterShaker.moduleId,
        },
      },
      runId: RUN_ID_1,
    })
  })

  it('if there is a thermocycler module it should show the correct information', () => {
    props = {
      moduleTypes: [mockThermocycler.moduleType],
      modulesInfo: {
        [mockThermocycler.moduleId]: {
          moduleId: mockThermocycler.moduleId,
          x: 1,
          y: 1,
          z: 1,
          moduleDef: mockThermocycler as any,
          nestedLabwareDisplayName: 'Source Plate',
          nestedLabwareDef: null,
          nestedLabwareId: null,
          protocolLoadOrder: 0,
          slotName: '7',
          attachedModuleMatch: mockThermocyclerAttachedModule as AttachedModule,
        },
      },
      runId: RUN_ID_1,
    }

    const { getByText } = render(props)
    getByText('Thermocycler Module in Slot 7')
    getByText(
      'Labware must be secured with the module’s latch. Thermocycler lid must be open when robot moves to the slots it occupies. Opentrons will automatically open the lid to move to these slots during Labware Position Check.'
    )
    getByText('View instructions')
  })
})
