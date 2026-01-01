import React from 'react'
import { useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef = useRef()

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2
    }, [])

    return (
        <section id='hero'>
            <div>
                <h1>Macbook Pro</h1>

                <img src="/title.png" alt="title" />
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

            <button>Beli</button>

            <p>Model 14 inci. Kini bertenaga super berkat M4.</p>
        </section>
    )
}

export default Hero