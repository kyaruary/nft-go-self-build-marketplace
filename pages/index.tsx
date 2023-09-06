import { GetServerSideProps } from 'next'

export default function Page() {
  return null
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // TODO: use context get chain from cookies
  return {
    redirect: {
      destination: '/ethereum',
      permanent: false,
    },
  }
}
