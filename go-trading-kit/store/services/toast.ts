import { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export type ToastType = {
  id?: string
  title?: string
  description?: string
  action?: ReactNode
  status?: 'success' | 'error'
}

export type ToastStore = {
  toasts: Array<ToastType>
  setToasts: Dispatch<SetStateAction<Array<ToastType>>> | null
  addToast: ((toast: ToastType) => void) | null
}

export function useToastService(): ToastStore {
  const [toasts, setToasts] = useState<Array<ToastType>>([])

  const addToast = (toast: ToastType) => {
    toast.id = uuidv4()
    setToasts([...toasts, toast])
  }

  return {
    toasts,
    addToast,
    setToasts,
  }
}
