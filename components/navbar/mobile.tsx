import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { Box, Flex } from '@/primitives'

import HamburgerMenu from './HamburgerMenu'
import MobileSearch from './MobileSearch'
import CartButton from './CartButton'
import { NAVBAR_HEIGHT_MOBILE } from './constants'

interface Props {
  routePrefix: string
}

export function MobileContent(props: Props) {
  const { routePrefix } = props

  const router = useRouter()
  return (
    <Flex
      css={{
        height: NAVBAR_HEIGHT_MOBILE,
        px: '$4',
        width: '100%',
        borderBottom: '1px solid $gray4',
        zIndex: 999,
        background: '$slate1',
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
            <Box css={{ width: 34, cursor: 'pointer' }}>
              <Image
                src="/reservoirLogo.svg"
                width={34}
                height={39}
                alt="Reservoir"
              />
            </Box>
          </Link>
        </Flex>
      </Box>
      <Flex align="center" css={{ gap: '$3' }}>
        <MobileSearch key={`${router.asPath}-search`} />
        <CartButton />
        <HamburgerMenu key={`${router.asPath}-hamburger`} />
      </Flex>
    </Flex>
  )
}
