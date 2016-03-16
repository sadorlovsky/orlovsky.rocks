import React from 'react'
import face from './Face.svg'

export default function Face (props) {
  return <img src={ face } className={ props.className } />
}
