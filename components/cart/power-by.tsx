import { Box, Flex, Text, Anchor } from '@/primitives';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export function PoweredBy() {
  return (
    <Flex
      align="center"
      css={{
        mx: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 26,
        gap: '$1',
        visibility: '$poweredByReservoirVisibility',
      }}
    >
      <Box css={{ color: '$neutralBorderHover' }}>
        <FontAwesomeIcon icon={faLock} width={9} height={10} />
      </Box>
      <Text
        style="tiny"
        color="subtle"
        css={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 4,
          lineHeight: '14px',
          fontWeight: 400,
          color: '$neutralText',
        }}
      >
        Powered by{' '}
        <Anchor
          href="https://reservoir.tools/"
          target="_blank"
          weight="heavy"
          color="gray"
          css={{
            height: 12,
            fontSize: 12,
            '&:hover': {
              color: '$neutralSolid',
              fill: '$neutralSolid',
            },
          }}
        >
          Go Trading
        </Anchor>
      </Text>
    </Flex>
  );
}
