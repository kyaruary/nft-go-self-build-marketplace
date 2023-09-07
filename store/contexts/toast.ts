import { createContext } from 'react'

import { ToastStore } from '../services/toast'

export const ToastContext = createContext<ToastStore>({
  toasts: [],
  setToasts: null,
  addToast: null,
})
