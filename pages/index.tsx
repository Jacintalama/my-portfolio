
import Nav from '@/components/Nav'
import NavMobile from '@/components/NavMobile'
import React, { useState } from 'react'

const Homepage = () => {
  const [showNav,setShowNav] = useState(false)
  const showNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  return (
    <div className='overflow-hidden'>
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Nav openNav ={showNavHandler} />
    </div>
  )
}

export default Homepage