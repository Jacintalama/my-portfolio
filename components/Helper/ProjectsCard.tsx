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
    <div className='project-card group h-full flex flex-col'>
      <div className='relative overflow-hidden'>
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={400}
          className='w-full h-52 object-cover project-image'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#06080e] via-[#06080e]/20 to-transparent' />
        <span className='absolute top-4 right-4 text-[12px] font-mono font-semibold text-white bg-[#818cf8]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10'>
          {num}
        </span>
      </div>
      <div className='p-6 flex-1 flex flex-col'>
        <h3 className='text-[18px] text-white/90 font-semibold mb-2 group-hover:text-[#a5b4fc] transition-colors duration-400'>
          {title}
        </h3>
        <p className='text-white/30 text-[13px] leading-[1.7] mb-5 flex-1 line-clamp-3'>
          {description}
        </p>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='btn-outline inline-flex items-center gap-2 !px-5 !py-2.5 text-[12px] w-fit'
        >
          View Live
          <svg className='w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
