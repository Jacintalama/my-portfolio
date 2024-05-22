import React from 'react'
import SkillCard from './Helper/SkillCard'

const Skills = () => {
    return (
        <div className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center'>
                <div className='col-span-3'>
                    <p className='heading__mini'>My Skills</p>
                    <h1 className='heading__primary'>Let's Explore <span className='text-yellow-400'>Skills</span> & Experience
                    </h1>
                    <p className='text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias quas dicta maiores qui hic consequatur sit, dolores atque aspernatur nam ipsa. Cumque explicabo mollitia dicta aut quae earum tempore officiis!</p>
                    {/* <button className='relative flex h-[50px] w-40 items-center justify-center font-semibold overflow-hidden bg-red-500 text-white shadow-2x1 transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56'>
                        <span className='relative z-10'>View Live</span>
                    </button> */}
                </div>
                <div className='col-span-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center'>
                        <div>
                            <SkillCard title="React" image="/images/react.svg" percent="90%" />
                        </div>
                        <div>
                            <SkillCard title="CSS" image="/images/css.svg" percent="87%" />
                        </div>
                        <div>
                            <SkillCard title="JavaScript" image="/images/js.svg" percent="77%" />
                        </div>
                        <div>
                            <SkillCard title="TypeScript" image="/images/ts.svg" percent="87%" />
                        </div>
                        <div>
                            <SkillCard title="HTML" image="/images/html.svg" percent="67%" />
                        </div>
                        <div>
                            <SkillCard title="PHP" image="/images/php.svg" percent="70%" />
                        </div>
                        <div>
                            <SkillCard title="Laravel" image="/images/laravel.svg" percent="70%" />
                        </div>
                        <div>
                            <SkillCard title="Illustrator" image="/images/ai.svg" percent="80%" />
                        </div>
                        <div>
                            <SkillCard title="Premiere " image="/images/pr.svg" percent="90%" />
                        </div>
                        <div>
                            <SkillCard title="Photoshop " image="/images/ps.svg" percent="90%" />
                        </div>
                        <div>
                            <SkillCard title="workbench" image="/images/mysql.svg" percent="70%" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills