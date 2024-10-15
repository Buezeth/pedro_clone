import React from 'react'

export default function NavBar() {
  return (
    <div className='fixed'>
        <ul className='flex flex-row gap-3'>
            <li>Home</li>
            <li>Writing</li>
            <li>Speaking</li>
            <li>Shooting</li>
        </ul>
    </div>
  )
}
