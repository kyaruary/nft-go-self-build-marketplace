import { useState } from 'react'

export type Chain = 'ethereum'

export type ChainStore = {
  chain: Chain
  changeChain: (chain: Chain) => void
}

export function useChainService(defaultChain: Chain = 'ethereum'): ChainStore {
  const [chain, setChain] = useState(defaultChain)

  return {
    chain,
    changeChain: setChain,
  }
}
