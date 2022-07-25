import * as React from 'react'
import { resetAllWhenMocks, when } from 'jest-when'
import { anyProps, renderWithProviders } from '@opentrons/components'
import { fireEvent } from '@testing-library/dom'
import { i18n } from '../../../i18n'
import { useTrackEvent } from '../../../redux/analytics'
import { LabwarePositionCheck } from '../index'
import { GenericStepScreen } from '../GenericStepScreen'
import { IntroScreen } from '../IntroScreen'
import { SummaryScreen } from '../SummaryScreen'
import { RobotMotionLoadingModal } from '../RobotMotionLoadingModal'
import { ConfirmPickUpTipModal } from '../ConfirmPickUpTipModal'
import { ExitPreventionModal } from '../ExitPreventionModal'
import { useSteps, useLabwarePositionCheck } from '../hooks'
import { useRestartRun } from '../../ProtocolUpload/hooks'
import type { LabwarePositionCheckStep } from '../types'

jest.mock('../../../redux/analytics')
jest.mock('../GenericStepScreen')
jest.mock('../IntroScreen')
jest.mock('../SummaryScreen')
jest.mock('../RobotMotionLoadingModal')
jest.mock('../ConfirmPickUpTipModal')
jest.mock('../ExitPreventionModal')
jest.mock('../../ProtocolUpload/hooks')
jest.mock('../hooks')

const mockGenericStepScreen = GenericStepScreen as jest.MockedFunction<
  typeof GenericStepScreen
>
const mockIntroScreen = IntroScreen as jest.MockedFunction<typeof IntroScreen>
const mockSummaryScreen = SummaryScreen as jest.MockedFunction<
  typeof SummaryScreen
>
const mockRobotMotionLoadingModal = RobotMotionLoadingModal as jest.MockedFunction<
  typeof RobotMotionLoadingModal
>
const mockConfirmPickUpTipModal = ConfirmPickUpTipModal as jest.MockedFunction<
  typeof ConfirmPickUpTipModal
>
const mockExitPreventionModal = ExitPreventionModal as jest.MockedFunction<
  typeof ExitPreventionModal
>
const mockUseSteps = useSteps as jest.MockedFunction<typeof useSteps>
const mockUseRestartRun = useRestartRun as jest.MockedFunction<
  typeof useRestartRun
>
const mockUseLabwarePositionCheck = useLabwarePositionCheck as jest.MockedFunction<
  typeof useLabwarePositionCheck
>
const mockUseTrackEvent = useTrackEvent as jest.MockedFunction<
  typeof useTrackEvent
>

const PICKUP_TIP_LABWARE_ID = 'PICKUP_TIP_LABWARE_ID'
const PRIMARY_PIPETTE_ID = 'PRIMARY_PIPETTE_ID'
const MOCK_RUN_ID = 'fakeRunId'

const render = (props: React.ComponentProps<typeof LabwarePositionCheck>) => {
  return renderWithProviders(<LabwarePositionCheck {...props} />, {
    i18nInstance: i18n,
  })[0]
}

let mockTrackEvent: jest.Mock
let mockRestartRun: jest.Mock

describe('LabwarePositionCheck', () => {
  let props: React.ComponentProps<typeof LabwarePositionCheck>
  beforeEach(() => {
    props = {
      onCloseClick: jest.fn(),
      runId: MOCK_RUN_ID,
    }
    when(mockUseSteps)
      .calledWith(MOCK_RUN_ID)
      .mockReturnValue([
        {
          commands: [
            {
              commandType: 'pickUpTip',
              params: {
                pipetteId: PRIMARY_PIPETTE_ID,
                labwareId: PICKUP_TIP_LABWARE_ID,
              },
            },
          ],
          labwareId:
            '1d57fc10-67ad-11ea-9f8b-3b50068bd62d:opentrons/opentrons_96_filtertiprack_200ul/1',
          section: 'PRIMARY_PIPETTE_TIPRACKS',
        } as LabwarePositionCheckStep,
      ])
    mockRestartRun = jest.fn()
    when(mockUseRestartRun).calledWith().mockReturnValue(mockRestartRun)
    when(mockUseLabwarePositionCheck)
      .calledWith(expect.anything(), expect.anything())
      .mockReturnValue({} as any)
    when(mockIntroScreen)
      .calledWith(anyProps())
      .mockReturnValue(<div>Mock Intro Screen</div>)
    when(mockGenericStepScreen)
      .calledWith(anyProps())
      .mockReturnValue(<div>Mock Generic Step Screen</div>)
    when(mockSummaryScreen)
      .calledWith(anyProps())
      .mockReturnValue(<div>Mock Summary Screen</div>)
    when(mockRobotMotionLoadingModal)
      .calledWith(anyProps())
      .mockReturnValue(<div>Mock Robot Motion Loading Modal</div>)
    when(mockConfirmPickUpTipModal)
      .calledWith(anyProps())
      .mockReturnValue(<div>Mock Confirm Pick Up Tip Modal</div>)
    when(mockExitPreventionModal)
      .calledWith(anyProps())
      .mockReturnValue(<div>Mock Exit Prevention Modal</div>)

    mockTrackEvent = jest.fn()
    when(mockUseTrackEvent).calledWith().mockReturnValue(mockTrackEvent)
  })
  afterEach(() => {
    resetAllWhenMocks()
    jest.resetAllMocks()
  })
  it('renders LabwarePositionCheck header and button and no components', () => {
    const { getByRole } = render(props)
    getByRole('heading', {
      name: 'Labware Position Check',
    })
    getByRole('button', {
      name: 'exit',
    })
  })
  it('prevention modal opens when exit button is pressed', () => {
    const { getByRole, getByText } = render(props)
    expect(props.onCloseClick).not.toHaveBeenCalled()
    const exitButton = getByRole('button', {
      name: 'exit',
    })
    fireEvent.click(exitButton)
    expect(mockExitPreventionModal).toHaveBeenCalled()
    getByText('Mock Exit Prevention Modal')
  })
  it('renders the loading screen', () => {
    mockUseLabwarePositionCheck.mockReturnValue({ isLoading: true } as any)
    const { getByText } = render(props)
    getByText('Mock Robot Motion Loading Modal')
  })
  it('renders the pick up tip confirmation modal', () => {
    mockUseLabwarePositionCheck.mockReturnValue({
      showPickUpTipConfirmationModal: true,
    } as any)
    const { getByText } = render(props)
    getByText('Mock Confirm Pick Up Tip Modal')
  })
  it('renders the summary screen', () => {
    mockUseLabwarePositionCheck.mockReturnValue({
      isComplete: true,
    } as any)
    const { getByText } = render(props)
    getByText('Mock Summary Screen')
  })
  it('renders the generic step screen', () => {
    mockUseLabwarePositionCheck.mockReturnValue({
      currentCommandIndex: 1,
    } as any)
    const { getByText } = render(props)
    getByText('Mock Generic Step Screen')
  })
  it('renders the into screen', () => {
    mockUseLabwarePositionCheck.mockReturnValue({
      currentCommandIndex: 0,
    } as any)
    const { getByText } = render(props)
    getByText('Mock Intro Screen')
  })
})
