import { useFallbackState } from '@/hooks';
import { Box, Flex, Text, Button, FormatCryptoCurrency, FormatCurrency, Popover } from '@/primitives';

import React, { ComponentPropsWithRef, Dispatch, ReactNode, SetStateAction, useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import CartItem from './CartItem';
import { CheckoutStatus } from '@/types';
import { useAccount } from 'wagmi';
import { useCartPopper } from './use-cart-popper';
import { Content } from './content';
import { Loader } from './loader';
import { PoweredBy } from '../primitives/power-by';
import { Clear } from './clear';
import { CONTENT_OFFSET } from './constants';
import { Close } from './close';
import { ToastContainer } from './toast-container';

type Props = {
  trigger: ReactNode;
  side?: ComponentPropsWithRef<typeof Popover>['side'];
  openState?: [boolean, Dispatch<SetStateAction<boolean>>];
  tokenUrl?: string;
  onConnectWallet: () => void;
};

export function CartPopover({ trigger, side, openState, tokenUrl, onConnectWallet }: Props) {
  const [popoverTrigger, setPopoverTrigger] = useState<HTMLButtonElement | null>(null);

  const [open, setOpen] = useFallbackState(openState ? openState[0] : false, openState);
  const [displayPendingTransaction, setDisplayPendingTransaction] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const { isConnected } = useAccount();

  const close = () => setOpen(false);

  const intention2Buy = async () => {
    if (!isConnected) {
      onConnectWallet?.();
    } else {
      checkout()
        .then(() => {
          setDisplayPendingTransaction(true);
        })
        .catch((e) => {
          console.error(e);
          setDisplayPendingTransaction(false);
        });
    }
  };

  useEffect(() => {
    if (!open) {
      setDisplayPendingTransaction(false);
      setPurchaseComplete(false);
    }
  }, [open]);

  const triggerBottom = useMemo(() => (popoverTrigger?.offsetTop || 0) + (popoverTrigger?.offsetHeight || 0) + CONTENT_OFFSET, [trigger]);

  const {
    loading,
    items,
    unavailableItems,
    priceChangeItems,
    totalPrice,
    feeOnTop,
    usdPrice,
    hasEnoughCurrency,
    balance,
    currency,
    cartCurrencyConverted,
    transaction,
    blockExplorerBaseUrl,
    cartChain,
    remove,
    clear,
    checkout,
  } = useCartPopper(open);

  useEffect(() => {
    if (transaction?.status === CheckoutStatus.Complete) {
      setDisplayPendingTransaction(false);
      setPurchaseComplete(true);
    }
  }, [transaction?.status]);

  const unavailableItemsSubject = unavailableItems.length > 1 ? 'items' : 'item';
  const priceChangeItemsSubject = priceChangeItems.length > 1 ? 'items prices' : 'item price';
  const isCartEmpty = items.length === 0;
  const hasValidItems = items.length > unavailableItems.length;

  return (
    <Popover.Root modal={true} open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild ref={setPopoverTrigger}>
        {trigger}
      </Popover.Trigger>
      <Content side={side} triggerBottom={triggerBottom} open={open}>
        {loading ? <Loader /> : null}
        <Flex align="center" css={{ mb: '$4' }}>
          <Text style="h6">Cart</Text>
          {!isCartEmpty && (
            <Flex
              align="center"
              justify="center"
              css={{
                background: '$accentSolid',
                height: 20,
                width: 20,
                borderRadius: '99999px',
                ml: '$2',
              }}
            >
              <Text style="subtitle2" color="button">
                {items.length}
              </Text>
            </Flex>
          )}
          {!isCartEmpty ? <Clear onClear={clear} /> : null}
          <Close onClose={close} />
        </Flex>
        <ToastContainer
          cartCurrencyConverted={cartCurrencyConverted}
          currencySymbol={currency?.symbol}
          unavailableItemCount={unavailableItems.length}
          unavailableItemsSubject={unavailableItemsSubject}
          priceChangeItemCount={priceChangeItems.length}
          priceChangeItemsSubject={priceChangeItemsSubject}
          onRemove={() => remove(unavailableItems.map((item) => `${item.collection.id}:${item.token.id}`))}
          transactionErrorType={transaction?.errorType}
          transactionErrorMessage={transaction?.error?.message}
          purchaseComplete={purchaseComplete}
          completeHref={`${blockExplorerBaseUrl}/tx/${transaction?.txHash}`}
        />
        {!isCartEmpty && (
          <Flex direction="column" css={{ gap: '$4', mb: '$4', overflowY: 'auto', mx: -24 }}>
            {items.map((item) => (
              <CartItem key={`${item.collection.id}:${item.token.id}`} item={item} usdConversion={usdPrice} tokenUrl={tokenUrl} />
            ))}
          </Flex>
        )}
        {isCartEmpty && !(displayPendingTransaction && transaction?.status === CheckoutStatus.Finalizing) && (
          <Flex direction="column" align="center" justify="center" css={{ color: '$neutralBorderHover', flex: 1, gap: '$5' }}>
            <FontAwesomeIcon icon={faShoppingCart} width="30" height="30" style={{ height: 30 }} />
            <Text style="body2" color="subtle">
              No items in your cart
            </Text>
          </Flex>
        )}
        <Flex direction="column" css={{ mt: 'auto', pb: 10 }}>
          {!isCartEmpty && feeOnTop ? (
            <Flex css={{ mb: '$4' }}>
              <Text style="subtitle2">Referrer Fee</Text>
              <Flex direction="column" justify="center" css={{ ml: 'auto', gap: '$1', '> div': { ml: 'auto' } }}>
                <FormatCryptoCurrency
                  textStyle="subtitle2"
                  amount={feeOnTop}
                  address={currency?.contract}
                  decimals={currency?.decimals}
                  symbol={currency?.symbol}
                  logoWidth={12}
                  chainId={cartChain?.id}
                />
                {usdPrice && <FormatCurrency amount={usdPrice * feeOnTop} style="subtitle2" color="subtle" css={{ textAlign: 'end' }} />}
              </Flex>
            </Flex>
          ) : null}
          {!isCartEmpty && (
            <Flex css={{ mb: 28 }}>
              <Text style="h6">Total</Text>
              <Flex direction="column" justify="center" css={{ ml: 'auto', gap: '$1', '> div': { ml: 'auto' } }}>
                <FormatCryptoCurrency
                  textStyle="h6"
                  amount={totalPrice}
                  address={currency?.contract}
                  decimals={currency?.decimals}
                  symbol={currency?.symbol}
                  logoWidth={18}
                  chainId={cartChain?.id}
                />
                {usdPrice && <FormatCurrency amount={usdPrice * totalPrice} style="subtitle2" color="subtle" css={{ textAlign: 'end' }} />}
              </Flex>
            </Flex>
          )}

          {/*
          TODO: revert
           <CartCheckoutModal
            open={
              (transaction?.status == CheckoutStatus.Approving ||
                transaction?.status == CheckoutStatus.Finalizing ||
                transaction?.status == CheckoutStatus.Complete) &&
              !transaction?.error
            }
            items={items}
            currency={currency}
            totalPrice={totalPrice}
            usdPrice={usdPrice || 0}
            transaction={transaction}
            cartChain={cartChain}
            blockExplorerBaseUrl={blockExplorerBaseUrl}
            setCartPopoverOpen={setOpen}
          /> */}

          {!hasEnoughCurrency && isConnected && (
            <Flex align="center" justify="center" css={{ mb: '$2', gap: '$2' }}>
              <Text style="body3" color="error">
                Insufficient balance
              </Text>
              <FormatCryptoCurrency
                textStyle="body3"
                amount={balance}
                address={currency?.contract}
                decimals={currency?.decimals}
                symbol={currency?.symbol}
                logoWidth={10}
              />
            </Flex>
          )}
          {isCartEmpty && !displayPendingTransaction && <Button disabled={true}>Select Items to Buy</Button>}
          {!isCartEmpty && hasValidItems && (transaction?.status === CheckoutStatus.Idle || !displayPendingTransaction) && (
            <Button disabled={!hasEnoughCurrency && isConnected} onClick={intention2Buy}>
              {hasEnoughCurrency || !isConnected ? 'Purchase' : 'Add Funds to Purchase'}
            </Button>
          )}
          {!isCartEmpty && !hasValidItems && (
            <Button color="secondary" onClick={clear}>
              <FontAwesomeIcon icon={faRefresh} width="16" height="16" />
              Refresh Cart
            </Button>
          )}
          <PoweredBy />
        </Flex>
      </Content>
      {open && (
        <Box
          css={{
            backgroundColor: '$overlayBackground',
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
          }}
        ></Box>
      )}
    </Popover.Root>
  );
}
