import { Config, GoTrading, init } from '@nftgo/gotrading'
import { GoTradingChain } from 'go-trading-kit/types/chain'
import { useMemo, useState } from 'react'

export type GoTradingClient = GoTrading & {
  version: string
  chains: GoTradingChain[]
  currentChain: () => GoTradingChain
}

export function useGoTradingClientService(options: Partial<Config>) {
  const [gotrading] = useState<GoTrading>(() => init(options))

  const client = useMemo<GoTradingClient>(() => {
    return {
      ...gotrading,
      version: '0.0.1',
      // TODO: remove this
      chains: [],
      currentChain: () => ({
        id: 1,
        baseApiUrl: '',
        active: true,
        apiKey: '',
      }),
    }
  }, [gotrading])

  return client
}
