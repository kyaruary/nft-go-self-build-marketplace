import { useChain, useMounted, useToastStore } from '@/hooks';
import { Anchor, Box, Button, Flex, Text, spin } from '@/primitives';
import { sleep } from '@/utils/sleep';
import { faArrowLeft, faRefresh } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import Jazzicon from 'react-jazzicon/dist/Jazzicon';
import { jsNumberForAddress } from 'react-jazzicon';
import { RarityRank, SourcePrice } from '@/components';
import { Actions } from './actions';

// TODO:  handle refresh metadata
// TODO: opensea verify
export function Introduction() {
  const { chain } = useChain();
  const contract = '0x60e4d786628fea6478f785a6d7e704777c86a7c6';
  const [isRefreshing, setIsRefreshing] = useState(false);
  const collectionName = 'Mutant Ape Yacht Club';
  const tokenName = '#12148 (M1)';
  const { addToast } = useToastStore();
  const is1155 = false;
  const owner = '0xAE70216e2E3D69A483E6DbD6eD797f6313B10dAd';
  const countOwned = 0;
  const ownerFormatted = '0xAE70216e2E3D69A483E6DbD6eD797f6313B10dAd'.slice(0, 5) + '...' + owner.slice(-3);
  const isMounted = useMounted();

  const handleRefreshMetadata = async () => {
    if (!isRefreshing) {
      setIsRefreshing(true);
      await sleep(2000);
      setIsRefreshing(false);
      addToast?.({
        title: 'Refresh Metadata Success',
      });
    }
  };
  return (
    <>
      <Flex justify="between" align="center" css={{ mb: 20 }}>
        <Flex align="center" css={{ mr: '$2', gap: '$2' }}>
          <Link href={`/${chain}/collection/${contract}`} legacyBehavior={true}>
            <Anchor
              color="primary"
              css={{
                display: 'flex',
                alignItems: 'center',
                gap: '$2',
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} height={16} />
              <Text css={{ color: 'inherit' }} style="subtitle1" ellipsify>
                {collectionName}
              </Text>
            </Anchor>
          </Link>
          {/* <OpenSeaVerified openseaVerificationStatus={collection?.openseaVerificationStatus} /> */}
        </Flex>
        <Button onClick={handleRefreshMetadata} disabled={isRefreshing} color="gray3" size="xs" css={{ cursor: isRefreshing ? 'not-allowed' : 'pointer' }}>
          <Box
            css={{
              animation: isRefreshing ? `${spin} 1s cubic-bezier(0.76, 0.35, 0.2, 0.7) infinite` : 'none',
            }}
          >
            <FontAwesomeIcon icon={faRefresh} width={16} height={16} />
          </Box>
        </Button>
      </Flex>
      <Flex align="center" css={{ gap: '$2' }}>
        <Text style="h4" css={{ wordBreak: 'break-all' }}>
          {tokenName}
        </Text>
      </Flex>
      {is1155 && countOwned > 0 && (
        <Flex align="center" css={{ mt: '$2' }}>
          <Text style="subtitle3" color="subtle" css={{ mr: '$2' }}>
            You own {countOwned}
          </Text>
          <Link href={`/portfolio`} legacyBehavior={true}>
            <Anchor color="primary" weight="normal" css={{ ml: '$1', fontSize: 12 }}>
              Sell
            </Anchor>
          </Link>
        </Flex>
      )}
      {!is1155 && (
        <Flex align="center" css={{ mt: '$2' }}>
          <Text style="subtitle3" color="subtle" css={{ mr: '$2' }}>
            Owner
          </Text>
          <Jazzicon diameter={16} seed={jsNumberForAddress(owner || '')} />
          <Link href={`/portfolio/${owner}`} legacyBehavior={true}>
            <Anchor color="primary" weight="normal" css={{ ml: '$1' }}>
              {isMounted ? ownerFormatted : ''}
            </Anchor>
          </Link>
        </Flex>
      )}
      <RarityRank rank={100} total={10000} />
      <Flex css={{ gap: '$6', pt: '$4', pb: '$5' }}>
        <SourcePrice title="Price" tokenAmount="4500000000000000000" tokenDecimals={18} />
        <SourcePrice
          title="Top Offer"
          tokenAmount="4123456000000000000"
          tokenDecimals={18}
          usdPrice={32731.48}
          sourceName="nftgo.io"
          sourceLogo="https://static.nftgo.io/rarity/NFTGo.svg"
        />
      </Flex>
      <Actions />
    </>
  );
}
