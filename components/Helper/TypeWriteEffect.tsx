import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeWriteEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'a Full Stack Developer',
        1000,
        'a Claude Code Developer',
        1000,
        'a React Developer',
        1000,
        'a Next.js Developer',
        1000,
        'a Graphics Designer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      className='xl:text-[48px] lg:text-[38px] sm:text-[32px] text-[24px] font-heading gradient-text-warm font-bold'
      repeat={Infinity}
    />
  )
}

export default TypeWriteEffect
