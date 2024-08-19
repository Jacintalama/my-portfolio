import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  num: string;
  link: string;
  imageSrc: string;
  description: string;
}

const ProjectsCard = ({ num, title, link, imageSrc, description }: Props) => {
  return (
    <div className='bg-black custom__services z-[100] relative transform round-2x1 text-center p-6 shadow-md'>
      <Image 
        src={imageSrc} 
        alt={title} 
        width={600}  // Replace with actual width
        height={400} // Replace with actual height
        className="w-full h-48 object-cover mb-4" 
      />
      <h1 className='text-[25px] relative z-[1] text-white mt-[1rem]'>
        {title}
      </h1>
      <p className='text-white text-[15px] opacity-60 mt-[0.8rem]'>{description}</p><br />
      <p className='text-white text-[1.6rem] font-bold absolute top-3 right-4'>{num}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className='relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2x1 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-700 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'>
        <span className='relative z-10'>View Live</span>
      </a>
    </div>
  );
};

export default ProjectsCard;
