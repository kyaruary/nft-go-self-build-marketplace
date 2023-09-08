import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastType } from '../providers/toast/primitives';

export type ToastStore = {
  toasts: Array<ToastType>;
  setToasts: Dispatch<SetStateAction<Array<ToastType>>> | null;
  addToast: ((toast: Partial<ToastType>) => void) | null;
};

export function useToastService(): ToastStore {
  const [toasts, setToasts] = useState<Array<ToastType>>([]);

  const addToast = useCallback((toast: Partial<ToastType>) => {
    toast.id = uuidv4();
    setToasts((toasts) => [...toasts, toast as ToastType]);
  }, []);

  return {
    toasts,
    addToast,
    setToasts,
  };
}
