import { PropsWithChildren } from 'react'
import { useToastService } from '../services/toast'
import { ToastContext } from '../contexts/toast'
import { Provider as PrimitivesToastProvider } from '@radix-ui/react-toast'
import Toast, { ToastViewport } from '../../components/Toast'

export function ToastProvider(props: PropsWithChildren<unknown>) {
  const service = useToastService()
  const { toasts } = service

  return (
    <ToastContext.Provider value={service}>
      <PrimitivesToastProvider duration={5000}>
        {props.children}
        {toasts.map((toast, idx) => {
          return (
            <Toast
              key={idx}
              id={toast.id}
              title={toast.title}
              description={toast.description}
              action={toast.action}
              status={toast.status}
            />
          )
        })}
        <ToastViewport />
      </PrimitivesToastProvider>
    </ToastContext.Provider>
  )
}
