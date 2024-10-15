import React from 'react'
import SpanComponent from './SpanComponent'
import Hidden from './Hidden'
import { useHiddenContext } from '../hooks/useHiddenContext'

export default function AllText() {

    const { PEDRO, ANYMORE, PRODUCT, RAYCAST, NEEDED, HATS, PRODUC, RAINBOW, MODULZ, RADIX, STITCHES, BARCELONA, SAOPAULO, NORWICH, X } = useHiddenContext()

  return (
    <>
   
        <p>
            <span>Yo! I'm </span>
            <SpanComponent text="Pedro"/> <Hidden text="Duarte. I'm not sure how to intro myself " opacity={PEDRO} />
            <span style={{ opacity: `${PEDRO}`}}>
            <SpanComponent text="anymore"/> <Hidden text={". My background is in UI development, but I love everything related to "} opacity={ANYMORE} />
            <span style={{opacity: `${ANYMORE}`}}>
            <SpanComponent text={"product"} /> <Hidden text={". In the last five years I discovered my niche: helping early-stage tech startups flourish."} opacity={PRODUCT} />
            
         </span>
        </span>
            <span>I work at</span> <SpanComponent text="raycast" /> 
            <span style={{opacity: `${RAYCAST}`}}>
                It's an app that you didn't think you <SpanComponent text="needed" />
                <span style={{opacity: `${NEEDED}`}}>, but once you try it, you can't live without it.</span>
                
                <span>I wear many different</span> <SpanComponent text={"hats"} />
                <span style={{opacity: HATS}}>
                    <span>. But my main focus is hyping the</span> <SpanComponent text={"PRODUC"}/>
                    <span style={{ opacity: `${PRODUC}`}}>
                        through <a href="/"><i>content creation</i></a>, brand awareness, community building and partnerships.
                    </span>
                    <span>Before that, I did basically the same thing for </span>
                    <SpanComponent text={"RAINBOW"} />
                    <span style={{opacity: RAINBOW}} >
                        , specifically for RainbowKit, a fun way to connect a web3 wallet, and 
                    </span>
                    <span>and </span>
                    <SpanComponent text={"modulz"} />
                    <span style={{opacity: MODULZ}}>
                        . Modulz is where it all started. There I co-created <SpanComponent text={"radix"} />
                        <span style={{opacity: RADIX}}>
                            , a set of building blocks for your design system, with over 20M monthly downloads, and
                        </span> <SpanComponent text={"stitches"} />
                        <span style={{opacity: STITCHES}}>
                            , a CSS-in-JS library with an API that has inspired many others. 
                        </span>
                    </span>
                </span>
            </span>
            <span>I live in</span> <SpanComponent text={"Barcelona"} />
            <span style={{opacity: BARCELONA}}>
                <span>with my family, but I was born in </span> <SpanComponent text={"Sao Paulo"} />
                <span style={{opacity: SAOPAULO}}>
                     I moved to <SpanComponent text={"norwich"} /> <span style={{opacity: NORWICH}}> (a fine city)</span> 
                     <span>when I was thirteen and then spent most of my life in London. </span>
                </span>
            </span>
            <span>You can find me on </span> <SpanComponent text={"X"} />
            <span style={{opacity: X}}> my username is <a href="/">@peduarte</a>. I'm also on <a href="/">Instagram</a>, <a href="/">GitHub</a>, <a href="/">LinkedIn</a>, and <a href="/">Strava</a>.</span>
        </p>
    </>
  )
}
