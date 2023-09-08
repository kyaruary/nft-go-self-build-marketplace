import { Flex, Text, Tooltip } from '@/primitives';

import { formatNumber } from '@/utils/numbers';

type Props = {
  rank: number;
  total: number;
};

export function RarityRank(props: Props) {
  const { rank, total } = props;

  const rankPercentile = Math.floor((rank / total) * 100);

  const topPercentile = (percentile: number) => {
    if (percentile <= 1) {
      return 1;
    } else if (percentile <= 5) {
      return 5;
    } else if (percentile <= 10) {
      return 10;
    } else if (percentile <= 15) {
      return 15;
    } else if (percentile <= 20) {
      return 20;
    } else if (percentile <= 25) {
      return 25;
    } else if (percentile <= 30) {
      return 30;
    } else if (percentile <= 40) {
      return 40;
    } else if (percentile <= 50) {
      return 50;
    } else return;
  };

  const topPercentileText = rankPercentile <= 50 && `Top ${topPercentile(rankPercentile)}%`;

  return (
    <Tooltip
      content={
        <Flex direction="column" align="start">
          <Text style="body3">{topPercentileText}</Text>
          <Text style="body3" ellipsify>
            Rarity rank:{' '}
            {`${formatNumber(rank)}/
            ${formatNumber(total)}`}
          </Text>
          <Text style="body3" color="subtle">
            By Poprank
          </Text>
        </Flex>
      }
    >
      <Flex
        align="center"
        css={{
          background: '$gray2',
          mt: 24,
          mr: 'auto',
          px: '$2',
          py: '$1',
          borderRadius: 4,
          gap: '$1',
          cursor: 'pointer',
        }}
      >
        <img style={{ width: 13, height: 13 }} src="/icons/rarity-icon.svg" />
        <Text style="subtitle2" css={{ color: '$gray11' }}>
          Rank
        </Text>
        <Text style="subtitle2">{formatNumber(rank)} </Text>
      </Flex>
    </Tooltip>
  );
}
