import React from 'react'
import '../Styling/Header.css'

function Header() {

  return (
    <div className='header'>
        <h1 className='notifications-text'>Notifications <b>3</b></h1>
        <a className='mark-all-as-read-text'>Mark all as read</a>
    </div>
  )
}

export default Header