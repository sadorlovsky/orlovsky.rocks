import React from 'react'
import { Link } from 'react-router'
import { css } from 'glamor'
import Face from './Face/Face'

const styles = css({
  height: '70px',
  position: 'absolute',
  width: '100%',
  // background: 'hsl(228, 7%, 12%)',
  background: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const Nav = () => {
  return (
    <div {...styles}>
      <Link to='/'>
        <Face className={`${css({ width: '70px' })}`} />
      </Link>
    </div>
  )
}

export default Nav
