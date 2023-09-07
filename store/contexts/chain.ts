import { createContext } from 'react'
import { ChainStore } from '../services/chain'

export const ChainContext = createContext<ChainStore>({
  chain: 'ethereum',
  changeChain() {},
})
