import React from 'react'

export default function Hidden({opacity , text, type}) {
    
  return (
    <span style={{ opacity: `${opacity}` }}>
        <span>{text}</span>
    </span>
  )
}
