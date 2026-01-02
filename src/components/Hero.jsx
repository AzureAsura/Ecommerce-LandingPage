import React from 'react'
import { useEffect, useRef } from 'react'

const Hero = () => {
    const videoRef = useRef()

    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2
    }, [])

    return (
        <section id='hero' className='h-fit lg:h-[80vh] col-center mt-40 lg:mt-20 2xl:mt-[7vh]'>
            <div className='relative z-10 col-center lg:translate-y-16'>
                <h1 className='font-semibold lg:text-3xl 2xl:text-5xl text-white'>Macbook Pro</h1>

                <img src="/title.png" alt="title" className='container mx-auto w-2/3'/>
            </div>

            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline className='mx-auto lg:translate-y-5 2xl:translate-y-0'></video>

            <button className='relative z-10 bg-primary text-white py-2 px-6 mt-10 lg:mt-0 mb-5 rounded-full font-semibold text-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>Beli</button>

            <p className='lg:h3-semibold base-semibold'>Model 14 inci. Kini bertenaga super berkat M4.</p>
        </section>
    )
}

export default Hero