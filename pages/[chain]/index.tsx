import { Layout } from '@/components'
import { Text, Tooltip } from '@/primitives'
import { NextPage } from 'next'
import { useToastStore } from '@/go-trading-kit'
import { useCallback, useRef } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

export default function IndexPage(props: NextPage<unknown>) {
  const { addToast } = useToastStore()

  const count = useRef(0)
  const handleClick = useCallback(() => {
    addToast?.({
      title: 'Could not accept offer' + count.current,
      description: 'Offer was lower than expected.' + count.current,
    })
    count.current += 1
  }, [])

  useHotkeys('meta+k', handleClick)

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
