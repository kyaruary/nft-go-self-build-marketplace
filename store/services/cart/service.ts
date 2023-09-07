import { useState } from 'react';
import { CartStore, CartStoreProps } from './type';
import { useEventCallback } from 'usehooks-ts';
import { Cart } from '@/types';

// TODO: implement cart service
export function useCartService(option: CartStoreProps): CartStore {
  const [data, setData] = useState<Cart>({
    totalPrice: 0,
    feesOnTopBps: undefined,
    feesOnTopUsd: undefined,
    items: [],
    pools: {},
    isValidating: false,
    transaction: null,
  });
  const get = useEventCallback(() => {});
  const set = useEventCallback(() => {});
  const subscribe = useEventCallback(() => {});
  const setQuantity = useEventCallback(() => {});
  const add = useEventCallback(() => {});
  const remove = useEventCallback(() => {});
  const clear = useEventCallback(() => {});
  const clearTransaction = useEventCallback(async () => {});
  const validate = useEventCallback(async () => {});
  const checkout = useEventCallback(async () => {
    console.log(option);
  });

  return {
    data,
    get,
    set,
    subscribe,
    setQuantity,
    add,
    remove,
    clear,
    clearTransaction,
    validate,
    checkout,
  };
}
