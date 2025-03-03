import * as React from 'react'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import {
  parseLiquidsInLoadOrder,
  parseLabwareInfoByLiquidId,
} from '@opentrons/api-client'
import {
  DIRECTION_COLUMN,
  Flex,
  RobotWorkSpace,
  LabwareRender,
  Module,
  ALIGN_CENTER,
  JUSTIFY_CENTER,
} from '@opentrons/components'
import {
  inferModuleOrientationFromXCoordinate,
  THERMOCYCLER_MODULE_V1,
} from '@opentrons/shared-data'
import standardDeckDef from '@opentrons/shared-data/deck/definitions/3/ot2_standard.json'
import {
  useLabwareRenderInfoForRunById,
  useModuleRenderInfoForProtocolById,
} from '../../hooks'
import { LabwareInfoOverlay } from '../LabwareInfoOverlay'
import { LiquidsLabwareDetailsModal } from './LiquidsLabwareDetailsModal'
import { getWellFillFromLabwareId } from './utils'
import type { DeckDefinition } from '@opentrons/shared-data'

const DECK_MAP_VIEWBOX = '-80 -40 550 500'
const DECK_LAYER_BLOCKLIST = [
  'calibrationMarkings',
  'fixedBase',
  'doorStops',
  'metalFrame',
  'removalHandle',
  'removableDeckOutline',
  'screwHoles',
]

interface SetupLiquidsMapProps {
  runId: string
  robotName: string
}

export function SetupLiquidsMap(props: SetupLiquidsMapProps): JSX.Element {
  const { runId, robotName } = props
  const [hoverLabwareId, setHoverLabwareId] = React.useState('')

  const moduleRenderInfoById = useModuleRenderInfoForProtocolById(
    robotName,
    runId
  )
  const labwareRenderInfoById = useLabwareRenderInfoForRunById(runId)
  const liquids = parseLiquidsInLoadOrder()
  const labwareByLiquidId = parseLabwareInfoByLiquidId()
  const [liquidDetailsLabwareId, setLiquidDetailsLabwareId] = React.useState<
    string | null
  >(null)

  return (
    <Flex
      flex="1"
      maxHeight="80vh"
      flexDirection={DIRECTION_COLUMN}
      alignItems={ALIGN_CENTER}
      justifyContent={JUSTIFY_CENTER}
    >
      <RobotWorkSpace
        deckDef={(standardDeckDef as unknown) as DeckDefinition}
        viewBox={DECK_MAP_VIEWBOX}
        deckLayerBlocklist={DECK_LAYER_BLOCKLIST}
        id={'LabwareSetup_deckMap'}
      >
        {() => (
          <>
            {map(
              moduleRenderInfoById,
              ({
                x,
                y,
                moduleDef,
                nestedLabwareDef,
                nestedLabwareId,
                nestedLabwareDisplayName,
              }) => (
                <Module
                  key={`LabwareSetup_Module_${moduleDef.model}_${x}${y}`}
                  x={x}
                  y={y}
                  orientation={inferModuleOrientationFromXCoordinate(x)}
                  def={moduleDef}
                  innerProps={
                    moduleDef.model === THERMOCYCLER_MODULE_V1
                      ? { lidMotorState: 'open' }
                      : {}
                  }
                >
                  {nestedLabwareDef != null && nestedLabwareId != null ? (
                    <React.Fragment
                      key={`LabwareSetup_Labware_${nestedLabwareDef.metadata.displayName}_${x}${y}`}
                    >
                      <LabwareRender definition={nestedLabwareDef} />
                      <LabwareInfoOverlay
                        definition={nestedLabwareDef}
                        labwareId={nestedLabwareId}
                        displayName={nestedLabwareDisplayName}
                        runId={runId}
                      />
                    </React.Fragment>
                  ) : null}
                </Module>
              )
            )}
            {map(
              labwareRenderInfoById,
              ({ x, y, labwareDef, displayName }, labwareId) => {
                const wellFill = getWellFillFromLabwareId(
                  labwareId,
                  liquids,
                  labwareByLiquidId
                )
                const labwareHasLiquid = !isEmpty(wellFill)
                return (
                  <React.Fragment
                    key={`LabwareSetup_Labware_${labwareDef.metadata.displayName}_${x}${y}`}
                  >
                    <g
                      transform={`translate(${x},${y})`}
                      onMouseEnter={() => setHoverLabwareId(labwareId)}
                      onMouseLeave={() => setHoverLabwareId('')}
                      onClick={() =>
                        labwareHasLiquid
                          ? setLiquidDetailsLabwareId(labwareId)
                          : null
                      }
                      cursor={labwareHasLiquid ? 'pointer' : ''}
                    >
                      <LabwareRender
                        definition={labwareDef}
                        wellFill={labwareHasLiquid ? wellFill : undefined}
                        hover={labwareId === hoverLabwareId && labwareHasLiquid}
                      />
                      <LabwareInfoOverlay
                        definition={labwareDef}
                        labwareId={labwareId}
                        displayName={displayName}
                        runId={runId}
                        hover={labwareId === hoverLabwareId && labwareHasLiquid}
                        labwareHasLiquid={labwareHasLiquid}
                      />
                    </g>
                  </React.Fragment>
                )
              }
            )}
          </>
        )}
      </RobotWorkSpace>
      {liquidDetailsLabwareId != null && (
        <LiquidsLabwareDetailsModal
          labwareId={liquidDetailsLabwareId}
          runId={runId}
          closeModal={() => setLiquidDetailsLabwareId(null)}
        />
      )}
    </Flex>
  )
}
