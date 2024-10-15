import React, { useEffect, useState } from 'react'
import Hidden from './Hidden'
import { useHiddenContext } from '../hooks/useHiddenContext'


export default function SpanComponent({text, after}) {
    const [opacity, setOpacity] = useState(0)
    const [clicked, setClicked] = useState(false)
    const {dispatch} = useHiddenContext()

    const upperText = text.toUpperCase().replace(/\s+/g, '')
    // let clicked = false
    const handleClick = () => {
        if(clicked){
            // setOpacity(0)
            dispatch({type: `${upperText}`, payload: 0})
            setClicked(false)
        }
        else{
            // setOpacity(1)
            dispatch({type: `${upperText}`, payload: 1})
            setClicked(true)
        }
    }

    useEffect(() => {
        // handleClick()
    }, [])
  return (
    <>
        <button className='px-3 border rounded-2xl' onClick={handleClick}  >{text.toUpperCase()}</button>
        {/* {hidden && <Hidden />} */}
    </>
  )
}
