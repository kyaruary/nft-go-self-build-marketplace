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

// TODO:remove reservoir things
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
