import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import Footer from './components/Footer'
import Highlights from './components/Hightlight'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
      <Performance/>
      <Highlights/>
      <Footer/>
    </main>
  )
}

export default App