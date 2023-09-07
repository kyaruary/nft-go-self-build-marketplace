import { useCart } from "@/hooks";
import { useEffect, useMemo, useState } from "react";
import { useAccount, useBalance, useNetwork } from "wagmi";
import { zeroAddress, parseUnits } from "viem";
import { UseBalanceToken } from "@/types";
import { toFixed } from "@/utils/numbers";
import { CheckoutStatus, CheckoutTransactionError } from "@/types";

export function useCartPopper(open: boolean) {
  const [hasEnoughCurrency, setHasEnoughCurrency] = useState(true);
  const { data, clear, clearTransaction, validate, remove, add, checkout } = useCart();
  const { isValidating, totalPrice, items, currency, transaction, feeOnTop, chain: cartChain } = data;
  const usdConversion: any[] = [];
  // const usdConversion = useCoinConversion(
  //   open ? 'USD' : undefined,
  //   currency?.symbol || currency?.name
  // )
  const usdPrice = usdConversion.length > 0 ? usdConversion[0].price : null;

  const { chains } = useNetwork();
  const chain = chains.find((chain) => chain.id === transaction?.chain.id);
  const blockExplorerBaseUrl = chain?.blockExplorers?.default?.url || "https://etherscan.io";
  const cartCurrencyConverted = items.some((item) => item.price && item.price?.currency?.contract !== currency?.contract);

  useEffect(() => {
    if (open) {
      validate();
    } else if (transaction?.status === CheckoutStatus.Complete || transaction?.error) {
      clearTransaction();
    }
  }, [open]);

  const unavailableItems = useMemo(() => items.filter((item) => !item.price), [items]);
  const priceChangeItems = useMemo(() => items.filter(({ previousPrice, price }) => previousPrice && price?.amount?.decimal !== undefined && previousPrice.amount?.decimal !== price?.amount?.decimal), [items]);
  const { address } = useAccount();
  const { data: balance } = useBalance({
    chainId: cartChain?.id,
    address: address,
    token: currency?.contract !== zeroAddress ? (currency?.contract as UseBalanceToken) : undefined,
    watch: open,
    formatUnits: currency?.decimals,
  });

  useEffect(() => {
    if (balance) {
      const totalPriceTruncated = toFixed(totalPrice, currency?.decimals || 18);
      if (!balance.value) {
        setHasEnoughCurrency(false);
      } else if (balance.value < parseUnits(`${totalPriceTruncated as number}`, currency?.decimals || 18)) {
        setHasEnoughCurrency(false);
      } else {
        setHasEnoughCurrency(true);
      }
    }
  }, [totalPrice, balance, currency]);

  useEffect(() => {
    if (hasEnoughCurrency && transaction?.errorType === CheckoutTransactionError.InsufficientBalance) {
      setHasEnoughCurrency(false);
    }
  }, [transaction]);

  return {
    loading: isValidating,
    items,
    unavailableItems,
    priceChangeItems,
    currency,
    cartCurrencyConverted,
    totalPrice,
    feeOnTop,
    usdPrice,
    hasEnoughCurrency,
    balance: balance?.value,
    transaction,
    blockExplorerBaseUrl,
    cartChain,
    checkout,
    clear,
    remove,
    add,
    validate,
  };
}
