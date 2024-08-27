import React from 'react'
import './hero.css'
import { Facebook, Hero__img, Hero__img2, Pinterest, Twitter } from '../../asset'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from  '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className="hero" id='hero'>
      <div className="hero__top px-4 py-24 lg:px-0 ">
        <h5 className='tracking-in-expand text-6xl' >Discover. Learn. Enjoy</h5>
        <p className='w-fit text-base md:text-xl lg:text-2xl pt-4 '>platform for creatives around the world</p>
        <div className="hero__input__group w-full md:w-[70%] lg:w-3/6 py-2 lg:py-2 px-3   ">
        {/* <Icon icon="simple-line-icons:magnifier" className='text-3xl  text-darkcolor ' /> */}
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xs md:text-[15px]  text-darkcolor lg:text-xl ' />
          <input type="search" role='search' placeholder='Design, Code, Marketing, Finance ...' className='w-full lg:min-w-96   placeholder:text-xs placeholder:lg:text-xl placeholder:md:text-[15px] ' />
          <button className='text-xs md:text-xl  lg:text-2xl py-2 px-5 lg:py-2  md:px-4 lg:px-6 rounded-3xl '>search</button>
        </div>
      </div>

      <div className="hero__buttom py-8 px-0 lg:px-28">
        <div className="hero__buttom__container  flex flex-col lg:flex-row">
          <div className="hero__buttom__right w-fit">
          <h5 className='text-xl lg:text-2xl'> <Link to='webdesign'>Web Design </Link> 
          </h5>
          <div className="badge left-[80%] md:left-[85%] ">
            <h5> <Link to='webdesign'>14 </Link></h5>
          </div>
          <p>When you search for free CSS templates, you will notice that TemplateMo is one of the best websites.</p>
            <img src={Hero__img2} alt="" />
        </div>
        <div className="hero__buttom__left w-full ">
          <img src={Hero__img} alt="" />
          <div className="hero__buttom__left__layer ">

          </div>

          <div className="hero__buttom__left__text  w-fit">
          <h5>Finance</h5>
          <div className="badge left-[80%] md:left-[85%]  ">
            <h5>25</h5>
          </div>
            <p className='w-full md:5/6 lg:5/6 text-sm md:text-xl lg:text-xl text-whitecolor pt-2 md:pt-8 lg:pt-8 '>Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements.</p>

            <button className='text-base md:text-xl lg:text-xl p-2 md:p-3 lg:p-4 rounded-full text-whitecolor bg-btnbgcolor hover:bg-btnbghovercolor font-semibold mt-2 md:mt-8 lg:mt-8 ' >Learn More</button>
          </div>

            <div className="hero__buttom__left__layer__icon absolute top-[80%] lg:top-3/4 left-8 items-center">
              <h5 className='text-whitecolor text-base  md:text-2xl  lg:text-2xl font-normal'>Share:</h5>
              <div className="socials rounded-full p-1 lg:p-4 ">
              <Icon icon="mdi:twitter" className='text-[18px] text-whitecolor md:text-2xl lg:text-2xl' />
              </div> 
              <div className="socials rounded-full p-1 lg:p-4 ">
              <Icon icon="ic:baseline-facebook"  className='text-[18px] text-whitecolor md:text-2xl lg:text-2xl' />
              </div>
              <div className="socials rounded-full p-1 lg:p-4 ">
              <Icon icon="mdi:pinterest" className='text-[18px] text-whitecolor   md:text-2xl lg:text-2xl' />
              </div>              
              <Icon icon="ic:outline-bookmark-border" className='bookmark absolute  text-xl text-whitecolor md:text-3xl lg:text-3xl' />
            </div>

        </div>
         </div>
      </div>
    </div>
  ) 
}

export default Hero