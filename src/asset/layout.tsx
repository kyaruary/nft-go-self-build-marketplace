import * as Tabs from '@radix-ui/react-tabs';
import { useMounted } from '@/hooks';
import { Flex } from '@/primitives';
import { ReactNode, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { TabsContent, TabsList, TabsTrigger } from '@/primitives';

type Props = {
  attributes?: ReactNode;
  information?: ReactNode;
  activity?: ReactNode;
  listings?: ReactNode;
  offers?: ReactNode;
  view?: ReactNode;
  introduction?: ReactNode;

  hasAttributes?: boolean;
};

export function AssetPageLayout(props: Props) {
  const { information, activity, offers, listings, view, introduction, attributes, hasAttributes } = props;
  const isMounted = useMounted();
  const isSmallDevice = useMediaQuery({ maxWidth: 900 }) && isMounted;
  const [tabValue, setTabValue] = useState('info');
  return (
    <Flex
      justify="center"
      css={{
        maxWidth: 1175,
        mt: 10,
        pb: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        px: '$1',
        gap: 20,
        flexDirection: 'column',
        alignItems: 'center',
        '@md': {
          mt: 48,
          px: '$3',
          flexDirection: 'row',
          gap: 40,
          alignItems: 'flex-start',
        },
        '@lg': {
          gap: 80,
        },
      }}
    >
      <Flex
        direction="column"
        css={{
          maxWidth: '100%',
          flex: 1,
          width: '100%',
          '@md': { maxWidth: 445 },
          position: 'relative',
          '@sm': {
            '>button': {
              height: 0,
              opacity: 0,
              transition: 'opacity .3s',
            },
          },
          ':hover >button': {
            opacity: 1,
            transition: 'opacity .3s',
          },
        }}
      >
        {view}
        {!isSmallDevice && attributes}
      </Flex>
      <Flex
        direction="column"
        css={{
          flex: 1,
          px: '$3',
          width: '100%',
          '@md': {
            px: 0,
            maxWidth: '60%',
            overflow: 'hidden',
          },
        }}
      >
        {introduction}
        <Tabs.Root
          value={tabValue}
          onValueChange={(value) => setTabValue(value)}
          style={{
            paddingRight: isSmallDevice ? 0 : 15,
          }}
        >
          <TabsList
            css={{
              overflowX: isSmallDevice ? 'scroll' : 'unset',
            }}
          >
            {isMounted && isSmallDevice && hasAttributes && <TabsTrigger value="attributes">Attributes</TabsTrigger>}
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="listings">Listings</TabsTrigger>
            <TabsTrigger value="offers">Offers</TabsTrigger>
          </TabsList>
          <TabsContent value="attributes">{attributes}</TabsContent>
          <TabsContent value="info">{information}</TabsContent>
          <TabsContent value="activity" css={{ mr: -15 }}>
            {activity}
          </TabsContent>
          <TabsContent value="listings">{listings}</TabsContent>
          <TabsContent value="offers" css={{ mr: -15, width: '100%' }}>
            {offers}
          </TabsContent>
        </Tabs.Root>
      </Flex>
    </Flex>
  );
}
