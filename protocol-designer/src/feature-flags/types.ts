// When flag types are removed from this list, the browser will hold on to that value indefinitely.
// To avoid being surprised when/if we deprecate and then re-introduce a flag with the same type string,
// items should never be removed from this list.
// Deprecated types should never be reused (unless there's a really good reason).
export const DEPRECATED_FLAGS = [
  'OT_PD_SHOW_UPLOAD_CUSTOM_LABWARE_BUTTON',
  'OT_PD_ENABLE_GEN2_PIPETTES',
  'OT_PD_ENABLE_MODULES',
  'OT_PD_ENABLE_MULTI_GEN2_PIPETTES',
  'OT_PD_ENABLE_CUSTOM_TIPRACKS',
  'OT_PD_ENABLE_THERMOCYCLER',
  'OT_PD_ENABLE_AIR_GAP_AND_DELAY',
  'OT_PD_ENABLE_MIX_DELAY',
  'OT_PD_ENABLE_MIX_DELAY',
  'OT_PD_ENABLE_AIR_GAP_DISPENSE',
  'BATCH_EDIT_ENABLED',
  'OT_PD_ENABLE_BATCH_EDIT_MIX',
  'OT_PD_ENABLE_SCHEMA_V6',
]
// union of feature flag string constant IDs
export type FlagTypes =
  | 'PRERELEASE_MODE'
  | 'OT_PD_DISABLE_MODULE_RESTRICTIONS'
  | 'OT_PD_ENABLE_HEATER_SHAKER'
  | 'OT_PD_ENABLE_LIQUID_COLOR_ENHANCEMENTS'
// flags that are not in this list only show in prerelease mode
export const userFacingFlags: FlagTypes[] = [
  'OT_PD_DISABLE_MODULE_RESTRICTIONS',
]
export const allFlags: FlagTypes[] = [...userFacingFlags, 'PRERELEASE_MODE']
export type Flags = Partial<Record<FlagTypes, boolean | null | undefined>>
