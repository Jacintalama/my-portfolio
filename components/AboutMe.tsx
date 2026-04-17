import { CheckIcon } from '@heroicons/react/16/solid';
import React from 'react'

const skills = [
  'Full Stack Development',
  'Claude Code Systems',
  'Frontend & React',
  'UI/UX Design',
  'Graphic Design',
  'Video Editing',
];

const stats = [
  { value: '3+', label: 'Years Full Stack Dev', delay: 100 },
  { value: '3', label: 'Years Graphic Design', delay: 200 },
  { value: '15', label: 'Projects Delivered', delay: 300 },
  { value: '2+', label: 'Years Work Experience', delay: 400 },
];

const AboutMe = () => {
  return (
    <div id='about' className='relative bg-[#0b0e16] pb-[6rem] section-glow overflow-hidden'>
      {/* Ambient orb */}
      <div className='ambient-orb w-[350px] h-[350px] bg-[#818cf8] opacity-[0.03] top-[30%] right-[-8%]' />

      <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto relative'>
        <div className='grid items-center grid-cols-1 lg:grid-cols-2 gap-[4rem]'>
          <div>
            <p data-aos='fade-right' className='heading__mini'>About Me</p>
            <h1 data-aos='fade-right' data-aos-delay='100' className='heading__primary'>
              Building <span className='gradient-text'>Professional</span><br />Digital Solutions
            </h1>
            <p data-aos='fade-up' data-aos-delay='200' className='text-[15px] mt-[1.8rem] text-white/35 leading-[1.8] max-w-[480px]'>
              Full stack developer with expertise in building modern web applications and automated systems.
              I combine development skills with Claude Code to create efficient, scalable solutions — from
              e-commerce platforms to data scraping systems.
            </p>
            <div data-aos='fade-up' data-aos-delay='300' className='mt-[2rem] space-y-3'>
              {skills.map((skill, i) => (
                <div key={i} className='flex items-center space-x-3 group'>
                  <div className='w-5 h-5 rounded-full bg-[#818cf8]/8 border border-[#818cf8]/20 flex items-center justify-center group-hover:bg-[#818cf8]/15 group-hover:border-[#818cf8]/40 transition-all duration-300'>
                    <CheckIcon className='w-3 h-3 text-[#818cf8]' />
                  </div>
                  <p className='text-[14px] text-white/50 group-hover:text-white/80 transition-colors duration-300'>{skill}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='lg:ml-auto w-full lg:max-w-[400px]'>
            <div className='grid grid-cols-2 gap-[1rem]'>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  data-aos='zoom-in'
                  data-aos-delay={stat.delay}
                  className='stat-card p-6 text-center'
                >
                  <p className='text-[46px] font-heading gradient-text-warm font-bold leading-none'>
                    {stat.value}
                  </p>
                  <p className='text-[13px] text-white/40 font-medium mt-2 leading-snug'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe
