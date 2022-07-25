import * as React from 'react'
import { css } from 'styled-components'

import {
  DIRECTION_COLUMN,
  Flex,
  Btn,
  Icon,
  JUSTIFY_SPACE_BETWEEN,
  StyleProps,
} from '@opentrons/components'
import { StyledText } from '../../atoms/text'

// Note hex codes will be replaced when PR-10664 is merged into release-6.0.0
const ACCORDION_STYLE = css`
  border-radius: 50%;
  &:hover {
    background: #16212d26;
  }
  &:active {
    background: #16212d40;
  }
`

interface CollapsibleSectionProps extends StyleProps {
  title: string
  children: React.ReactNode
  isExpandedInitially?: boolean
}

export function CollapsibleSection(
  props: CollapsibleSectionProps
): JSX.Element {
  const { title, children, isExpandedInitially = true, ...styleProps } = props
  const [isExpanded, setIsExpanded] = React.useState(isExpandedInitially)
  return (
    <Flex flexDirection={DIRECTION_COLUMN} {...styleProps}>
      <Flex
        justifyContent={JUSTIFY_SPACE_BETWEEN}
        onClick={() => setIsExpanded(!isExpanded)}
        css={{
          cursor: 'pointer',
        }}
      >
        <StyledText as="p">{title}</StyledText>
        <Btn
          onClick={() => setIsExpanded(!isExpanded)}
          data-testid={
            isExpanded
              ? `CollapsibleSection_collapse_${title}`
              : `CollapsibleSection_expand_${title}`
          }
        >
          <Icon
            size={'1.5rem'}
            name={isExpanded ? 'minus' : 'plus'}
            css={ACCORDION_STYLE}
          />
        </Btn>
      </Flex>
      {isExpanded ? children : null}
    </Flex>
  )
}
