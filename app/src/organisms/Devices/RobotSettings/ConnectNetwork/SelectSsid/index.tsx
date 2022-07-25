import * as React from 'react'
import styled from 'styled-components'

import { SelectField, CONTEXT_MENU } from '@opentrons/components'
import * as Copy from '../i18n'
import { NetworkOptionLabel, NetworkActionLabel } from './NetworkOptionLabel'

import type {
  SelectFieldProps,
  SelectOptionOrGroup,
} from '@opentrons/components'

import type { WifiNetwork } from '../types'

export interface SelectSsidProps {
  list: WifiNetwork[]
  value: string | null
  showWifiDisconnect: boolean
  onConnect: (ssid: string) => unknown
  onJoinOther: () => unknown
  onDisconnect: () => unknown
  isRobotBusy: boolean
}

const FIELD_NAME = '__SelectSsid__'

const DISCONNECT_WIFI_VALUE = '__disconnect-from-wifi__'

const JOIN_OTHER_VALUE = '__join-other-network__'

const SELECT_JOIN_OTHER_GROUP = {
  options: [{ value: JOIN_OTHER_VALUE, label: Copy.LABEL_JOIN_OTHER_NETWORK }],
}

const makeSelectDisconnectGroup = (
  ssid: string
): { options: Array<{ value: string; label: string }> } => ({
  options: [
    { value: DISCONNECT_WIFI_VALUE, label: Copy.DISCONNECT_FROM_SSID(ssid) },
  ],
})

const StyledSelectField: React.ComponentType<SelectFieldProps> = styled(
  SelectField
)`
  max-width: 16.875rem;
`

const formatOptions = (
  list: WifiNetwork[],
  showWifiDisconnect: boolean
): SelectOptionOrGroup[] => {
  const ssidOptionsList = {
    options: list?.map(({ ssid }) => ({ value: ssid })),
  }
  const options = [ssidOptionsList, SELECT_JOIN_OTHER_GROUP]

  if (showWifiDisconnect) {
    const ssid = list.find(nw => nw.active)?.ssid ?? ''
    options.unshift(makeSelectDisconnectGroup(ssid))
  }

  return options
}

export function SelectSsid(props: SelectSsidProps): JSX.Element {
  const {
    list,
    value,
    onConnect,
    onJoinOther,
    onDisconnect,
    showWifiDisconnect,
    isRobotBusy,
  } = props

  const handleValueChange = (_: string, value: string): void => {
    if (value === JOIN_OTHER_VALUE) {
      onJoinOther()
    } else if (value === DISCONNECT_WIFI_VALUE) {
      onDisconnect()
    } else {
      onConnect(value)
    }
  }

  const formatOptionLabel: React.ComponentProps<
    typeof StyledSelectField
  >['formatOptionLabel'] = (option, { context }): JSX.Element | null => {
    const { value, label } = option

    if (label != null) return <NetworkActionLabel label={label} />
    const network = list.find(nw => nw.ssid === value)

    // react-select sets context to tell us if the value is rendered in the
    // options menu list or in the currently selected value. If it's being
    // rendered in the menu, we want to show a connected icon if the network
    // is active, but if the context is value, we want to hide the icon
    return network ? (
      <NetworkOptionLabel
        {...network}
        showConnectedIcon={context === CONTEXT_MENU}
      />
    ) : null
  }

  return (
    <StyledSelectField
      disabled={isRobotBusy}
      name={FIELD_NAME}
      value={value}
      options={formatOptions(list, showWifiDisconnect)}
      placeholder={Copy.SELECT_NETWORK}
      onValueChange={handleValueChange}
      formatOptionLabel={formatOptionLabel}
    />
  )
}
