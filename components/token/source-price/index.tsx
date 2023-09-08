import { Flex, FormatCryptoCurrency, Text, Tooltip } from '@/primitives';
import { formatDollar } from '@/utils/numbers';

type Props = {
  tokenId?: string;
  sourceName?: string;
  sourceLogo?: string;
  sourceUrl?: string;
  sourceDomain?: string;
  usdPrice?: number;
  tokenAmount?: string;
  tokenDecimals?: number;
  tokenContract?: string;
  title: string;
};

export function SourcePrice(props: Props) {
  const { sourceLogo, sourceName, sourceUrl, tokenAmount, usdPrice, tokenDecimals, tokenContract, title } = props;

  return (
    <Flex direction="column" align="start" css={{ gap: '$1' }}>
      <Text style="subtitle2">{title}</Text>
      <Flex
        align="center"
        css={{
          flexDirection: 'column',
          '@bp400': { flexDirection: 'row', gap: '$2' },
        }}
      >
        <Tooltip
          side="top"
          open={tokenAmount ? undefined : false}
          content={
            <Flex justify="between" css={{ gap: '$2' }}>
              <Text style="body3">Net Amount</Text>
              <FormatCryptoCurrency amount={tokenAmount} address={tokenContract} decimals={tokenDecimals} textStyle="subtitle3" logoHeight={14} />
            </Flex>
          }
        >
          <Flex>
            <FormatCryptoCurrency amount={tokenAmount} address={tokenContract} decimals={tokenDecimals} textStyle="h4" logoHeight={20} />
          </Flex>
        </Tooltip>

        {usdPrice ? (
          <Text style="body3" css={{ color: '$gray11' }} ellipsify>
            {formatDollar(usdPrice)}
          </Text>
        ) : null}
      </Flex>
      {sourceName && (
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          <Flex
            align="center"
            css={{
              borderRadius: 4,
              gap: '$1',
              width: 'max-content',
            }}
          >
            <img width="20px" height="20px" src={sourceLogo} />
            <Text style="body3" css={{ color: '$gray11' }}>
              {sourceName}
            </Text>
          </Flex>
        </a>
      )}
    </Flex>
  );
}
