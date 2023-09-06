import { PropsWithChildren } from 'react'
import { GoTradingKitContext } from '../contexts/kit'

export function GoTradingKitProvider(props: PropsWithChildren<unknown>) {
  return (
    <GoTradingKitContext.Provider value={null}>
      {props.children}
    </GoTradingKitContext.Provider>
  )
}
