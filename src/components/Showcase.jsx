import { useGSAP } from '@gsap/react'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'})

    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true
                }
            })

            timeline.to('.mask img', {
                transform: 'scale(1.1)'
            }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' })
        }
    }, [isTablet])

  return (
    <section id='showcase' className='relative'>
        <div className='media relative lg:overflow-hidden '>
            <video src="/videos/tes.mp4" autoPlay muted loop playsInline className='w-full object-cover object-center'/>
            <div className='mask absolute h-full top-0 lg:-top-20 xl:top-0'>
                <img src="/mask-logo.svg" alt="" />
            </div>
        </div>

        <div className='content relative z-10 my-5 lg:-mt-40 bg-black font-semibold text-xl text-dark-100 lg:opacity-0'>
            <div className='wrapper container mx-auto px-5 pb-20 2xl:px-0 flex flex-col lg:flex-row justify-center gap-20' >
                <div className='lg:max-w-md'>
                    <h2 className='font-semibold text-3xl lg:text-7xl text-white'>Rocket Chip</h2>

                    <div className='space-y-5 mt-7 pe-10'>
                        <p>
                            Memperkenalkan {" "}
                            <span className='text-white'>
                                M4, generasi berikutnya dari Apple silicon
                            </span>
                            . M4 menghadirkan performa.
                        </p>
                        <p> 
                            M4 menggerakkan Apple Intelligence di iPad Pro, sehingga kamu dapat menulis, berkreasi, dan menyelesaikan lebih banyak hal dengan mudah. Semua dalam desain yang luar biasa tipis, ringan, dan bertenaga.
                        </p>
                        <p>
                            Mesin tampilan terbaru menghadirkan presisi, akurasi warna, dan kecerahan yang menakjubkan. Sementara GPU generasi berikutnya dengan ray tracing yang dipercepat secara hardware menghadirkan grafis setara konsol di ujung jari kamu.
                        </p>
                        <a href="https://www.apple.com/id/apple-intelligence/" target='_blank'>
                            <p className='text-primary'>Ketahui lebih lanjut tentang Apple Intelligence</p>
                        </a>
                    </div>
                </div>

                <div className='max-w-3xs space-y-14'>
                    <div className='space-y-2'>
                        <p>Hingga</p>
                        <h3>4x Lebih Cepat</h3>
                        <p>untuk performa rendering profesional</p>
                    </div>
                    <div className='space-y-2'>
                        <p>Hingga</p>
                        <h3>1,5x Lebih Cepat</h3>
                        <p>performa CPU generasi sebelumnya</p>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Showcase