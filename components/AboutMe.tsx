import { CheckIcon } from '@heroicons/react/16/solid';
import React from 'react'

const AboutMe = () => {
  return (
    <div className='bg-black pb-[3.5rem]'>
      <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto'>
        <div className='grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
          <div>
            <p className='heading__mini'>About Me</p>
            <h1 className='heading__primary'>Professional <span className='text-yellow-400'>Website</span> for your business
            </h1>
            <p className='text-[15px] mt-[1.3rem] text-white opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, est? Obcaecati voluptas consequuntur veniam illum ullam excepturi debitis at possimus error. Aperiam sed ex facilis, fugit quisquam delectus optio perferendis?</p>
            <div className='mt-[2rem] space-y-3'>
              <div className='flex items-end space-x-4'>
                <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                <p className='text-[18px] text-white'>Frontend Development</p>
              </div>
              <div className='flex items-end space-x-4'>
                <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                <p className='text-[18px] text-white'>Web Development</p>
              </div>
              <div className='flex items-end space-x-4'>
                <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                <p className='text-[18px] text-white'>UI/UX Design</p>
              </div>
              <div className='flex items-end space-x-4'>
                <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                <p className='text-[18px] text-white'>Logo Maker</p>
              </div>
              <div className='flex items-end space-x-4'>
                <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                <p className='text-[18px] text-white'>Video Editor</p>
              </div>
             
            </div>
          </div>
          <div className='lg:ml-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]'>
                  <div className='p-6 text-center bg-yellow-500'>
                    <p className='text-[50px] text-black font-bold'>I'm</p>
                    <p className='text-[20px] text-black font-600'>Fresh Graduate</p>
                  </div>
                  <div className='p-6 text-center bg-yellow-500'>
                    <p className='text-[50px] text-black font-bold'>4</p>
                    <p className='text-[20px] text-black font-600'>Project Made</p>
                  </div>
                  {/* <div className='p-6 text-center bg-yellow-500'>
                    <p className='text-[50px] text-black font-bold'>3</p>
                    <p className='text-[20px] text-black font-600'>Projects Made</p>
                  </div>
                  <div className='p-6 text-center bg-yellow-500'>
                    <p className='text-[50px] text-black font-bold'>3</p>
                    <p className='text-[20px] text-black font-600'>Projects Made</p>
                  </div> */}
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe