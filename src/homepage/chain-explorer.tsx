import { Box, Dropdown, DropdownMenuItem, Flex, Text } from '@/primitives'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export function ChainExplorer() {
  const logo = '/logos/ethereum-logo.png'
  const marketplaceName = 'NFTGo'
  const chain = 'Ethereum'
  const handleChainChange = () => {}

  return (
    <Flex
      direction="column"
      css={{
        mx: 'auto',
        maxWidth: 728,
        pt: '$5',
        textAlign: 'center',
        alignItems: 'flex-start',
        '@bp600': { alignItems: 'center' },
      }}
    >
      <Flex
        css={{
          mb: '$4',
          gap: '$3',
          flexDirection: 'column',
          alignItems: 'flex-start',
          maxWidth: '100%',
          '@bp600': {
            flexDirection: 'row',
            alignItems: 'center',
          },
        }}
      >
        <Text style="h3" css={{ flexShrink: 0 }}>
          Explore NFTs
        </Text>{' '}
        <Flex css={{ gap: '$3', maxWidth: '100%' }}>
          <Text style="h3" color="subtle">
            on
          </Text>
          <Dropdown
            contentProps={{
              sideOffset: 8,
              asChild: true,
              style: {
                margin: 0,
              },
            }}
            trigger={
              <Flex
                css={{
                  gap: '$3',
                  alignItems: 'center',
                  cursor: 'pointer',
                  minWidth: 0,
                }}
              >
                <img
                  src={logo}
                  alt={`${marketplaceName} Logo`}
                  style={{ width: 40, height: 40 }}
                />
                <Text style="h3" ellipsify>
                  {' ' + chain}
                </Text>
                <Box
                  css={{
                    color: '$gray10',
                    transition: 'transform',
                    '[data-state=open] &': { transform: 'rotate(180deg)' },
                  }}
                >
                  <FontAwesomeIcon icon={faChevronDown} width={16} />
                </Box>
              </Flex>
            }
          >
            <Flex direction="column" css={{ minWidth: 150 }}>
              <DropdownMenuItem
                css={{
                  textAlign: 'left',
                  py: '$2',
                }}
                onClick={handleChainChange}
              >
                <Text style="h6" color={'subtle'} css={{ cursor: 'pointer' }}>
                  Ethereum
                </Text>
              </DropdownMenuItem>
            </Flex>
          </Dropdown>
        </Flex>
      </Flex>
      <Text style="body1" color="subtle" css={{ mb: 48, textAlign: 'left' }}>
        Multi-Chain Explorer, powered by NFTGo
      </Text>
    </Flex>
  )
}
