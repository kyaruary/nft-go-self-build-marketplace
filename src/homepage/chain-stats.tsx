import { useMemo } from 'react'
import { Flex, FormatCryptoCurrency, Text } from '@/primitives'
import { useChainStats, useMarketplaceChain } from '@/hooks'
import { formatNumber } from '@/utils/numbers'

type Section = {
  title: string
  stat: string | JSX.Element
}

export function ChainStats() {
  const { data: statsData } = useChainStats()

  const stats = statsData?.stats?.['7day']

  const chain = useMarketplaceChain()

  const statsSections = useMemo(() => {
    const sections: Section[] = [
      {
        title: '7d Mints',
        stat: '--',
      },
      {
        title: '7d Secondary Sales',
        stat: '--',
      },
      {
        title: '7d Total Volume',
        stat: '--',
      },
    ]
    if (stats) {
      sections[0].stat = `${
        stats.mintCount ? formatNumber(stats.mintCount) : 0
      }`
      sections[1].stat = `${
        stats.saleCount ? formatNumber(stats.saleCount) : 0
      }`
      sections[2].stat = (
        <FormatCryptoCurrency
          amount={stats.totalVolume}
          textStyle="h6"
          logoHeight={14}
        />
      )
    }
    return sections
  }, [stats, chain])

  return (
    <Flex css={{ gap: 24 }}>
      {statsSections.map((section, i) => (
        <Flex
          key={i}
          align="center"
          css={{
            border: '1px solid',
            borderColor: '$panelBorder',
            p: '$4',
            borderRadius: 8,
            gap: '$4',
            flex: 1,
          }}
        >
          <Flex
            direction="column"
            css={{ gap: '$2', flexBasis: '100%' }}
            justify={'center'}
            align={'center'}
          >
            <Text style="subtitle2" color="subtle">
              {section.title}
            </Text>
            <Text style="subtitle">{section.stat}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}
