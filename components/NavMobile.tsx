import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
  showNav: boolean
  closeNav: () => void
}

const NavMobile = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]'

  return (
    <div>
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 right-0 bg-black/60 backdrop-blur-sm w-[100vw] h-[100vh]`}
        onClick={closeNav}
      />
      <ul className={`text-white ${navOpenStyle} fixed flex items-center flex-col h-[100%] justify-center transform transition-all duration-500 delay-200 w-[70%] sm:w-[60%]
        bg-[#0b0e16]/95 backdrop-blur-2xl border-r border-white/[0.04]
        space-y-10 z-[10006]`}>
        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
          <li key={item} style={{ transitionDelay: `${200 + i * 60}ms` }}>
            <a
              className='nav__link text-[22px] sm:text-[26px]'
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
              onClick={closeNav}
            >
              {item}
            </a>
          </li>
        ))}
        <XMarkIcon
          onClick={closeNav}
          className='absolute top-6 right-6 w-[2rem] h-[2rem] text-white/30 hover:text-[#818cf8] transition-colors duration-300 cursor-pointer'
        />
      </ul>
    </div>
  )
}

export default NavMobile
