import { TopSale } from './top-sale'
import { useMounted } from '@/hooks'

import { ChainStats } from './chain-stats'
import { useMediaQuery } from 'react-responsive'
import { ChainExplorer } from './chain-explorer'

export function Content() {
  const isSSR = typeof window === 'undefined'
  const isMounted = useMounted()
  const isSmallDevice = useMediaQuery({ maxWidth: 905 }) && isMounted

  return (
    <>
      <ChainExplorer />
      {!isSmallDevice ? <ChainStats /> : null}
      {isSSR || !isMounted ? null : <TopSale />}
    </>
  )
}
