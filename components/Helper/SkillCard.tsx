import Image from 'next/image';
import React from 'react'

interface Props {
    image: string;
    title: string;
    percent: string;
}

const SkillCard = ({ image, title, percent }: Props) => {
    const percentNum = parseInt(percent);

    return (
        <div className='skill-card p-4 text-center group'>
            <div className='w-10 h-10 mx-auto mb-3 relative'>
                <Image src={image} alt={title} width={40} height={40} className='object-cover' />
            </div>
            <h4 className='text-[13px] text-white/70 font-medium group-hover:text-white/90 transition-colors duration-300'>
                {title}
            </h4>
            <div className='mt-3'>
                <div className='w-full h-[3px] bg-white/[0.04] rounded-full overflow-hidden'>
                    <div
                        className='h-full rounded-full transition-all duration-700'
                        style={{
                            width: percent,
                            background: `linear-gradient(90deg, #818cf8 0%, ${percentNum > 80 ? '#a78bfa' : '#6366f1'} 100%)`,
                        }}
                    />
                </div>
                <span className='text-[11px] text-[#818cf8]/50 font-medium mt-1.5 block'>
                    {percent}
                </span>
            </div>
        </div>
    )
}

export default SkillCard
