import React from 'react'
import SkillCard from './Helper/SkillCard'

const Skills = () => {
    return (
        <div id='skills' className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center'>
                <div className='col-span-3'>
                    <p className='heading__mini'>My Skills</p>
                    <h1 className='heading__primary'>Lets Explore <span className='text-yellow-400'>Skills</span> & Experience
                    </h1>
                    <p className='text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]' >With a diverse set of skills in both development and design, I bring a unique blend of technical expertise and creative flair. From building dynamic web applications using React and Laravel to crafting visually appealing graphics with Illustrator and Photoshop, my skill set is designed to deliver high-quality, engaging digital experiences.</p>
                
                </div>
                <div className='col-span-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center'>
                        <div data-aos='flip-left' ata-aos-delay='100'>
                            <SkillCard title="React" image="/images/react.svg" percent="90%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='200'    >
                            <SkillCard title="Tailwind CSS" image="/images/tailwind-svgrepo-com.svg" percent="87%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='300'>
                            <SkillCard title="JavaScript" image="/images/js.svg" percent="90%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='400' >
                            <SkillCard title="TypeScript" image="/images/ts.svg" percent="87%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='1100'  >
                            <SkillCard title="Next.js" image="/images/nextjs-icon-svgrepo-com.svg" percent="70%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='1100'  >
                            <SkillCard title="PostgreSQL" image="/images/postgresql-icon.svg" percent="70%" />
                        </div>

                        <div data-aos='flip-left' ata-aos-delay='1100'  >
                            <SkillCard title="DJANGO" image="/images/django-svgrepo-com.svg" percent="55%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='1100'  >
                            <SkillCard title="Python" image="/images/python-svgrepo-com.svg" percent="55%" />
                        </div>

                        <div data-aos='flip-left' ata-aos-delay='500'>
                            <SkillCard title="HTML" image="/images/html.svg" percent="67%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='600' >
                            <SkillCard title="PHP" image="/images/php.svg" percent="70%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='700' >
                            <SkillCard title="Laravel" image="/images/laravel.svg" percent="70%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='800' >
                            <SkillCard title="Illustrator" image="/images/ai.svg" percent="80%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='900'  >
                            <SkillCard title="Premiere " image="/images/pr.svg" percent="90%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='1000' >
                            <SkillCard title="Photoshop " image="/images/ps.svg" percent="90%" />
                        </div>
                        <div data-aos='flip-left' ata-aos-delay='1100'>
                            <SkillCard title="Claude Code" image="/images/claude-ai-icon.svg" percent="90%" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills