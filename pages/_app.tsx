import '@rainbow-me/rainbowkit/styles.css'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { configureChains, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'

import { publicProvider } from 'wagmi/providers/public'

import { getDefaultWallets } from '@rainbow-me/rainbowkit'

import { darkTheme, globalReset } from '@/styled'
import { GetStaticProps } from 'next'
import {
  WalletProvider,
  TooltipProvider,
  ToastProvider,
  CartProvider,
  ChainProvider,
} from '@/store'

import { HotkeysProvider } from 'react-hotkeys-hook'
import { Layout } from '@/components'

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

  // from ssr
  const defaultTheme = 'dark'

  // from ssr
  const defaultChain = 'ethereum'

  return (
    <HotkeysProvider>
      <ChainProvider chain={defaultChain}>
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
            <CartProvider>
              <TooltipProvider>
                <ToastProvider>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </ToastProvider>
              </TooltipProvider>
            </CartProvider>
          </WalletProvider>
        </ThemeProvider>
      </ChainProvider>
    </HotkeysProvider>
  )
}
export const getStaticProps: GetStaticProps<{}> = async () => {
  return { props: {} }
}
