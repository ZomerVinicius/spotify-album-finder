import React from 'react'
import Input from '../Input'
import { HeaderWrapper, Title } from './styles'

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Spotify album finder</Title>
      <Input />
    </HeaderWrapper>
  )
}
