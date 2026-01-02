import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { performanceImages, performanceImgPositions } from "../constants/index.js";
import {useMediaQuery} from "react-responsive";

const Performance = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const sectionEl = sectionRef.current;
            if (!sectionEl) return;

            gsap.fromTo(
                ".content p",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".content p",
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            if (isMobile) return;

            const tl = gsap.timeline({
                defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            performanceImgPositions.forEach((item) => {
                if (item.id === "p5") return;

                const selector = `.${item.id}`;
                const vars = {};

                if (typeof item.left === "number") vars.left = `${item.left}%`;
                if (typeof item.right === "number") vars.right = `${item.right}%`;
                if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

                if (item.transform) vars.transform = item.transform;

                tl.to(selector, vars, 0);
            });
        },
        { scope: sectionRef, dependencies: [isMobile] }
    );

    return (
        <section id="performance" ref={sectionRef} className="w-dvw h-full overflow-hidden pt-20 lg:pt-20 flex flex-col items-center relative">
            <h2 className="font-semibold text-3xl lg:text-6xl text-white max-w-2xl text-center">Performa grafis level berikutnya.</h2>

             <div className="w-7xl 2xl:w-[100rem] h-[50vh] lg:h-screen relative wrapper">
                {performanceImages.map((item, index) => (
                    <img
                        key={index}
                        src={item.src}
                        className={item.id}
                        alt={item.alt || `Performance Image #${index + 1}`}
                    />
                ))}
             </div>

            <div className="content mx-auto max-w-xl mt-24">
                <p className="lg:h3-semibold base-semibold text-center translate-y-10 opacity-0 px-5">
                Jalankan alur kerja grafis berat dengan responsivitas yang mampu mengikuti
                imajinasi kamu. Keluarga chip M4 dilengkapi GPU dengan mesin ray tracing
                generasi kedua yang dipercepat secara hardware, sehingga gambar dirender
                lebih cepat, membuat{" "}
                <span className="text-white">
                    pengalaman gaming terasa lebih imersif dan realistis dari sebelumnya.
                </span>{" "}
                Dynamic Caching juga mengoptimalkan memori on-chip berkecepatan tinggi untuk
                meningkatkan pemanfaatan GPU secara signifikan — menghadirkan lonjakan
                performa besar untuk aplikasi profesional dan game yang paling menuntut.
                </p>

            </div>
        </section>
    )
}
export default Performance