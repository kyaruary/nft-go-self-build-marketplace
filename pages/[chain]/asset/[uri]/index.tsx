import { AssetDetailPage } from '@/src/asset';
import { GetServerSideProps } from 'next';

type PageProps = {
  contract: string;
  tokenId: string;
};
export default function Page(props: PageProps) {
  const { contract, tokenId } = props;
  return (
    <>
      <AssetDetailPage />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.params);

  const uri = ctx.params?.uri as string;

  if (!uri) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const [contract, tokenId] = uri.split(':');

  const props: PageProps = {
    contract,
    tokenId,
  };

  return {
    props,
  };
};
