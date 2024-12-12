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
            
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='200'>
              <ProjectsCard 
                title='.inp Files for page 1' 
                num='02' 
                link='https://drive.google.com/file/d/17ZvQeRUfA9I0KVIecZ-1Eanag_00acWv/view?usp=sharing' 
                imageSrc='/images/icon.jpg' 
                description='Download the .inp files and drag and drop it to the system.' 
              />
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='300'>
              <ProjectsCard 
                title='Pizza Website Design' 
                num='03' 
                link='https://drive.google.com/drive/folders/1XDFMyvo756A7y61hmYuyEEJgXyJZekeu?usp=sharing' 
                imageSrc='/images/HOME 1.jpg' 
                description='A UI/UX design for pizza website.' 
              />
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='400'>
              <ProjectsCard 
                title='Nova Shoes Website Design' 
                num='04' 
                link='https://drive.google.com/drive/folders/1RrVm_uXJgp5r-GnzUz_79Eil6iq8bURV?usp=sharing' 
                imageSrc='/images/shoes.jpg' 
                description='A UI/UX design for pizza website.' 
              />
            </div>
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='500'>
              <ProjectsCard 
                title='CALENDAR LAYOUT 11x17, 17x22 and 22x34' 
                num='05' 
                link='https://drive.google.com/drive/folders/1m50TfMoqLCU1_e9a_k0NoyNIlqvGp96D?usp=sharing' 
                imageSrc='/images/homesol2.jpg' 
                description='This is my project in Printing Services Company' 
              />
            </div>
            {/* NEW */}
            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='600'>
              <ProjectsCard 
                title='ID LAYOUT' 
                num='06' 
                link='https://drive.google.com/drive/folders/1GIFOXRgLFF1wybLsBEb1gUQoXNptUSta?usp=sharing' 
                imageSrc='/images/ID.png' 
                description='This is my Project ID layout' 
              />
            </div>

            <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='600'>
              <ProjectsCard 
                title='CALLING CARD' 
                num='07' 
                link='https://drive.google.com/drive/folders/1Q6a6ksADDxyrKu3Z0H0XkHk3V83RKEsA?usp=sharing' 
                imageSrc='/images/JACKIE.jpg' 
                description='This is my Project ID layout' 
              />
            </div>
          
        </div>
    </div>
  )
}

export default Projects
