import { PropsWithChildren } from 'react'
import { Chain, useChainService } from '../services/chain'
import { ChainContext } from '../contexts/chain'

export function ChainProvider(props: PropsWithChildren<{ chain?: Chain }>) {
  const value = useChainService()

  return (
    <ChainContext.Provider value={value}>
      {props.children}
    </ChainContext.Provider>
  )
}
