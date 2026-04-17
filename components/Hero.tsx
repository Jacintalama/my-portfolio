import React from 'react'
import TypeWriteEffect from './Helper/TypeWriteEffect'
import Image from 'next/image'
import Particle from './Particle'

const Hero = () => {
    return (
        <div className='relative w-[100vw] pt-[4vh] md:pt-[12vh] h-[88vh] md:h-[100vh] custom-bg overflow-hidden'>
            {/* Ambient orbs */}
            <div className='ambient-orb w-[400px] h-[400px] bg-[#818cf8] opacity-[0.04] top-[10%] left-[-5%] z-[1]' />
            <div className='ambient-orb w-[300px] h-[300px] bg-[#a78bfa] opacity-[0.03] bottom-[20%] right-[5%] z-[1]' style={{ animationDelay: '-4s' }} />

            <div className='absolute inset-0 z-[2]'>
                <Particle />
            </div>
            <div className='relative z-[3] flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center'>
                    <div>
                        <div className='stagger-1'>
                            <span className='badge mb-6'>
                                <span className='badge-dot' />
                                Available for work
                            </span>
                        </div>
                        <div className='stagger-2'>
                            <p className='text-[13px] md:text-[14px] text-white/30 font-medium tracking-[0.2em] uppercase mb-3'>
                                Portfolio
                            </p>
                            <h1 className='font-heading xl:text-[60px] lg:text-[48px] sm:text-[40px] text-[32px] font-bold leading-[1.05] text-white'>
                                Hi, I&apos;m <span className='gradient-text'>Jacint</span>
                            </h1>
                        </div>
                        <div className='stagger-3 mt-1'>
                            <TypeWriteEffect />
                        </div>
                        <div className='stagger-4'>
                            <p className='mt-[1.5rem] text-[15px] md:text-[16px] text-white/40 leading-[1.7] max-w-[500px]'>
                                Full stack developer building professional digital systems and web applications.
                                I leverage Claude Code and modern tools to create efficient, scalable
                                solutions that make businesses stand out.
                            </p>
                        </div>
                        <div className='stagger-5 mt-[2rem] flex items-center space-x-4'>
                            <button
                                className='btn-primary'
                                onClick={() => { window.location.href = 'https://drive.google.com/file/d/1eXj_LQnXSE_IeFG04zPGH4W2XimlXUxW/view?usp=sharing'; }}
                            >
                                My Resume
                            </button>
                            <a href='#projects' className='btn-outline'>
                                View Projects
                            </a>
                        </div>
                    </div>
                    <div className='hidden md:flex justify-center stagger-6'>
                        <div className='relative hero-float'>
                            <div className='absolute -inset-8 rounded-full bg-[#818cf8] opacity-[0.06] blur-3xl animate-pulse' />
                            <div className='absolute -inset-4 rounded-full border border-[#818cf8]/10' />
                            <Image
                                src='/images/hero.png'
                                alt='hero'
                                width={400}
                                height={400}
                                className='object-cover rounded-full relative z-10 border border-white/[0.06]'
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero
