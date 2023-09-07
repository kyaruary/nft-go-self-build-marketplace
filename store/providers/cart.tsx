import { PropsWithChildren } from 'react'
import { CartContext } from '../contexts/cart'
import { useCartService } from '../services/cart'

interface CartProviderProps {
  feesOnTopBps?: string[]
  feesOnTopUsd?: string[]
  persist?: boolean
}

export function CartProvider(props: PropsWithChildren<CartProviderProps>) {
  const { children, feesOnTopBps, feesOnTopUsd, persist } = props

  const value = useCartService({ feesOnTopBps, feesOnTopUsd, persist })

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
