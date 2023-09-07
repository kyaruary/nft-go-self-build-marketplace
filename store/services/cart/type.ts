export type CartStoreProps = {
  feesOnTopBps?: string[]
  feesOnTopUsd?: string[]
  persist?: boolean
}

// what should a cart store need to do
export type CartStore = {
  // for curd
  get: () => void
  set: (cartItem: Partial<Cart>) => void
  add: (items: any[], chainId: number) => void
  remove: (ids: string[]) => void
  clear: () => void
  setQuantity: (orderId: string, quantity: number) => void
  // for transaction
  subscribe: (callback: (...args: any[]) => any) => void
  clearTransaction: () => void
  validate: () => void
  checkout: () => void
}

export enum CheckoutStatus {
  Idle,
  Approving,
  Finalizing,
  Complete,
}

export enum CheckoutTransactionError {
  Unknown,
  PiceMismatch,
  InsufficientBalance,
  UserDenied,
}

// TODO:
// remove reservoir things
export type Currency = any
export type Execute = any
export type ReservoirChain = any
export type CartItemPrice = any

export type CartItem = {
  token: {
    id: string
    name: string
  }
  collection: {
    id: string
    name: string
  }
  order?: {
    id: string
    quantityRemaining: number
    quantity: number
    maker: string
  }
  price: CartItemPrice
  poolId?: string
  poolPrices?: CartItemPrice[]
  previousPrice?: CartItemPrice
}

export type Cart = {
  totalPrice: number
  currency?: NonNullable<CartItemPrice>['currency']
  feeOnTop?: number
  feesOnTopBps?: string[]
  feesOnTopUsd?: string[]
  items: CartItem[]
  pools: Record<string, { prices: CartItemPrice[]; itemCount: number }>
  isValidating: boolean
  chain?: ReservoirChain
  pendingTransactionId?: string
  transaction: {
    id?: string
    txHash?: string
    chain: ReservoirChain
    items: CartItem[]
    error?: Error
    errorType?: CheckoutTransactionError
    status: CheckoutStatus
    steps?: Execute['steps']
    path?: Execute['path']
    currentStep?: Execute['steps'][0]
  } | null
}
