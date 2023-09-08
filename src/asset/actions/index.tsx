import { Flex } from '@/primitives';
import { Sell } from './sell';
import { Buy } from './buy';
import { Accept } from './accept';
import { Bid } from './bid';
import { CancelListing } from './cancel-listing';
import { CancelOffer } from './cancel-offer';

export function Actions() {
  return (
    <Flex css={{ gap: '$1', pt: '$2', flexWrap: 'wrap' }}>
      <Sell />
      <Bid />
      <Buy />
      <Accept />
      <CancelListing />
      <CancelOffer />
    </Flex>
  );
}
