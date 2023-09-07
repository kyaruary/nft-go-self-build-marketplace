import { Text, Anchor } from '@/primitives';

import React from 'react';

import CartToast from './CartToast';
import { CheckoutTransactionError } from '@/types';

type Props = {
  cartCurrencyConverted?: boolean;
  unavailableItemCount?: number;
  unavailableItemsSubject?: string;
  priceChangeItemCount?: number;
  priceChangeItemsSubject?: string;
  transactionErrorType?: CheckoutTransactionError;
  transactionErrorMessage?: string;
  purchaseComplete?: boolean;
  completeHref?: string;
  currencySymbol?: string;
  onRemove?: () => void;
};

export function ToastContainer(props: Props) {
  const {
    cartCurrencyConverted,
    unavailableItemCount = 0,
    unavailableItemsSubject,
    priceChangeItemCount = 0,
    priceChangeItemsSubject,
    transactionErrorMessage,
    transactionErrorType,
    purchaseComplete,
    currencySymbol = '',
    completeHref,
    onRemove,
  } = props;

  return (
    <>
      {cartCurrencyConverted && <CartToast kind="warning" message={`Mixed currency items are only available to be checked out with ${currencySymbol}`} />}
      {unavailableItemCount > 0 && (
        <CartToast
          kind="error"
          message={`${unavailableItemCount} ${unavailableItemsSubject} no longer available`}
          link={
            <Text
              color="accent"
              style="subtitle2"
              css={{ ml: 'auto', mt: 3, cursor: 'pointer' }}
              onClick={(e) => {
                e.preventDefault();
                onRemove?.();
              }}
            >
              Remove {unavailableItemsSubject}
            </Text>
          }
        />
      )}
      {priceChangeItemCount > 0 && <CartToast kind="warning" message={`${priceChangeItemCount} ${priceChangeItemsSubject} updated`} />}
      {transactionErrorType && (
        <CartToast
          kind="error"
          message={transactionErrorType === CheckoutTransactionError.UserDenied ? 'User denied transaction signature.' : transactionErrorMessage ?? ''}
        />
      )}
      {purchaseComplete && (
        <CartToast
          message={`Transaction Complete`}
          link={
            <Anchor href={completeHref} target="_blank" css={{ ml: 'auto', fontSize: 12, mt: 2 }} weight="medium" color="primary">
              Etherscan
            </Anchor>
          }
        />
      )}
    </>
  );
}
