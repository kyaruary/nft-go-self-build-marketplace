//  TODO: refactor
import supportedChains from '@/utils/chains'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()

  //Detect route chain first
  const routePrefix = router.query.chain
  const routeChain = supportedChains.find(
    (chain) => chain.routePrefix === routePrefix
  )
  if (routeChain) {
    return routeChain
  }

  return supportedChains[0]
}
