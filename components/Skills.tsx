import React from 'react'
import SkillCard from './Helper/SkillCard'

const Skills = () => {
    return (
        <div id='skills' className='relative pt-[5rem] pb-[6rem] bg-[#0b0e16] section-glow overflow-hidden'>
            <div className='ambient-orb w-[350px] h-[350px] bg-[#818cf8] opacity-[0.025] bottom-[10%] left-[-5%]' />

            <div className='grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[3rem] items-center relative'>
                <div className='col-span-3'>
                    <p className='heading__mini'>My Skills</p>
                    <h1 className='heading__primary'>
                        Technical <span className='gradient-text'>Skills</span><br />& Expertise
                    </h1>
                    <p className='text-[15px] mb-[1.5rem] text-white/30 mt-[1.5rem] leading-[1.8]'>
                        From building dynamic web applications with React and Next.js to crafting
                        visual experiences with design tools — bridging development and
                        design with AI-powered tools.
                    </p>
                </div>
                <div className='col-span-4'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[0.6rem]'>
                        {[
                            { title: 'React', image: '/images/react.svg', percent: '90%', delay: 100 },
                            { title: 'Tailwind', image: '/images/tailwind-svgrepo-com.svg', percent: '87%', delay: 140 },
                            { title: 'JavaScript', image: '/images/js.svg', percent: '90%', delay: 180 },
                            { title: 'TypeScript', image: '/images/ts.svg', percent: '87%', delay: 220 },
                            { title: 'Next.js', image: '/images/nextjs-icon-svgrepo-com.svg', percent: '70%', delay: 260 },
                            { title: 'PostgreSQL', image: '/images/postgresql-icon.svg', percent: '70%', delay: 300 },
                            { title: 'Django', image: '/images/django-svgrepo-com.svg', percent: '55%', delay: 340 },
                            { title: 'Python', image: '/images/python-svgrepo-com.svg', percent: '55%', delay: 380 },
                            { title: 'HTML', image: '/images/html.svg', percent: '67%', delay: 420 },
                            { title: 'PHP', image: '/images/php.svg', percent: '70%', delay: 460 },
                            { title: 'Laravel', image: '/images/laravel.svg', percent: '70%', delay: 500 },
                            { title: 'Illustrator', image: '/images/ai.svg', percent: '80%', delay: 540 },
                            { title: 'Premiere', image: '/images/pr.svg', percent: '90%', delay: 580 },
                            { title: 'Photoshop', image: '/images/ps.svg', percent: '90%', delay: 620 },
                            { title: 'Claude Code', image: '/images/claude-ai-icon.svg', percent: '90%', delay: 660 },
                        ].map((skill) => (
                            <div key={skill.title} data-aos='flip-left' data-aos-delay={skill.delay}>
                                <SkillCard title={skill.title} image={skill.image} percent={skill.percent} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
