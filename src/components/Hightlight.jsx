import {useMediaQuery} from "react-responsive";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
    const isMobile = useMediaQuery({  query: '(max-width: 1024px)' });

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'], {
            scrollTrigger: {
                trigger: '#highlights',
                start: isMobile ? 'top bottom' : 'top center'
            },
            y: 0,
            opacity: 1,
            stagger: 0.5,
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <section id="highlights" className="container mx-auto lg:py-40 max-lg:px-5 pt-16">
            <h2 className="text-white font-semibold text-3xl lg:text-7xl text-center max-w-3xl mx-auto">Ini adalah waktu yang tepat untuk beralih.</h2>
            <h3 className=" font-semibold text-xl lg:text-3xl text-center mt-10">Inilah yang Anda dapatkan dengan <span className="text-[#F5F5F7]">
             Macbook Pro 14 inci baru dengan M4.</span></h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 text-[#F5F5F7]">
                <div className="left-column flex flex-col justify-between gap-5 opacity-0 -translate-y-5">
                    <div className="h-full bg-[url(/highlight-bg.png)] bg-no-repeat bg-cover p-10 2xl:pt-32 lg:pt-20 rounded-3xl">
                        <img src="/laptop.png" alt="Laptop" />
                        <p className="font-semibold text-4xl max-w-2xs">Selesaikan pekerjaan hingga 9x lebih cepat.</p>
                    </div>
                    <div className="bg-[#1D1D1F] p-10 rounded-3xl flex items-center gap-7">
                        <img src="/sun.png" alt="Sun" />
                        <p className="font-semibold lg:text-2xl 2xl:text-3xl">
                        Layar Liquid Retina XDR <br />
                        yang memukau.
                        </p>

                    </div>
                </div>


                <div className="right-column">
                    <div className="apple-gradient">
                        <img src="/ai.png" alt="AI" />
                        <p>Dibuat untuk<br />
                            <span>Apple Intelligence.</span></p>
                    </div>
                    <div>
                        <img src="/battery.png" alt="Battery" />
                        <p>
                            "Kekuatan baterai hingga <span className="green-gradient"> 14 jam lebih lama. </span> <span className="text-dark-100"> (Total hingga 24 jam.) </span>"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights