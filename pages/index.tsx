
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import NavMobile from '@/components/NavMobile'
import Services from '@/components/Projects'
import Skills from '@/components/Skills'
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Homepage = () => {

  useEffect (()=>{
    AOS.init({
      duration:1000,
      easing:'ease',
      once:true,
      anchorPlacement:'top-bottom'
    })
  },[])
  const [showNav,setShowNav] = useState(false)
  const showNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  return (
    <div className='overflow-hidden'>
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav ={showNavHandler} />
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
     <Contact />
      
    </div>
  )
}

export default Homepage