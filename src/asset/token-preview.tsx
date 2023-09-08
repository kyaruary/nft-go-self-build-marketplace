import { TokenMedia } from '@/components';
import { Box } from '@/primitives';

type Props = {
  onRefreshToken?: () => void;
};

export function TokenPreview(props: Props) {
  const { onRefreshToken } = props;

  return (
    <Box
      css={{
        backgroundColor: '$gray3',
        borderRadius: 8,
        '@sm': {
          button: {
            height: 0,
            opacity: 0,
            transition: 'opacity .3s',
          },
        },
        ':hover button': {
          opacity: 1,
          transition: 'opacity .3s',
        },
      }}
    >
      <img src="https://static.nftgo.io/asset/metadata/image/a7af55c6208725aaf89700c2ab6bf98b24f32f4b79bf1dd95568e6c0c5bf6bcb" alt="" />
      {/* <TokenMedia
        token={token?.token}
        videoOptions={{ autoPlay: true, muted: true }}
        style={{
          width: '100%',
          height: 'auto',
          minHeight: isMounted && isSmallDevice ? 300 : 445,
          borderRadius: 8,
          overflow: 'hidden',
        }}
        onRefreshToken={onRefreshToken}
      />
      <FullscreenMedia token={token} /> */}
    </Box>
  );
}
