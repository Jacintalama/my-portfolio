import { BugAntIcon, PencilSquareIcon, CommandLineIcon, FilmIcon, SwatchIcon, ServerIcon } from '@heroicons/react/16/solid';
import React from 'react'

interface Props {
    title: string;
    num: string;
    link: string;
    imageSrc: string;
    description: string;
}

// const iconMapping = {
//     "01": CommandLineIcon,
//     "02": ServerIcon,
//     "03": PencilSquareIcon,
//     "04": FilmIcon,
// }

const ProjectsCard = ({ num, title, link, imageSrc, description }: Props) => {
    // const IconComponent = (iconMapping as Record<string, React.ElementType>)[num] || CommandLineIcon

    return (
        <div className='bg-black custom__services z-[100] relative transform round-2x1 text-center p-6 shadow-md'>
            <img src={imageSrc} alt={title} className="w-full h-48 object-cover mb-4" /> {/* Display the image */}
            {/* <IconComponent className="w-[5rem] relative z-[1] mx-auto h-[5rem] text-yellow-400" /> */}
            <h1 className='text-[25px] relative z-[1] text-white mt-[1rem]'>
                {title}
            </h1>
            <p className='text-white text-[15px] opacity-60 mt-[0.8rem]'>{description}</p><br />
            <p className='text-white text-[1.6rem] font-bold absolute top-3 right-4'>{num}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className='relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2x1 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-yellow-700 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'>
                <span className='relative z-10'>View Live</span>
            </a>
        </div>
    )
}

export default ProjectsCard
