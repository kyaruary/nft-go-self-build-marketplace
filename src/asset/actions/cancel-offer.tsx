import { Button } from '@/primitives';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CancelOffer() {
  return (
    <Button
      css={{
        color: '$red11',
        width: '100%',
        height: 52,
        justifyContent: 'center',
        minWidth: 'max-content',
        '@sm': {
          maxWidth: 250,
        },
      }}
      color="gray3"
    >
      Cancel Offer
    </Button>
  );
}
