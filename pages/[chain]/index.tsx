import { Layout } from '@/components'
import { Text, Tooltip } from '@/primitives'
import { NextPage } from 'next'

export default function IndexPage(props: NextPage<unknown>) {
  return (
    <Layout>
      <Text>1234</Text>
      <Tooltip content="tooltip">
        <span>1234</span>
      </Tooltip>
    </Layout>
  )
}
