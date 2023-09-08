import { Box } from '@/primitives';
import { PropsWithChildren } from 'react';
import Navbar from './navbar';

export default function Layout(props: PropsWithChildren<unknown>) {
  return (
    <Box
      css={{
        background: '$neutralBg',
        height: '100%',
        minHeight: '100vh',
        pt: 80,
      }}
    >
      <Box css={{ maxWidth: 1920, mx: 'auto' }}>
        <Navbar />
        <main>{props.children}</main>
      </Box>
    </Box>
  );
}
