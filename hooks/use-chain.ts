import { useContext } from 'react'
import { ChainContext } from '@/store'

export function useChain() {
  return useContext(ChainContext)
}
