import { NextPage } from 'next'
import { useToastStore } from '@/hooks'
import { useCallback, useRef } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { ChainHomepage } from '@/src/homepage'

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

  return <ChainHomepage />
}
