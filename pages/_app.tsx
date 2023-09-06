import '@rainbow-me/rainbowkit/styles.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { configureChains, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'

import { publicProvider } from 'wagmi/providers/public'

import { getDefaultWallets } from '@rainbow-me/rainbowkit'

import { darkTheme, globalReset } from '@/styled'
import { GetStaticProps } from 'next'
import { WalletProvider, TooltipProvider } from '@/providers'
import { ToastProvider } from '@/go-trading-kit'
import { HotkeysProvider } from 'react-hotkeys-hook'

const { chains, publicClient } = configureChains([mainnet], [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: 'nftgo-marketplace',
  projectId: 'id-for-nftgo-marketplace',
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient,
})

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  globalReset()

  const defaultTheme = 'dark'

  return (
    <HotkeysProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme={defaultTheme}
        value={{
          dark: darkTheme.className,
          light: 'light',
        }}
      >
        <WalletProvider
          config={wagmiConfig}
          chains={chains}
          defaultTheme={defaultTheme}
        >
          <TooltipProvider>
            <ToastProvider>
              <Component {...pageProps} />
            </ToastProvider>
          </TooltipProvider>
        </WalletProvider>
      </ThemeProvider>
    </HotkeysProvider>
  )
}
export const getStaticProps: GetStaticProps<{}> = async () => {
  return { props: {} }
}
