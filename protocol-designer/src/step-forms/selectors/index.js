// @flow
import type {ElementProps} from 'react'
import type {
  DeckSlot,
  DropdownOption,
  Mount,
} from '@opentrons/components'
import {typeof InstrumentGroup as InstrumentGroupProps} from '@opentrons/components'
import assert from 'assert'
import forEach from 'lodash/forEach'
import isEmpty from 'lodash/isEmpty'
import mapValues from 'lodash/mapValues'
import reduce from 'lodash/reduce'
import {createSelector} from 'reselect'
import {getPipetteNameSpecs, getLabware} from '@opentrons/shared-data'
import i18n from '../../localization'
import {INITIAL_DECK_SETUP_STEP_ID} from '../../constants'
import {generateNewForm, getFormWarnings, getFormErrors, stepFormToArgs} from '../../steplist/formLevel'
import {hydrateField, getFieldErrors} from '../../steplist/fieldLevel'
import {addSpecsToPipetteInvariantProps} from '../utils'

import type {FormWarning} from '../../steplist/formLevel'
import type {BaseState, Selector} from '../../types'
import type {FormData, StepIdType, StepType} from '../../form-types'
import type {LabwareTypeById} from '../../labware-ingred/types'
import type {
  StepArgsAndErrors,
  StepFormAndFieldErrors,
  StepItemData,
  StepFormContextualState,
} from '../../steplist/types'
import type {
  InitialDeckSetup,
  LabwareEntities,
  LabwareEntity,
  LabwareOnDeck,
  PipetteEntities,
  PipetteOnDeck,
  FormPipettesByMount,
} from '../types'
import type {RootState} from '../reducers'

const rootSelector = (state: BaseState): RootState => state.stepForms

// NOTE Ian 2019-02-14: in Redux containers world, you probably only care about
// the labware type, in which case you ought to use `getLabwareTypesById` instead.
// `getLabwareEntities` is intended for uses tied to the LabwareEntities type
// (which currently contains only `type`, but may expand)
export const getLabwareEntities: Selector<LabwareEntities> = createSelector(
  rootSelector,
  (state) => state.labwareInvariantProperties
)

export const getLabwareTypesById: Selector<LabwareTypeById> = createSelector(
  getLabwareEntities,
  (labwareEntities) => mapValues(
    labwareEntities,
    (labware: LabwareEntity) => labware.type
  )
)

export const getPipetteEntities: Selector<PipetteEntities> = createSelector(
  rootSelector,
  (state) => addSpecsToPipetteInvariantProps(state.pipetteInvariantProperties)
)

export const getInitialDeckSetup: Selector<InitialDeckSetup> = createSelector(
  rootSelector,
  getLabwareEntities,
  getPipetteEntities,
  (state, labwareInvariantProperties, pipetteInvariantProperties) => {
    const initialSetupStep = state.savedStepForms[INITIAL_DECK_SETUP_STEP_ID]
    assert(
      initialSetupStep && initialSetupStep.stepType === 'manualIntervention',
      'expected initial deck setup step to be "manualIntervention" step')
    const labwareLocations = (initialSetupStep && initialSetupStep.labwareLocationUpdate) || {}
    const pipetteLocations = (initialSetupStep && initialSetupStep.pipetteLocationUpdate) || {}
    return {
      labware: mapValues(labwareLocations, (slot: DeckSlot, labwareId: string): LabwareOnDeck => {
        return {slot, ...labwareInvariantProperties[labwareId]}
      }),
      pipettes: mapValues(pipetteLocations, (mount: Mount, pipetteId: string): PipetteOnDeck => {
        return {mount, ...pipetteInvariantProperties[pipetteId]}
      }),
    }
  }
)

export const getPermittedTipracks: Selector<Array<string>> = createSelector(
  getInitialDeckSetup,
  (initialDeckSetup) =>
    reduce(initialDeckSetup.pipettes, (acc: Array<string>, pipette: PipetteOnDeck) => {
      return (pipette.tiprackModel)
        ? [...acc, pipette.tiprackModel]
        : acc
    }, [])
)

function _getPipetteDisplayName (name: string): string {
  const pipetteSpecs = getPipetteNameSpecs(name)
  if (!pipetteSpecs) return 'Unknown Pipette'
  return pipetteSpecs.displayName
}

// TODO: Ian 2018-12-20 EVENTUALLY make this `getEquippedPipetteOptionsForStepId`, so it tells you
// equipped pipettes per step id instead of always using initial deck setup
// (for when we support multiple deck setup steps)
export const getEquippedPipetteOptions: Selector<Array<DropdownOption>> = createSelector(
  getInitialDeckSetup,
  (initialDeckSetup) =>
    reduce(initialDeckSetup.pipettes, (acc: Array<DropdownOption>, pipette: PipetteOnDeck, id: string) => {
      const nextOption = {
        name: _getPipetteDisplayName(pipette.name),
        value: id,
      }
      return [...acc, nextOption]
    }, [])
)

// Formats pipette data specifically for file page InstrumentGroup component
type PipettesForInstrumentGroup = ElementProps<InstrumentGroupProps>
export const getPipettesForInstrumentGroup: Selector<PipettesForInstrumentGroup> = createSelector(
  getInitialDeckSetup,
  (initialDeckSetup) => reduce(initialDeckSetup.pipettes, (acc: PipettesForInstrumentGroup, pipetteOnDeck: PipetteOnDeck, pipetteId) => {
    const pipetteSpec = getPipetteNameSpecs(pipetteOnDeck.name)
    const tiprackSpec = getLabware(pipetteOnDeck.tiprackModel)

    const pipetteForInstrumentGroup = {
      mount: pipetteOnDeck.mount,
      channels: pipetteSpec ? pipetteSpec.channels : undefined,
      description: _getPipetteDisplayName(pipetteOnDeck.name),
      isDisabled: false,
      tiprackModel: tiprackSpec ? `${tiprackSpec.metadata.tipVolume || '?'} uL` : undefined,
      tiprack: {model: pipetteOnDeck.tiprackModel},
    }

    return {
      ...acc,
      [pipetteOnDeck.mount]: pipetteForInstrumentGroup,
    }
  }, {})
)

export const getPipettesForEditPipetteForm: Selector<FormPipettesByMount> = createSelector(
  getInitialDeckSetup,
  (initialDeckSetup) => reduce(initialDeckSetup.pipettes, (acc: FormPipettesByMount, pipetteOnDeck: PipetteOnDeck, id): FormPipettesByMount => {
    const pipetteSpec = getPipetteNameSpecs(pipetteOnDeck.name)
    const tiprackSpec = getLabware(pipetteOnDeck.tiprackModel)

    if (!pipetteSpec || !tiprackSpec) return acc

    const pipetteForInstrumentGroup = {
      pipetteName: pipetteOnDeck.name,
      tiprackModel: tiprackSpec.metadata.name,
    }

    return {
      ...acc,
      [pipetteOnDeck.mount]: pipetteForInstrumentGroup,
    }
  }, {left: {pipetteName: null, tiprackModel: null}, right: {pipetteName: null, tiprackModel: null}})
)

export const getUnsavedForm: Selector<?FormData> = createSelector(
  rootSelector,
  (state) => state.unsavedForm
)

export const getOrderedStepIds: Selector<Array<StepIdType>> = createSelector(
  rootSelector,
  (state) => state.orderedStepIds
)

export const getSavedStepForms: Selector<*> = createSelector(
  rootSelector,
  (state) => state.savedStepForms
)

const getOrderedSavedForms: Selector<Array<FormData>> = createSelector(
  getOrderedStepIds,
  getSavedStepForms,
  (orderedStepIds, savedStepForms) => {
    return orderedStepIds
      .map(stepId => savedStepForms[stepId])
      .filter(form => form && form.id != null) // NOTE: for old protocols where stepId could === 0, need to do != null here
  }
)

// TODO: Ian 2019-01-25 type with hydrated form type
function _getHydratedForm (rawForm: FormData, contextualState: StepFormContextualState) {
  const hydratedForm = mapValues(rawForm, (value, name) => (
    hydrateField(contextualState, name, value)
  ))
  return hydratedForm
}

// TODO type with hydrated form type
const _getFormAndFieldErrorsFromHydratedForm = (hydratedForm: FormData): StepFormAndFieldErrors => {
  let errors: StepFormAndFieldErrors = {}

  forEach(hydratedForm, (value, fieldName) => {
    const fieldErrors = getFieldErrors(fieldName, value)
    if (fieldErrors && fieldErrors.length > 0) {
      errors = {
        ...errors,
        field: {
          ...errors.field,
          [fieldName]: fieldErrors,
        },
      }
    }
  })
  const formErrors = getFormErrors(hydratedForm.stepType, hydratedForm)
  if (formErrors && formErrors.length > 0) {
    errors = {...errors, form: formErrors}
  }

  return errors
}

export const getHydrationContext: Selector<StepFormContextualState> = createSelector(
  getLabwareEntities,
  getPipetteEntities,
  (labware, pipettes) => ({labware, pipettes})
)

export const getUnsavedFormErrors: Selector<?StepFormAndFieldErrors> = createSelector(
  getUnsavedForm,
  getHydrationContext,
  (unsavedForm, contextualState) => {
    if (!unsavedForm) return null
    const hydratedForm = _getHydratedForm(unsavedForm, contextualState)
    const errors = _getFormAndFieldErrorsFromHydratedForm(hydratedForm)
    return errors
  }
)

export const getArgsAndErrorsByStepId: Selector<{[StepIdType]: StepArgsAndErrors}> = createSelector(
  getOrderedSavedForms,
  getHydrationContext,
  (stepForms, contextualState) => {
    return reduce(stepForms, (acc, stepForm) => {
      const hydratedForm = _getHydratedForm(stepForm, contextualState)
      const errors = _getFormAndFieldErrorsFromHydratedForm(hydratedForm)
      const nextStepData = isEmpty(errors)
        ? {stepArgs: stepFormToArgs(hydratedForm)}
        : {errors, stepArgs: null}

      return {
        ...acc,
        [stepForm.id]: nextStepData,
      }
    }, {})
  }
)

export const getIsNewStepForm = createSelector(
  getUnsavedForm,
  getSavedStepForms,
  (formData, savedForms) =>
    (formData && formData.id != null)
      ? !savedForms[formData.id]
      : true
)

export const getFormLevelWarningsForUnsavedForm: Selector<Array<FormWarning>> = createSelector(
  getUnsavedForm,
  getHydrationContext,
  (unsavedForm, contextualState) => {
    if (!unsavedForm) return []
    const hydratedForm = _getHydratedForm(unsavedForm, contextualState)
    return getFormWarnings(unsavedForm.stepType, hydratedForm)
  }
)

export const getFormLevelWarningsPerStep: Selector<{[stepId: string]: Array<FormWarning>}> = createSelector(
  getSavedStepForms,
  getHydrationContext,
  (forms, contextualState) =>
    mapValues(forms, (form, stepId) => {
      if (!form) return []
      const hydratedForm = _getHydratedForm(form, contextualState)
      return getFormWarnings(form.stepType, hydratedForm)
    })
)

// TODO: Ian 2018-12-19 this is DEPRECATED, should be removed once legacySteps reducer is removed
const getSteps = (state: BaseState) => rootSelector(state).legacySteps
export function _getStepFormData (state: BaseState, stepId: StepIdType, newStepType?: StepType): ?FormData {
  const existingStep = getSavedStepForms(state)[stepId]

  if (existingStep) {
    return existingStep
  }

  const steps = getSteps(state)
  const stepTypeFromStepReducer = steps[stepId] && steps[stepId].stepType
  const stepType = newStepType || stepTypeFromStepReducer

  if (!stepType) {
    console.error(`New step with id "${stepId}" was added with no stepType, could not generate form`)
    return null
  }

  return generateNewForm({
    stepId,
    stepType: stepType,
  })
}

// TODO: Ian 2018-12-19 this is DEPRECATED, should be removed once legacySteps reducer is removed
export const getAllSteps: Selector<{[stepId: StepIdType]: StepItemData}> = createSelector(
  getSteps,
  getSavedStepForms,
  (steps, savedForms) => {
    return mapValues(
      steps,
      (step: StepItemData, id: StepIdType): StepItemData => {
        const savedForm = (savedForms && savedForms[id]) || null
        return {
          ...steps[id],
          formData: savedForm,
          title: savedForm ? savedForm.stepName : i18n.t(`application.stepType.${step.stepType}`),
          description: savedForm ? savedForm.stepDetails : null,
        }
      }
    )
  }
)
