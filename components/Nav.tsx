import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'

interface Props {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navSticky, setNavSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavSticky(window.scrollY >= 90);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const stickyStyle = navSticky
        ? 'bg-[#06080e]/70 backdrop-blur-2xl border-b border-white/[0.03] shadow-lg shadow-black/30'
        : '';

    return (
        <div className={`fixed w-[100%] ${stickyStyle} transition-all duration-700 z-[1000]`}>
            <div className='flex items-center h-[10vh] justify-between w-[80%] mx-auto'>
                <div className='font-logo text-white text-[18px]'>
                    <span className='text-[28px] md:text-[36px] gradient-text'>Jacint</span>
                    <span className='text-white/30 ml-1 text-[15px]'>Portfolio</span>
                </div>
                <ul className='md:flex hidden items-center space-x-10'>
                    <li><a className='nav__link' href='#'>Home</a></li>
                    <li><a className='nav__link' href='#about'>About</a></li>
                    <li><a className='nav__link' href='#projects'>Projects</a></li>
                    <li><a className='nav__link' href='#skills'>Skills</a></li>
                    <li><a className='nav__link' href='#contact'>Contact</a></li>
                </ul>
                <Bars3CenterLeftIcon
                    onClick={openNav}
                    className='w-[2rem] md:hidden h-[2rem] text-white/40 rotate-180 hover:text-[#818cf8] transition-colors duration-300 cursor-pointer'
                />
            </div>
        </div>
    )
}

export default Nav
