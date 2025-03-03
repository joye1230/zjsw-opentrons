import * as React from 'react'

import { mountWithStore, WrapperWithStore } from '@opentrons/components'
import { mockConnectableRobot as mockRobot } from '../../../../../redux/discovery/__fixtures__'
import * as Buildroot from '../../../../../redux/buildroot'
import { VersionInfoModal } from '../VersionInfoModal'
import { ViewUpdateModal } from '../ViewUpdateModal'
import { InstallModal } from '../InstallModal'
import { UpdateBuildroot } from '..'

import type { State } from '../../../../../redux/types'

// shallow render connected children
jest.mock('../VersionInfoModal', () => ({
  VersionInfoModal: () => <></>,
}))

jest.mock('../ViewUpdateModal', () => ({
  ViewUpdateModal: () => <></>,
}))

jest.mock('../../../../../redux/buildroot/selectors')

const getBuildrootUpdateAvailable = Buildroot.getBuildrootUpdateAvailable as jest.MockedFunction<
  typeof Buildroot.getBuildrootUpdateAvailable
>
const getBuildrootSession = Buildroot.getBuildrootSession as jest.MockedFunction<
  typeof Buildroot.getBuildrootSession
>
const getRobotSystemType = Buildroot.getRobotSystemType as jest.MockedFunction<
  typeof Buildroot.getRobotSystemType
>

const MOCK_STATE: State = { mockState: true } as any

describe('UpdateBuildroot wizard', () => {
  const closeModal = jest.fn()
  const render = (): WrapperWithStore<
    React.ComponentProps<typeof UpdateBuildroot>
  > => {
    return mountWithStore<React.ComponentProps<typeof UpdateBuildroot>>(
      <UpdateBuildroot robot={mockRobot} close={closeModal} />,
      { initialState: MOCK_STATE }
    )
  }

  beforeEach(() => {
    getBuildrootUpdateAvailable.mockReturnValue(Buildroot.UPGRADE)
    getRobotSystemType.mockReturnValue(Buildroot.BUILDROOT)
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should set the update as seen on mount', () => {
    const { store } = render()

    expect(store.dispatch).toHaveBeenCalledWith(
      Buildroot.setBuildrootUpdateSeen(mockRobot.name)
    )
  })

  it('should render a VersionInfoModal first', () => {
    const { wrapper } = render()
    const versionInfo = wrapper.find(VersionInfoModal)

    expect(versionInfo.prop('robot')).toBe(mockRobot)
    expect(versionInfo.prop('robotUpdateType')).toBe(Buildroot.UPGRADE)

    expect(getBuildrootUpdateAvailable).toHaveBeenCalledWith(
      MOCK_STATE,
      mockRobot
    )
    expect(closeModal).not.toHaveBeenCalled()

    versionInfo.invoke('close')?.()
    expect(closeModal).toHaveBeenCalled()
  })

  it('should proceed from the VersionInfoModal to a ViewUpdateModal', () => {
    const { wrapper } = render()
    const versionInfo = wrapper.find(VersionInfoModal)

    expect(wrapper.exists(ViewUpdateModal)).toBe(false)
    versionInfo.invoke('proceed')?.()

    const viewUpdate = wrapper.find(ViewUpdateModal)
    expect(viewUpdate.prop('robotName')).toBe(mockRobot.name)
    expect(viewUpdate.prop('robotUpdateType')).toBe(Buildroot.UPGRADE)
    expect(viewUpdate.prop('robotSystemType')).toBe(Buildroot.BUILDROOT)
    expect(getRobotSystemType).toHaveBeenCalledWith(mockRobot)

    viewUpdate.invoke('close')?.()
    expect(closeModal).toHaveBeenCalled()
  })

  it('should proceed from the ViewUpdateModal to an install', () => {
    const { wrapper, store } = render()
    wrapper.find(VersionInfoModal).invoke('proceed')?.()
    wrapper.find(ViewUpdateModal).invoke('proceed')?.()

    expect(store.dispatch).toHaveBeenCalledWith(
      Buildroot.startBuildrootUpdate(mockRobot.name)
    )
  })

  it('should display an InstallModal if a session is in progress', () => {
    const mockSession = {
      robotName: mockRobot.name,
      userFileInfo: null,
      token: null,
      pathPrefix: null,
      step: null,
      stage: null,
      progress: null,
      error: null,
    }

    getBuildrootSession.mockReturnValue(mockSession)

    const { wrapper } = render()
    const installModal = wrapper.find(InstallModal)

    expect(installModal.prop('robot')).toBe(mockRobot)
    expect(installModal.prop('robotSystemType')).toBe(Buildroot.BUILDROOT)
    expect(installModal.prop('session')).toBe(mockSession)

    expect(closeModal).not.toHaveBeenCalled()
    installModal.invoke('close')?.()
    expect(closeModal).toHaveBeenCalled()
  })

  it('should clear a finished session un unmount', () => {
    const mockSession = {
      robotName: mockRobot.name,
      userFileInfo: null,
      token: null,
      pathPrefix: null,
      step: Buildroot.FINISHED,
      stage: null,
      progress: null,
      error: null,
    }

    getBuildrootSession.mockReturnValue(mockSession)

    const { wrapper, store } = render()

    wrapper.unmount()
    expect(store.dispatch).toHaveBeenCalledWith(
      Buildroot.clearBuildrootSession()
    )
  })

  it('should not clear an unfinished session un unmount', () => {
    const mockSession = {
      robotName: mockRobot.name,
      userFileInfo: null,
      token: null,
      pathPrefix: null,
      step: Buildroot.RESTART,
      stage: null,
      progress: null,
      error: null,
    }

    getBuildrootSession.mockReturnValue(mockSession)

    const { wrapper, store } = render()

    wrapper.unmount()
    expect(store.dispatch).not.toHaveBeenCalledWith(
      Buildroot.clearBuildrootSession()
    )
  })
})
