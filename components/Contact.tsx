import React from 'react'

const Contact = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto'>
            <div className=''>
                <p className='heading__mini'>Get in Touch</p>
                <h1 className='heading__primary'><span className='text-yellow-400'>Contact</span> me</h1>
                <p className='text-[15px] text-white mt-[1rem] opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum minima enim veniam aspernatur quidem quia, nam suscipit blanditiis fuga consectetur distinctio voluptatum ducimus nisi deleniti sit maxime amet itaque.</p>
            <h1 className='mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold'>+63 951 110 6262</h1>
            </div>
        </div>
    </div>
  )
}

export default Contact