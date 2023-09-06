import { createContext } from 'react'
import { GoTradingClient } from '../services/client'

export const GoTradingSDKClientContext = createContext<GoTradingClient>(
  {} as GoTradingClient
)
