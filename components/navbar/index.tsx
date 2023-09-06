import { useMediaQuery } from 'react-responsive'
import { useAccount } from 'wagmi'

import { useMarketplaceChain, useMounted } from '@/hooks'

import { PCContent } from './pc'
import { MobileContent } from './mobile'

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 960px)' })

  const isMounted = useMounted()

  const { routePrefix } = useMarketplaceChain()

  const { isConnected } = useAccount()

  if (!isMounted) {
    return null
  }

  return isMobile ? (
    <MobileContent routePrefix={routePrefix} />
  ) : (
    <PCContent isConnected={isConnected} routePrefix={routePrefix} />
  )
}

export default Navbar
