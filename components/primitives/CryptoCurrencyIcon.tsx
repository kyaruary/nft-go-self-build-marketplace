// TODO: this file need to refactor
import React, { FC } from 'react'
import { styled } from '@/styled'
import { StyledComponent } from '@stitches/react/types/styled-component'

type Props = {
  address?: string
  chainId?: number
  url?: string
} & Parameters<StyledComponent>['0']

const StyledImg = styled('img', {})

const CryptoCurrencyIcon: FC<Props> = ({ css, url }) => {
  return <StyledImg src={url} css={css} />
}

export default CryptoCurrencyIcon
