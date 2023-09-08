import { useMemo, useState } from 'react';
import { useEventCallback } from 'usehooks-ts';
import { GoTradingKitStore } from '../type';

export function useBid() {
  const [modalVisible, setModalVisible] = useState(false);

  const modal = useMemo(() => {
    return null;
  }, []);

  const open: GoTradingKitStore['bid'] = useEventCallback(async () => {});

  return {
    open,
    modal,
  };
}
