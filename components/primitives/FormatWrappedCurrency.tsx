import React, { FC, ComponentProps } from 'react';

import { useNetwork } from 'wagmi';
import FormatCryptoCurrency from './FormatCryptoCurrency';
import wrappedContracts from '@/utils/wrappedContracts';

type Props = ComponentProps<typeof FormatCryptoCurrency> & {
  logoWidth?: number;
  address?: string;
};

export const FormatWrappedCurrency: FC<Props> = ({ logoWidth, address, ...props }) => {
  const { chain: activeChain, chains } = useNetwork();
  let chain = chains.find((chain) => activeChain?.id === chain.id);

  if (!chain && chains.length > 0) {
    chain = chains[0];
  } else {
    chain = activeChain;
  }

  const contractAddress = chain?.id !== undefined && chain.id in wrappedContracts ? wrappedContracts[chain.id] : wrappedContracts[1];

  return <FormatCryptoCurrency {...props} address={address || contractAddress} />;
};
