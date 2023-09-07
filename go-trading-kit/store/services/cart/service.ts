import { CartStore, CartStoreProps } from './type'
import { useEventCallback } from 'usehooks-ts'

// TODO: implement cart service
export function useCartService(option: CartStoreProps): CartStore {
  const get = useEventCallback(() => {})
  const set = useEventCallback(() => {})
  const subscribe = useEventCallback(() => {})
  const setQuantity = useEventCallback(() => {})
  const add = useEventCallback(() => {})
  const remove = useEventCallback(() => {})
  const clear = useEventCallback(() => {})
  const clearTransaction = useEventCallback(() => {})
  const validate = useEventCallback(() => {})
  const checkout = useEventCallback(() => {
    console.log(option)
  })

  return {
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
  }
}
