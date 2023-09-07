import { Flex, Text } from '@/primitives'

import { TimeFilterToggle } from './time-filter-toggle'
import { useState } from 'react'

export function TopSale() {
  const [minutesFilter, setMinutesFilter] = useState<number>(1440)

  return (
    <Flex css={{ mb: '$6', '@sm': { my: '$6' }, gap: 32 }} direction="column">
      <Flex
        justify="between"
        align="center"
        css={{
          gap: '$2',
        }}
      >
        <Text style="title">Trades</Text>
        <TimeFilterToggle
          minutesFilter={minutesFilter}
          setMinutesFilter={setMinutesFilter}
        />
      </Flex>
    </Flex>
  )
}
