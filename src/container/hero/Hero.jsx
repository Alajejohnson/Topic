import React from 'react'
import './hero.css'
import { Facebook, Hero__img, Hero__img2, Pinterest, Twitter } from '../../asset'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero" id='hero'>
      <div className="hero__top px-4 py-24 lg:px-0 ">
        <h5 className='tracking-in-expand'>Discover. Learn. Enjoy</h5>
        <p className='w-fit'>platform for creatives around the world</p>
        <div className="hero__input__group   ">
        <Icon icon="simple-line-icons:magnifier" className='text-6xl lg:text-[50px] text-darkcolor ' />
          <input type="search" role='search' placeholder='Design, Code, Marketing, Finance ...' className='w-full lg:min-w-96 ' />
          <button>search</button>
        </div>
      </div>

      <div className="hero__buttom py-8 px-0 lg:px-28">
        <div className="hero__buttom__container  flex flex-col lg:flex-row">
          <div className="hero__buttom__right w-fit">
          <h5> <Link to='webdesign'>Web Design </Link> 
          </h5>
          <div className="badge">
            <h5> <Link to='webdesign'>14 </Link></h5>
          </div>
          <p>When you search for free CSS templates, you will notice that TemplateMo is one of the best websites.</p>
            <img src={Hero__img2} alt="" />
        </div>
        <div className="hero__buttom__left w-fit">
          <img src={Hero__img} alt="" />
          <div className="hero__buttom__left__layer">

          </div>

          <div className="hero__buttom__left__text w-fit">
          <h5>Finance</h5>
          <div className="badge">
            <h5>25</h5>
          </div>
            <p className='w-full lg:5/6 text-sm lg:text-xl text-whitecolor pt-2 lg:pt-8'>Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements.</p>

            <button className='text-base lg:text-xl p-2 lg:p-4 rounded-full text-whitecolor bg-btnbgcolor hover:bg-btnbghovercolor font-semibold mt-2 lg:mt-8 ' >Learn More</button>
          </div>

            <div className="hero__buttom__left__layer__icon absolute top-[80%] lg:top-3/4 left-8 items-center">
              <h5 className='text-whitecolor text-base lg:text-2xl font-normal'>Share:</h5>
              <div className="socials rounded-full p-1 lg:p-4 ">
              <Icon icon="mdi:twitter" className='text-f1 text-whitecolor lg:text-2xl' />
              </div> 
              <div className="socials rounded-full p-1 lg:p-4 ">
              <Icon icon="ic:baseline-facebook"  className='text-f1 text-whitecolor lg:text-2xl' />
              </div>
              <div className="socials rounded-full p-1 lg:p-4 ">
              <Icon icon="mdi:pinterest" className='text-f1 text-whitecolor lg:text-2xl' />
              </div>              
              <Icon icon="ic:outline-bookmark-border" className='bookmark absolute  text-xl text-whitecolor lg:text-3xl' />
            </div>

        </div>
         </div>
      </div>
    </div>
  )
}

export default Hero