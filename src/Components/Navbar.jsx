import React from 'react'

const Navbar = (props) => {
  return (
    <div className='navbar--container'>
      <div className='middle--container'>
        <img src={props.img} className='nav--image' />
        <span className='nav--p'>my travel journal.</span>
      </div>
    </div>
  )
}

export default Navbar
