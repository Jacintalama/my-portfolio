import React from 'react'
import ProjectsCard from './Helper/ProjectsCard'

const Projects = () => {
  return (
    <div id='projects' className='relative pt-[5rem] pb-[6rem] bg-[#06080e] section-glow overflow-hidden'>
      {/* Ambient orbs */}
      <div className='ambient-orb w-[400px] h-[400px] bg-[#a78bfa] opacity-[0.025] top-[20%] left-[-10%]' />
      <div className='ambient-orb w-[300px] h-[300px] bg-[#818cf8] opacity-[0.02] bottom-[10%] right-[-5%]' style={{ animationDelay: '-6s' }} />

      <div className='text-center mb-6 relative'>
        <p className='heading__mini'>Portfolio</p>
        <h1 className='heading__primary'>
          Featured <span className='gradient-text'>Projects</span>
        </h1>
        <p className='text-white/25 text-[15px] mt-3 max-w-[440px] mx-auto leading-relaxed'>
          A selection of web applications, platforms, and design work
        </p>
      </div>

      <div className='pt-[2.5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem]'>

        <div data-aos='fade-up' data-aos-delay='100'>
          <ProjectsCard
            title='Waffenplatz'
            num='01'
            link='https://waffenplatz.ch/'
            imageSrc='/images/waffenplatz.png'
            description='Every dealer. One marketplace. Swiss weapons dealers united — weapons, ammunition, optics & accessories. All dealers, one shop. Find dealers near you with shipping by post or local pickup.'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='200'>
          <ProjectsCard
            title='RAVEN WEAPON'
            num='02'
            link='https://ravenweapon.ch/'
            imageSrc='/images/ravenweapon.png'
            description='RAVEN WEAPON AG — A weapon for every mission, exactly as you want it. Swiss family business, made in Canada. Highest quality, fully configurable e-commerce platform.'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='300'>
          <ProjectsCard
            title='Petrol Stations Directory'
            num='03'
            link='https://petrolstations-directory-935253236645.europe-west6.run.app/'
            imageSrc='/images/bern.png'
            description='An automation web scraping system I developed for collecting and displaying petrol station data across Bern and Zurich regions in Switzerland.'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <ProjectsCard
            title='GSCWD Hydraulic Analysis'
            num='04'
            link='https://mrtankee.vercel.app/'
            imageSrc='/images/gscwd.png'
            description='My Team Project during our OJT in Water District General Santos City, we create a comprehensive hydrolic analysis using epanetJS features.'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='200'>
          <ProjectsCard
            title='SSG Voting System'
            num='05'
            link='http://everest.stratfordgensan.com/'
            imageSrc='/images/SSG.png'
            description='I made a project for different school and this is SSG Voting System'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='300'>
          <ProjectsCard
            title='.inp Files for page 4'
            num='06'
            link='https://drive.google.com/file/d/17ZvQeRUfA9I0KVIecZ-1Eanag_00acWv/view?usp=sharing'
            imageSrc='/images/icon.jpg'
            description='Download the .inp files and drag and drop it to the system.'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <ProjectsCard
            title='Pizza Website Design'
            num='07'
            link='https://drive.google.com/drive/folders/1XDFMyvo756A7y61hmYuyEEJgXyJZekeu?usp=sharing'
            imageSrc='/images/HOME 1.jpg'
            description='A UI/UX design for pizza website.'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='200'>
          <ProjectsCard
            title='Nova Shoes Website Design'
            num='08'
            link='https://drive.google.com/drive/folders/1RrVm_uXJgp5r-GnzUz_79Eil6iq8bURV?usp=sharing'
            imageSrc='/images/shoes.jpg'
            description='A UI/UX design for shoe e-commerce website.'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='300'>
          <ProjectsCard
            title='Calendar Layout'
            num='09'
            link='https://drive.google.com/drive/folders/1m50TfMoqLCU1_e9a_k0NoyNIlqvGp96D?usp=sharing'
            imageSrc='/images/homesol2.jpg'
            description='This is my project in Printing Services Company'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <ProjectsCard
            title='ID Layout'
            num='10'
            link='https://drive.google.com/drive/folders/1GIFOXRgLFF1wybLsBEb1gUQoXNptUSta?usp=sharing'
            imageSrc='/images/ID.png'
            description='This is my Project ID layout'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='200'>
          <ProjectsCard
            title='Calling Card'
            num='11'
            link='https://drive.google.com/drive/folders/1Q6a6ksADDxyrKu3Z0H0XkHk3V83RKEsA?usp=sharing'
            imageSrc='/images/JACKIE.jpg'
            description='This is my Project Calling Card'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='300'>
          <ProjectsCard
            title='Posters'
            num='12'
            link='https://drive.google.com/drive/folders/14T6Y7MgK2I8o2NA1f_3YUDlq4RtcRQgA?usp=sharing'
            imageSrc='/images/poster.jpg'
            description='This is my Project Posters'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='100'>
          <ProjectsCard
            title='Mobile Design & Product Booth'
            num='13'
            link='https://drive.google.com/drive/folders/1UFO6XRSO0H_y41P3apWEoNqNq-eruU94?usp=sharing'
            imageSrc='/images/atlantis.jpg'
            description='This is my Mobile design and Product booth'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='200'>
          <ProjectsCard
            title='Labels'
            num='14'
            link='https://drive.google.com/drive/folders/1INxHNvlKp3uK0EWYwoP2wqueA3Xdt2tn?usp=sharing'
            imageSrc='/images/labels.jpg'
            description='This is my Labels Layout Design'
          />
        </div>

        <div data-aos='fade-up' data-aos-delay='300'>
          <ProjectsCard
            title='Packaging Box Layout'
            num='15'
            link='https://drive.google.com/drive/folders/1INxHNvlKp3uK0EWYwoP2wqueA3Xdt2tn?usp=sharing'
            imageSrc='/images/box.PNG'
            description='This is my Box Packaging Design'
          />
        </div>

      </div>
    </div>
  )
}

export default Projects
