import {
  RainbowKitProvider,
  darkTheme,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import { useTheme } from 'next-themes'
import { PropsWithChildren, useEffect, useState } from 'react'
import { WagmiConfig } from 'wagmi'

interface Props {
  config: any
  chains: any
  defaultTheme: string
}

export function WalletProvider(props: PropsWithChildren<Props>) {
  const { config, chains, defaultTheme } = props

  const theme = useTheme()

  const [rainbowKitTheme, setRainbowKitTheme] = useState<any>(null)

  useEffect(() => {
    const resultTheme = theme.theme ?? defaultTheme
    const themeCreator = resultTheme === 'dark' ? darkTheme : lightTheme
    setRainbowKitTheme(themeCreator({ borderRadius: 'small' }))
  }, [theme.theme])

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider
        chains={chains}
        theme={rainbowKitTheme}
        modalSize="compact"
      >
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
