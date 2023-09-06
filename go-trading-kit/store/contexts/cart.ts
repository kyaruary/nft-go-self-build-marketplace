import { createContext } from 'react'

export const CartContext = createContext<ReturnType<typeof cartStore> | null>(
  null
)
