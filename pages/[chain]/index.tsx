import { Layout } from '@/components'
import { Text, Tooltip } from '@/primitives'
import { NextPage } from 'next'
import { useToastStore } from '@/go-trading-kit'

export default function IndexPage(props: NextPage<unknown>) {
  const { addToast } = useToastStore()

  const handleClick = () => {
    addToast?.({
      title: 'Could not accept offer',
      description: 'Offer was lower than expected.',
    })
  }

  return (
    <Layout>
      <Text>1234</Text>
      <Tooltip content="tooltip">
        <span>1234</span>
      </Tooltip>
      <button onClick={handleClick}>add Toast</button>
    </Layout>
  )
}
