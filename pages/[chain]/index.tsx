import { useChain, useToastStore } from '@/hooks';
import { useCallback, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { ChainHomepage } from '@/src/homepage';
import { Box, Button } from '@/primitives';
import Link from 'next/link';

export default function IndexPage() {
  const { addToast } = useToastStore();

  const { chain } = useChain();

  const count = useRef(0);

  const handleClick = useCallback(() => {
    addToast?.({
      title: 'Could not accept offer' + count.current,
      description: 'Offer was lower than expected.' + count.current,
    });
    count.current += 1;
  }, []);

  useHotkeys('meta+k', handleClick);

  const contract = '0x60e4d786628fea6478f785a6d7e704777c86a7c6';
  const tokenId = '12148';

  return (
    <>
      <Box
        css={{
          p: 24,
          height: '100%',
          '@bp800': {
            p: '$6',
          },
        }}
      >
        <Link href={`/${chain}/asset/${contract}:${tokenId}`}>
          <Button>Test For Asset Detail Page</Button>
        </Link>

        <ChainHomepage />
      </Box>
    </>
  );
}
