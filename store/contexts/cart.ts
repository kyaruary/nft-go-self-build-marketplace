import { createContext } from 'react'
import { CartStore } from '../services/cart'

export const CartContext = createContext<CartStore>({} as CartStore)
