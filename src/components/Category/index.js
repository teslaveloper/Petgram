import React from 'react'
import {
  Clink, Image
} from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({
  cover = DEFAULT_IMAGE,
  path,
  emoji = '?'
}) => (
  <Clink to={path}>
    <Image src={cover} />
    {emoji}
  </Clink>
)
