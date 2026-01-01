import { PresentationControls } from '@react-three/drei'
import React from 'react'
import { useRef } from 'react'
import MacbookModel16 from '../models/Macbook-16'
import MacbookModel14 from '../models/Macbook-14'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ANIMATION_DURATION = 1
const OFFSET_DISTANCE = 7

const fadeMashes = (group, opacity) => {
    if(!group) return

    group.traverse((child) => {
        if (!group) {
            child.material.transparent = true;
            gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
        }
    })
}

const moveGroup = (group, x) => {
    if(!group) return

    gsap.to(group.position, { x, duration: ANIMATION_DURATION})
}


const ModelSwitcher = ({ scale, isMobile }) => {

    const smallMacbookRef = useRef()
    const largeMacbookRef = useRef()

    const showLargeMacbook = scale == 0.08 || scale == 0.05

    useGSAP(() => {
        if (showLargeMacbook) {
            moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE)
            moveGroup(largeMacbookRef.current, 0)
    
            fadeMashes(smallMacbookRef.current, 0)
            fadeMashes(largeMacbookRef.current, 1)
        } else {
            moveGroup(smallMacbookRef.current, 0)
            moveGroup(largeMacbookRef.current, OFFSET_DISTANCE)
    
            fadeMashes(smallMacbookRef.current, 1)
            fadeMashes(largeMacbookRef.current, 0)
        }
    }, [scale])

    const controlsConfig = {
        snap: true,
        speed: 2,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: { mass: 1, tension: 0, friction: 26}
    }

    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08}/>
                </group>
            </PresentationControls>

            <PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06}/>
                </group>
            </PresentationControls>
        </>
    )
}

export default ModelSwitcher