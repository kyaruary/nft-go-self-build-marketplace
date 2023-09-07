import { useContext } from 'react'
import { ToastContext } from '../store/contexts/toast'

export function useToastStore() {
  return useContext(ToastContext)
}
