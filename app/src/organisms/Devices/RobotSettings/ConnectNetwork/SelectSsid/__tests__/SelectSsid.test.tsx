import * as React from 'react'
import { mount } from 'enzyme'
import { SelectField, CONTEXT_VALUE, CONTEXT_MENU } from '@opentrons/components'

import * as Fixtures from '../../../../../../redux/networking/__fixtures__'
import { LABEL_JOIN_OTHER_NETWORK, DISCONNECT_FROM_SSID } from '../../i18n'

import { SelectSsid } from '..'
import { NetworkOptionLabel } from '../NetworkOptionLabel'

const mockWifiList = [
  { ...Fixtures.mockWifiNetwork, ssid: 'foo', active: true },
  { ...Fixtures.mockWifiNetwork, ssid: 'bar' },
  { ...Fixtures.mockWifiNetwork, ssid: 'baz' },
]

describe('SelectSsid component', () => {
  const handleConnect = jest.fn()
  const handleJoinOther = jest.fn()
  const handleDisconnect = jest.fn()
  let mockIsRobotBusy = false

  const render = (showDisconnect = true) => {
    return mount(
      <SelectSsid
        list={mockWifiList}
        value={null}
        onConnect={handleConnect}
        onJoinOther={handleJoinOther}
        onDisconnect={handleDisconnect}
        showWifiDisconnect={showDisconnect}
        isRobotBusy={mockIsRobotBusy}
      />
    )
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('renders a SelectField', () => {
    const wrapper = render()
    const selectField = wrapper.find(SelectField)

    expect(selectField).toHaveLength(1)
  })

  it('renders a disabled SeleectField if a robot is busy', () => {
    mockIsRobotBusy = true
    const wrapper = render()
    const selectField = wrapper.find(SelectField)

    expect(selectField.prop('disabled')).toBe(true)
  })

  it('maps ssid list to an ssid option group', () => {
    const wrapper = render()
    const selectField = wrapper.find(SelectField)
    const options = selectField.prop('options')

    expect(options).toContainEqual({
      options: [{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }],
    })
  })

  it('adds an option group for join other network', () => {
    const wrapper = render()
    const selectField = wrapper.find(SelectField)
    const options = selectField.prop('options')

    expect(options).toContainEqual({
      options: [
        {
          value: expect.any(String),
          label: LABEL_JOIN_OTHER_NETWORK,
        },
      ],
    })
  })

  it('adds an option group for disconnect if showWifiDisconnect = true', () => {
    const wrapper = render(true)
    const selectField = wrapper.find(SelectField)
    const options = selectField.prop('options')

    expect(options).toContainEqual({
      options: [
        {
          value: expect.any(String),
          label: DISCONNECT_FROM_SSID('foo'),
        },
      ],
    })
  })

  it('does not add an option group for disconnect if showWifiDisconnect = false', () => {
    const wrapper = render(false)
    const selectField = wrapper.find(SelectField)
    const options = selectField.prop('options')

    expect(options).not.toContainEqual({
      options: [{ label: DISCONNECT_FROM_SSID('foo') }],
    })
  })

  it('if user selects ssid value, onSelect is called with ssid', () => {
    const wrapper = render()
    const selectField = wrapper.find(SelectField)

    selectField.invoke('onValueChange')?.('_', 'foo')

    expect(handleConnect).toHaveBeenCalledWith('foo')
  })

  it('if user selects join other value, onJoinOther is called', () => {
    const wrapper = render()
    const selectField = wrapper.find(SelectField)
    const options = selectField.prop('options').flatMap((o: any) => o.options)
    const joinOtherValue = options.find(
      o => o.label === LABEL_JOIN_OTHER_NETWORK
    )?.value

    expect(joinOtherValue).toEqual(expect.any(String))
    selectField.invoke('onValueChange')?.('_', joinOtherValue)

    expect(handleJoinOther).toHaveBeenCalled()
  })

  it('if user selects disconnect value, onDisconnect is called', () => {
    const wrapper = render()
    const selectField = wrapper.find(SelectField)
    const options = selectField.prop('options').flatMap((o: any) => o.options)
    const disconectValue = options.find(
      o => o.label === DISCONNECT_FROM_SSID('foo')
    )?.value

    expect(disconectValue).toEqual(expect.any(String))
    selectField.invoke('onValueChange')?.('_', disconectValue)

    expect(handleDisconnect).toHaveBeenCalled()
  })

  it('formats the wifi options as <NetworkOptionLabel>s', () => {
    const wrapper = render()
    const selectField = wrapper.find(SelectField)

    const expectedFoo = mount(
      <NetworkOptionLabel {...mockWifiList[0]} showConnectedIcon={false} />
    )
    const expectedBar = mount(
      <NetworkOptionLabel {...mockWifiList[1]} showConnectedIcon={true} />
    )
    const fooLabel = selectField.prop('formatOptionLabel')?.({ value: 'foo' }, {
      context: CONTEXT_VALUE,
    } as any) as any
    const barLabel = selectField.prop('formatOptionLabel')?.({ value: 'bar' }, {
      context: CONTEXT_MENU,
    } as any) as any

    expect(mount(fooLabel)).toEqual(expectedFoo)
    expect(mount(barLabel)).toEqual(expectedBar)
  })

  it('formats the join other label', () => {
    const wrapper = render()
    const selectField = wrapper.find(SelectField)
    const options = selectField.prop('options').flatMap((o: any) => o.options)
    const joinOtherOpt = options.find(o => o.label === LABEL_JOIN_OTHER_NETWORK)

    expect(joinOtherOpt?.value).toEqual(expect.any(String))
    expect(joinOtherOpt?.label).toEqual(expect.any(String))

    const label = selectField.prop('formatOptionLabel')?.(joinOtherOpt, {
      context: CONTEXT_MENU,
    } as any) as any

    expect(mount(label).html()).toContain(joinOtherOpt?.label)
  })

  it('formats the disconnect label', () => {
    const wrapper = render()
    const selectField = wrapper.find(SelectField)
    const options = selectField.prop('options').flatMap((o: any) => o.options)
    const disconectOpt = options.find(
      o => o.label === DISCONNECT_FROM_SSID('foo')
    )

    expect(disconectOpt?.value).toEqual(expect.any(String))
    expect(disconectOpt?.label).toEqual(expect.any(String))

    const label = selectField.prop('formatOptionLabel')?.(disconectOpt, {
      context: CONTEXT_MENU,
    } as any) as any

    expect(mount(label).html()).toContain(disconectOpt?.label)
  })
})
