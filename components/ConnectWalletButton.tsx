import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Box, Button } from '@/primitives'

export function ConnectWalletButton() {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        return (
          <Box
            style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'flex',
            }}
          >
            {(() => {
              if (!mounted || !account || !chain) {
                return (
                  <Button
                    css={{
                      flex: 1,
                      justifyContent: 'center',
                      backgroundColor: '$primary',
                    }}
                    corners="rounded"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </Button>
                )
              }
            })()}
          </Box>
        )
      }}
    </ConnectButton.Custom>
  )
}
