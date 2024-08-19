import React from 'react'
import ProjectsCard from './Helper/ProjectsCard'

const Projects = () => {
  return (
    <div id='projects' className='pt-[5rem] pb-[3rem] bg-[#0b0c13]'>
        <div className='text-center'>
            <p className='heading__mini'>Personal project</p>
            <h1 className='heading__primary'>
                My <span className='text-yellow-600'>Project</span> that i made
            </h1>
        </div>
        <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-center'>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='100'>
              <ProjectsCard 
                title='GSCWD Hydraulic Analysis' 
                num='01' 
                link='https://mrtankee.vercel.app/' 
                imageSrc='/images/gscwd.png' 
                description='My Team Project during our OJT in Water District General Santos City, we create a comprehensive hydrolic analysis using epanetJS features.' 
              />
            </div>
            {/* <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='200'>
              <ProjectsCard 
                title='Online Job Application' 
                num='02' 
                link='https://drive.google.com/file/d/1w1kwJDxJ6jQ1b0NuGYtTcMyGxB7yDJ2b/view?usp=sharing' 
                imageSrc='/images/online-job-application.png' 
                description='My Capstone Project on my 4th level college with this i learn full stack somehow using PHP Laravel and mySQL.' 
              />
            </div> */}
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='300'>
              <ProjectsCard 
                title='Pizza Website Design' 
                num='02' 
                link='https://drive.google.com/drive/folders/1XDFMyvo756A7y61hmYuyEEJgXyJZekeu?usp=sharing' 
                imageSrc='/images/HOME 1.jpg' 
                description='A UI/UX design for pizza website.' 
              />
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='300'>
              <ProjectsCard 
                title='Nova Shoes Website Design' 
                num='03' 
                link='https://drive.google.com/drive/folders/1RrVm_uXJgp5r-GnzUz_79Eil6iq8bURV?usp=sharing' 
                imageSrc='/images/shoes.jpg' 
                description='A UI/UX design for pizza website.' 
              />
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='300'>
              <ProjectsCard 
                title='Capstone Poster' 
                num='04' 
                link='https://drive.google.com/file/d/1w1kwJDxJ6jQ1b0NuGYtTcMyGxB7yDJ2b/view?usp=sharing' 
                imageSrc='/images/capstoneposter.png' 
                description='PSITS REGIONAL 2024 event and I am participant as Capstone Poster of our school.' 
              />
            </div>
            <div data-aos='fade-up'  data-aos-delay='300'>
              <ProjectsCard 
                title='Covid-19 Poster' 
                num='05' 
                link='https://drive.google.com/file/d/1qmeEy8JYNCuDXcxkcKXHUTenWxV-lsL0/view?usp=sharing'
                imageSrc='/images/Covid19.png' 
                description='Created at Oct 25, 2020 An informational poster about Covid-19 to stop the madness.' 
              />
            </div>
        </div>
    </div>
  )
}

export default Projects
