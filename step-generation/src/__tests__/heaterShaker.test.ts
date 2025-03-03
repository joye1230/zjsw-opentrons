import {
  HEATERSHAKER_MODULE_TYPE,
  HEATERSHAKER_MODULE_V1,
} from '@opentrons/shared-data'
import { heaterShaker } from '../commandCreators'
import { getModuleState } from '../robotStateSelectors'
import { getSuccessResult } from '../fixtures/commandFixtures'

import type { InvariantContext, RobotState, HeaterShakerArgs } from '../types'
import { getInitialRobotStateStandard, makeContext } from '../fixtures'

jest.mock('../robotStateSelectors')

const mockGetModuleState = getModuleState as jest.MockedFunction<
  typeof getModuleState
>

describe('heaterShaker compound command creator', () => {
  let heaterShakerArgs: HeaterShakerArgs
  const HEATER_SHAKER_ID = 'heaterShakerId'
  const HEATER_SHAKER_SLOT = '1'
  let robotState: RobotState
  let invariantContext: InvariantContext
  beforeEach(() => {
    heaterShakerArgs = {
      module: HEATER_SHAKER_ID,
      rpm: null,
      commandCreatorFnName: 'heaterShaker',
      targetTemperature: null,
      latchOpen: false,
      timerMinutes: null,
      timerSeconds: null,
    }
    invariantContext = {
      ...makeContext(),
      moduleEntities: {
        [HEATER_SHAKER_ID]: {
          id: HEATER_SHAKER_ID,
          type: HEATERSHAKER_MODULE_TYPE,
          model: HEATERSHAKER_MODULE_V1,
        },
      },
    }
    const state = getInitialRobotStateStandard(invariantContext)

    robotState = {
      ...state,
      modules: {
        ...state.modules,
        [HEATER_SHAKER_ID]: {
          slot: HEATER_SHAKER_SLOT,
        } as any,
      },
    }
    mockGetModuleState.mockReturnValue({
      type: HEATERSHAKER_MODULE_TYPE,
    } as any)
  })
  afterEach(() => {
    jest.restoreAllMocks()
  })
  it('should delay and deactivate the heater shaker when a user specificies a timer', () => {
    heaterShakerArgs = {
      ...heaterShakerArgs,
      rpm: 444,
      targetTemperature: 80,
      timerSeconds: 30,
    }
    const result = heaterShaker(heaterShakerArgs, invariantContext, robotState)

    expect(getSuccessResult(result).commands).toEqual([
      {
        commandType: 'heaterShaker/closeLabwareLatch',
        key: expect.any(String),
        params: {
          moduleId: 'heaterShakerId',
        },
      },
      {
        commandType: 'heaterShaker/setTargetTemperature',
        key: expect.any(String),
        params: {
          celsius: 80,
          moduleId: 'heaterShakerId',
        },
      },
      {
        commandType: 'heaterShaker/waitForTemperature',
        key: expect.any(String),
        params: {
          moduleId: 'heaterShakerId',
        },
      },
      {
        commandType: 'heaterShaker/setAndWaitForShakeSpeed',
        key: expect.any(String),
        params: {
          moduleId: 'heaterShakerId',
          rpm: 444,
        },
      },
      {
        commandType: 'delay',
        key: expect.any(String),
        params: {
          seconds: 30,
        },
      },
      {
        commandType: 'heaterShaker/deactivateShaker',
        key: expect.any(String),
        params: {
          moduleId: 'heaterShakerId',
        },
      },
      {
        commandType: 'heaterShaker/deactivateHeater',
        key: expect.any(String),
        params: {
          moduleId: 'heaterShakerId',
        },
      },
    ])
  })
  it('should NOT delay and deactivate the heater shaker when a user specificies a timer tthat is 0 seconds', () => {
    heaterShakerArgs = {
      ...heaterShakerArgs,
      rpm: 444,
      targetTemperature: 80,
      timerSeconds: 0,
      timerMinutes: 0,
    }
    const result = heaterShaker(heaterShakerArgs, invariantContext, robotState)

    expect(getSuccessResult(result).commands).toEqual([
      {
        commandType: 'heaterShaker/closeLabwareLatch',
        key: expect.any(String),
        params: {
          moduleId: 'heaterShakerId',
        },
      },
      {
        commandType: 'heaterShaker/setTargetTemperature',
        key: expect.any(String),
        params: {
          celsius: 80,
          moduleId: 'heaterShakerId',
        },
      },
      {
        commandType: 'heaterShaker/waitForTemperature',
        key: expect.any(String),
        params: {
          moduleId: 'heaterShakerId',
        },
      },
      {
        commandType: 'heaterShaker/setAndWaitForShakeSpeed',
        key: expect.any(String),
        params: {
          moduleId: 'heaterShakerId',
          rpm: 444,
        },
      },
    ])
  })
})
