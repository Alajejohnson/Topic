import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Dropdown } from '../../component'
import { Close, Hamburger } from '../../asset'
import { useState, useEffect } from 'react'

const Header = () => {
  const [toggle, setToggle] = useState(false) ;

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
    className={`sticky w-full z-30 top-0 transition-all duration-300 ${
      isSticky ? 'bg-btnbgcolor ' : 'linear__bg'
    }`}
  >
    
    <div className="header relative py-8 px-16 lg:px-0 lg:py-6   justify-normal lg:justify-around  ">

            <div className="header__logo">
            <Link to="/" >
            <Icon icon="tabler:box-multiple" className='text-4xl lg:text-5xl' />
              <h1 className='text-4xl'>Topic</h1>
              </Link>
            </div>
            
        <div className="header__links hidden flex-row sm:hidden lg:flex ">
          <Link to="/"> Home</Link>
            <a href="/#browse">Browse Topic</a>
            <a href="#how">How it works</a>
            <a href="#faq">Faq</a>
            <a href="#contact">Contact</a>
            {/* <Link to="pages">Pages</Link> */}
             <Link to=""><Dropdown /></Link>
            
        </div>

        <div className='header__icon absolute bg-whitecolor hover:bg-btnbghovercolor hover:transition-all rounded-full p-2  lg:p-4 lg:relative left-2/3 lg:left-0 '>
        <Icon icon="ic:baseline-perm-identity" className='text-xl lg:text-3xl hover:text-whitecolor' />
        </div>

      {toggle ? <img src={Close} alt="" className='sm:block  lg:hidden absolute lg:relative left-[80%] lg:left-0' onClick={ () => setToggle(false) } /> : <img src={Hamburger} alt=""className='sm:block lg:hidden  absolute lg:relative left-[80%] lg:left-0 ' onClick={() => setToggle(true)} /> }
        {
          toggle &&  <div className="header__link slide-botto scale-in-ver-top  flex lg:hidden gap-4  flex-col absolute right-2/3 bg-btnbgcolor w-full left-0 top-full py-8 px-8  "> 
          <Link to="/" onClick={ () => setToggle(false) }> Home</Link>
            <a href="/#browse" onClick={ () => setToggle(false) }>Browse Topic</a>
            <a href="#how" onClick={ () => setToggle(false) } >How it works</a>
            <a href="#faq" onClick={ () => setToggle(false) } >Faq</a>
            <a href="#contact" onClick={ () => setToggle(false) }>Contact</a>
            {/* <Link to="pages">Pages</Link> */}
             <Link to="" onClick={ () => setToggle(false) }><Dropdown  /></Link>
            
        </div>
        }


    </div>

    </header>
  )
}

export default Header