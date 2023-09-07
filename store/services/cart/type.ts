import { Cart } from '@/types';

export type CartStoreProps = {
  feesOnTopBps?: string[];
  feesOnTopUsd?: string[];
  persist?: boolean;
};

// what should a cart store need to do
export type CartStore = {
  // for curd
  data: Cart;
  get: () => void;
  set: (cartItem: Partial<Cart>) => void;
  add: (items: any[], chainId: number) => void;
  remove: (ids: string[]) => void;
  clear: () => void;
  setQuantity: (orderId: string, quantity: number) => void;
  // for transaction
  subscribe: (callback: (...args: any[]) => any) => void;
  clearTransaction: () => Promise<any>;
  validate: () => Promise<any>;
  checkout: () => Promise<any>;
};
