import { useRef } from 'react'
import { useRouter } from 'next/router'
import { useHotkeys } from 'react-hotkeys-hook'
import Link from 'next/link'

import { Box, Flex } from '@/primitives'

import GlobalSearch from './GlobalSearch'
import { ConnectWalletButton } from '../ConnectWalletButton'
import NavItem from './NavItem'
import ThemeSwitcher from './ThemeSwitcher'
import CartButton from './CartButton'
import { AccountSidebar } from './AccountSidebar'
import { Brand } from './Brand'
import { NAVBAR_HEIGHT } from './constants'

interface Props {
  isConnected?: boolean
  routePrefix: string
}

export function PCContent(props: Props) {
  const { isConnected, routePrefix } = props
  let searchRef = useRef<HTMLInputElement>(null)

  const router = useRouter()
  useHotkeys('meta+k', () => {
    if (searchRef?.current) {
      searchRef?.current?.focus()
    }
  })
  return (
    <Flex
      css={{
        height: NAVBAR_HEIGHT,
        px: '$5',
        width: '100%',
        maxWidth: 1920,
        mx: 'auto',
        borderBottom: '1px solid $gray4',
        zIndex: 999,
        background: '$neutralBg',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      }}
      align="center"
      justify="between"
    >
      <Box css={{ flex: 1 }}>
        <Flex align="center">
          <Link href={`/${routePrefix}`}>
            <Box css={{ width: 112, cursor: 'pointer' }}>
              <Brand />
            </Box>
          </Link>
          <Box css={{ flex: 1, px: '$5', maxWidth: 600 }}>
            <GlobalSearch
              ref={searchRef}
              placeholder="Search collections and addresses"
              containerCss={{ width: '100%' }}
              key={router.asPath}
            />
          </Box>
          <Flex align="center" css={{ gap: '$5', mr: '$5' }}>
            <Link href={`/${routePrefix}/collection-rankings`}>
              <NavItem active={router.pathname.includes('collection-rankings')}>
                Collections
              </NavItem>
            </Link>
            <Link href="/portfolio">
              <NavItem active={router.pathname == '/portfolio'}>Sell</NavItem>
            </Link>
            <Link href="https://nftgo.io/developers" target="_blank">
              <NavItem active={false}>Docs</NavItem>
            </Link>
          </Flex>
        </Flex>
      </Box>

      <Flex css={{ gap: '$3' }} justify="end" align="center">
        <ThemeSwitcher />
        <CartButton />
        {isConnected ? (
          <AccountSidebar />
        ) : (
          <Box css={{ maxWidth: '185px' }}>
            <ConnectWalletButton />
          </Box>
        )}
      </Flex>
    </Flex>
  )
}
