import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`Copied to clipboard: ${text}`)
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  return (
    <div id='contact' className='relative pt-[5rem] pb-[6rem] bg-[#06080e] section-glow overflow-hidden'>
      <div className='ambient-orb w-[300px] h-[300px] bg-[#a78bfa] opacity-[0.025] top-[20%] right-[-5%]' />

      <div className='w-[80%] mx-auto relative'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center'>
          <div>
            <p data-aos='fade-right' data-aos-delay='200' className='heading__mini'>Get in Touch</p>
            <h1 data-aos='fade-right' data-aos-delay='300' className='heading__primary'>
              Let&apos;s <span className='gradient-text'>Connect</span>
            </h1>
            <p data-aos='fade-up' data-aos-delay='400' className='text-[15px] text-white/30 mt-[1rem] leading-[1.8] max-w-[420px]'>
              Ready to collaborate or have a project in mind? I&apos;d love to hear from you.
              Let&apos;s build something great together.
            </p>
          </div>
          <div className='space-y-4'>
            <div
              data-aos='fade-left'
              data-aos-delay='500'
              className='glass-card p-6 flex items-center justify-between group cursor-pointer'
              onClick={() => copyToClipboard('+63 951 110 6262')}
            >
              <div>
                <p className='text-[11px] text-[#818cf8]/50 font-medium uppercase tracking-[0.15em] mb-1.5'>Phone</p>
                <p className='text-[20px] md:text-[24px] text-white/90 font-semibold font-heading'>
                  +63 951 110 6262
                </p>
              </div>
              <FontAwesomeIcon
                icon={faCopy}
                className='text-white/15 group-hover:text-[#818cf8]/60 transition-colors duration-300 text-lg'
              />
            </div>
            <div
              data-aos='fade-left'
              data-aos-delay='600'
              className='glass-card p-6 flex items-center justify-between group cursor-pointer'
              onClick={() => copyToClipboard('alamajacintg04@gmail.com')}
            >
              <div>
                <p className='text-[11px] text-[#818cf8]/50 font-medium uppercase tracking-[0.15em] mb-1.5'>Email</p>
                <p className='text-[16px] md:text-[20px] text-white/90 font-semibold'>
                  alamajacintg04@gmail.com
                </p>
              </div>
              <FontAwesomeIcon
                icon={faCopy}
                className='text-white/15 group-hover:text-[#818cf8]/60 transition-colors duration-300 text-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
