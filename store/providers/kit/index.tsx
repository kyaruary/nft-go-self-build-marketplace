import { PropsWithChildren, useMemo } from 'react';
import { GoTradingKitContext } from '../../contexts/kit';
import { useBid } from '../../services/kit/bid/use-bid';

export function GoTradingKitProvider(props: PropsWithChildren<unknown>) {
  const { open: bid, modal: bidModal } = useBid();

  return (
    <GoTradingKitContext.Provider value={{ bid }}>
      {props.children}
      {bidModal}
    </GoTradingKitContext.Provider>
  );
}
