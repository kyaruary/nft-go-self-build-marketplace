import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { Flex, Button, Text } from '@/primitives';
import { useState } from 'react';
import { useCart } from '@/hooks';
import { CartPopover } from '../cart';

export function CartButton() {
  const { openConnectModal } = useConnectModal();

  const { data } = useCart();

  const cartItems = data.items ?? [];

  const [disabled] = useState(false);

  const trigger = (
    <Button
      css={{
        justifyContent: 'center',
        width: '44px',
        height: '44px',
        position: 'relative',
      }}
      size="small"
      color="gray3"
    >
      <FontAwesomeIcon icon={faShoppingCart} width="16" height="16" />
      {cartItems.length > 0 && (
        <Flex
          align="center"
          justify="center"
          css={{
            borderRadius: '99999px',
            width: 20,
            height: 20,
            backgroundColor: '$primary9',
            position: 'absolute',
            top: -8,
            right: -6,
          }}
        >
          <Text style="subtitle3" css={{ color: 'white' }}>
            {cartItems.length}
          </Text>
        </Flex>
      )}
    </Button>
  );

  if (disabled) {
    return trigger;
  } else {
    return (
      <CartPopover
        onConnectWallet={() => {
          openConnectModal?.();
        }}
        trigger={trigger}
      />
    );
  }
}

export default CartButton;
