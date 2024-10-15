import React from 'react'
import SpanComponent from './SpanComponent'
import AllText from './AllText'

export default function VideoBg() {
  return (
    <div className='relativeflex flex-row justify-center items-center' >
        <video autoPlay loop muted playsInline className='z-[-1] fixed'>
            <source src="/Pedro Duarte's Personal Website.mp4" />
        </video>
        <div className='flex flex-row justify-center items-center  h-[100vh] text-center px-60 text-3xl text-white'>
            <AllText />
        </div>
    </div>
  )
}
