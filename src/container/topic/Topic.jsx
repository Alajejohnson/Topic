import React from 'react'
import './topic.css'
import { Page__hero } from '../../component'
import { Browse4, Browse6, Browse9, Hero__img, Topic1 } from '../../asset'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from 'react-router-dom'


const Topic = () => {
  return (
    <div className="topic ">
      <Page__hero main='Homepage' page='Topics Listing' title='Topics Listing' />

        <div className="public py-20">
            <h5 className=' text-4xl font-bold text-darkcolor pb-10 text-center'  >Popular Topics</h5>

            <div className='flex flex-col  justify-center items-center gap-16 '>
               
                <div className='flex flex-col lg:flex-row w-11/12 lg:w-8/12 shadow-lg justify-center rounded-2xl items-center py-10 px-4 hover:translate-y-[-14px] hover:transition-[1s]   '>
                   <div className='w-'>
                      <img src={Topic1} alt="" className='w-full' />
                   </div>
                   <div className='relative'>
                   <h5 className='text-darkcolor font-semibold text-3xl'>Web Design </h5>

            <div className=" w-fit bg-[var(--design)] absolute p-2 right-10 top-3/4 lg:top-6  rounded-lg ">
              <h5 className=' text-whitecolor font-semibold text-base'>14</h5>
            </div>

            <p className='text-pcolor text-xl pt-4 w-4/5' > Topic Listing includes home, listing, detail and contact pages. Feel free to modify this template for your custom websites.</p>

                  <button className='text-xl text-whitecolor bg-btnbgcolor hover:bg-btnbghovercolor rounded-full font-semibold mt-8 py-3 px-6' >Learn More </button>

                   </div>
                </div>

                <div className='flex flex-col lg:flex-row w-11/12 lg:w-8/12 shadow-lg justify-center rounded-2xl items-center py-10 px-4 hover:translate-y-[-14px] hover:transition-[1s] '>
                   <div className='w-'>
                      <img src={Browse4} alt="" className='w-full' />
                   </div>
                   <div className='relative'>
                   <h5 className='text-darkcolor font-semibold text-3xl'>Advertising </h5>
            <div className=" w-fit bg-[var(--marketing)] absolute p-2 right-10 top-3/4 lg:top-6 rounded-lg ">
              <h5 className=' text-whitecolor font-semibold text-base'>30</h5>
            </div>

            <p className='text-pcolor text-xl pt-4 w-4/5' > Visit TemplateMo website to download free CSS templates. Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus</p>

                  <button className='text-xl text-whitecolor bg-btnbgcolor hover:bg-btnbghovercolor rounded-full font-semibold mt-8 py-3 px-6' >Learn More </button>

                   </div>
                </div>


                <div className='flex flex-col lg:flex-row w-11/12 lg:w-8/12 shadow-lg justify-center rounded-2xl items-center py-10 px-4 hover:translate-y-[-14px] hover:transition-[1s]   '>
                   <div className='w-'>
                      <img src={Browse9} alt="" className='w-full' />
                   </div>
                   <div className='relative'>
                   <h5 className='text-darkcolor font-semibold text-3xl'>Podcast </h5>
            <div className=" w-fit bg-[var(--music)] absolute p-2 right-10 top-3/4 lg:top-6 rounded-lg ">
              <h5 className=' text-whitecolor font-semibold text-base'>20</h5>
            </div>

            <p className='text-pcolor text-xl pt-4 w-4/5' > Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus</p>

                  <button className='text-xl text-whitecolor bg-btnbgcolor hover:bg-btnbghovercolor rounded-full font-semibold mt-8 py-3 px-6' >Learn More </button>

                   </div>
                </div>

            </div>
        </div>



      <div className="trending bg-[var(--section-bg-color)] px-6 py-10 lg:px-24 lg:py-24">
      
        <h1 className='text-4xl lg:text-4xl font-semibold text-darkcolor pb-8'>Trending Topics</h1>

        <div className='flex gap-8 flex-col  lg:flex-row relative w-fit' >

          <div className="topic relative bg-whitecolor rounded-2xl w-full lg:w-6/12 px-6 py-6 flex-grow-0">
          <h5> <Link to='webdesign' className='text-darkcolor font-semibold text-2xl'>Investment </Link> </h5>
            <div className=" w-fit bg-[#536DFE] absolute p-2 right-10 top-6 rounded-lg ">
              <h5><Link to='webdesign' className=' text-whitecolor font-semibold text-lg' > 30</Link> </h5>
            </div>

            <p className='text-pcolor text-2xl pt-4' > Lorem Ipsum dolor sit amet consectetur</p>
            <img src={Browse6} alt="" className='w-9/12' />
          </div>
        

        <div className="hero__buttom__left w-fit ">
          <img src={Hero__img} alt="" />
          <div className="hero__buttom__left__layer">

          </div>

          <div className="hero__buttom__left__text w-fit">
          <h5>Finance</h5>
          <div className="badge  bg-[#536DFE]  left-[80%] md:left-[85%]" >
            <h5>25</h5>
          </div>
            <p className='w-full lg:5/6  text-sm md:text-xl lg:text-xl text-whitecolor pt-2 md:pt-8 lg:pt-8'>Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements.</p>

            <button className='text-sm md:text-xl lg:text-xl p-2 md:p-3 lg:p-4 rounded-full text-whitecolor bg-btnbgcolor hover:bg-btnbghovercolor font-semibold mt-2 md:mt-8 lg:mt-8' >Learn More</button>
          </div>

            <div className="hero__buttom__left__layer__icon absolute top-[80%]  lg:top-3/4 left-8 items-center">
              <h5 className='text-whitecolor text-base md:text-2xl  lg:text-2xl font-normal'>Share:</h5>
              <div className="socials rounded-full p-1 md:p-2 lg:p-4 ">
              <Icon icon="mdi:twitter" className='text-f1 text-whitecolor md:text-2xl lg:text-2xl' />
              </div> 
              <div className="socials rounded-full p-1 md:p-2 lg:p-4 ">
              <Icon icon="ic:baseline-facebook"  className='text-f1 text-whitecolor md:text-2xl lg:text-2xl' />
              </div>
              <div className="socials rounded-full p-1 md:p-2 lg:p-4 ">
              <Icon icon="mdi:pinterest" className='text-f1 text-whitecolor md:text-2xl lg:text-2xl' />
              </div>              
              <Icon icon="ic:outline-bookmark-border" className='bookmark absolute  text-xl md:text-3xl text-whitecolor lg:text-3xl' />
            </div>

        </div>

        </div>
      </div>
      
    </div>
  )
}

export default Topic