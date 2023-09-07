import { useContext } from 'react'
import { CartContext } from '@/store'

export function useCart() {
  return useContext(CartContext)
}
