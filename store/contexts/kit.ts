import { createContext } from 'react';
import { GoTradingKitStore } from '../services/kit/type';

export const GoTradingKitContext = createContext<GoTradingKitStore>({
  // buy: function (): Promise<void> {
  //   throw new Error('Function not implemented.');
  // },
  bid: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },
  // createListing: function (): Promise<void> {
  //   throw new Error('Function not implemented.');
  // },
  // cancelListing: function (): Promise<void> {
  //   throw new Error('Function not implemented.');
  // },
  // acceptOffer: function (): Promise<void> {
  //   throw new Error('Function not implemented.');
  // },
  // cancelOffer: function (): Promise<void> {
  //   throw new Error('Function not implemented.');
  // },
});
