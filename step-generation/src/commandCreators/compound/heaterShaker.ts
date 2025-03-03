import { curryCommandCreator, reduceCommandCreators } from '../../utils'
import * as errorCreators from '../../errorCreators'
import {
  CommandCreator,
  CurriedCommandCreator,
  HeaterShakerArgs,
  HeaterShakerModuleState,
} from '../../types'
import { getModuleState } from '../../robotStateSelectors'
import { delay } from '../atomic/delay'
import { heaterShakerOpenLatch } from '../atomic/heaterShakerOpenLatch'
import { heaterShakerCloseLatch } from '../atomic/heaterShakerCloseLatch'
import { heaterShakerDeactivateHeater } from '../atomic/heaterShakerDeactivateHeater'
import { setTemperature } from '../atomic/setTemperature'
import { waitForTemperature } from '../atomic'
import { heaterShakerStopShake } from '../atomic/heaterShakerStopShake'
import { heaterShakerSetTargetShakeSpeed } from '../atomic/heaterShakerSetTargetShakeSpeed'

export const heaterShaker: CommandCreator<HeaterShakerArgs> = (
  args,
  invariantContext,
  prevRobotState
) => {
  const heaterShakerState = getModuleState(
    prevRobotState,
    args.module
  ) as HeaterShakerModuleState

  if (heaterShakerState === null) {
    return {
      errors: [errorCreators.missingModuleError()],
    }
  }

  const commandCreators: CurriedCommandCreator[] = []

  if (args.latchOpen) {
    commandCreators.push(
      curryCommandCreator(heaterShakerOpenLatch, {
        moduleId: args.module,
      })
    )
  } else {
    commandCreators.push(
      curryCommandCreator(heaterShakerCloseLatch, {
        moduleId: args.module,
      })
    )
  }

  if (args.targetTemperature === null) {
    commandCreators.push(
      curryCommandCreator(heaterShakerDeactivateHeater, {
        moduleId: args.module,
      })
    )
  } else {
    commandCreators.push(
      curryCommandCreator(setTemperature, {
        module: args.module,
        targetTemperature: args.targetTemperature,
        commandCreatorFnName: 'setTemperature',
      })
    )

    commandCreators.push(
      curryCommandCreator(waitForTemperature, {
        module: args.module,
        temperature: args.targetTemperature,
        commandCreatorFnName: 'waitForTemperature',
      })
    )
  }

  if (args.rpm === null) {
    commandCreators.push(
      curryCommandCreator(heaterShakerStopShake, {
        moduleId: args.module,
      })
    )
  } else {
    commandCreators.push(
      curryCommandCreator(heaterShakerSetTargetShakeSpeed, {
        moduleId: args.module,
        commandCreatorFnName: 'setShakeSpeed',
        rpm: args.rpm,
      })
    )
  }

  if (
    (args.timerMinutes != null && args.timerMinutes !== 0) ||
    (args.timerSeconds != null && args.timerSeconds !== 0)
  ) {
    const totalSeconds =
      (args.timerSeconds ?? 0) + (args.timerMinutes ?? 0) * 60
    commandCreators.push(
      curryCommandCreator(delay, {
        commandCreatorFnName: 'delay',
        description: null,
        name: null,
        meta: null,
        wait: totalSeconds,
      })
    )
    commandCreators.push(
      curryCommandCreator(heaterShakerStopShake, {
        moduleId: args.module,
      })
    )
    commandCreators.push(
      curryCommandCreator(heaterShakerDeactivateHeater, {
        moduleId: args.module,
      })
    )
  }

  return reduceCommandCreators(
    commandCreators,
    invariantContext,
    prevRobotState
  )
}
