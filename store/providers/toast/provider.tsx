import { PropsWithChildren, useCallback, useRef } from 'react'
import { useToastService } from '../../services/toast'
import { ToastContext } from '../../contexts/toast'
import { Provider as PrimitivesToastProvider } from '@radix-ui/react-toast'
import Toast, { ToastViewport } from './primitives'

export function ToastProvider(props: PropsWithChildren<unknown>) {
  const service = useToastService()
  const { toasts, setToasts } = service

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleEnd = useCallback((id: string) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(
      () => setToasts?.(toasts.filter((toast) => toast.id !== id)),
      6000
    )
  }, [])

  return (
    <ToastContext.Provider value={service}>
      <PrimitivesToastProvider duration={5000} swipeDirection="up">
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
              onEnd={handleEnd}
            />
          )
        })}
        <ToastViewport />
      </PrimitivesToastProvider>
    </ToastContext.Provider>
  )
}
