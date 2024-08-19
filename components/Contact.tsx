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
    <div id='contact' className='pt-[5rem] pb-[3rem] bg-gray-900'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto'>
        <div className=''>
          <p data-aos='fade-right' data-aos-delay='400' className='heading__mini'>Get in Touch</p>
          <h1 data-aos='fade-left' data-aos-delay='600' className='heading__primary'>
            <span className='text-yellow-400'>Contact</span> me
          </h1>
          <p data-aos='zoom-in' data-aos-delay='800' className='text-[15px] text-white mt-[1rem] opacity-75'>
            If youd like to collaborate or have any inquiries, I look forward to connecting with you and exploring how we can work together to bring your ideas to life.
          </p>
          <h1 data-aos='fade-right' data-aos-delay='900' className='mt-[2rem] mb-[2rem] text-[30px] text-white font-bold'>
            +63 951 110 6262
            <FontAwesomeIcon
              icon={faCopy}
              className='ml-2 cursor-pointer'
              onClick={() => copyToClipboard('+63 951 110 6262')}
            />
          </h1>
          <h1 data-aos='fade-right' data-aos-delay='900' className='mt-[2rem] mb-[2rem] text-[30px] text-white font-bold'>
            alamajacintg04@gmail.com
            <FontAwesomeIcon
              icon={faCopy}
              className='ml-2 cursor-pointer'
              onClick={() => copyToClipboard('alamajacintg04@gmail.com')}
            />
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
