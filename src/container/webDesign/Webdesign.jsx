import React from 'react'
import { Page__hero } from '../../component'
import { Hero__img, Hero__img2, News, Webimg } from '../../asset'

const Webdesign = () => {
  return (
    <div>
        <Page__hero main='Homepage' page='Web Design' title='Introduction to
Web Design 101' image={Hero__img2} btntext='Read More'/>
        <div className="web__content flex flex-col gap-14 px-6 py-10 lg:px-64  lg:py-48">

        <div className="introduction ">
            <h5 className='text-darkcolor font-semibold text-4xl '>Introduction to Web Design </h5>
            <p className='text-pcolor text-2xl pt-8'> So how can you stand out, do something unique and interesting, build an online business, and get paid enough to change life. Please visit TemplateMo website to download free website templates.  </p>
            <p className='text-pcolor text-2xl pt-8'><span className='font-bold'>There are so many ways to make money online. </span> Below are several platforms you can use to find success. Keep in mind that there is no one path everyone can take. If that were the case, everyone would have a million dollars. </p>
        </div>

        <div className="freelancing bg-sectioncolor rounded-xl p-12 mx-4 ">
            <h5 className='text-darkcolor font-bold  text-3xl text-center'>Freelancing your skills isn’t going to make you a millionaire overnight.</h5>
        </div>

        <div className="people">
                <div className='flex flex-col lg:flex-row gap-8 '>
                    <img src={Hero__img} alt="" className='rounded-2xl min-w-72' />
                    <img src={Webimg} alt="" className='rounded-2xl min-w-72' />
                </div>
                <div>
                    <h5 className='text-pcolor text-xl pt-8'>Most people start with freelancing skills they already have as a side hustle to build up income. This extra cash can be used for a vacation, to boost up savings, investing, build business.</h5>
                </div>
        </div>

        </div>

        <div className="newsletter bg-sectioncolor grid lg:grid-flow-col gap-6  px-8 py-10 lg:px-52 lg:py-24">
                <img src={News} alt="" className='rounded-2xl w-11/12 lg:w-9/12  ' />
                <div className="form flex flex-col gap-10 justify-center lg:items-start">
                    <label htmlFor="" className='text-darkcolor font-semibold text-3xl  '>Get Newsletter</label>
                    <input type="email" name='email' placeholder='Email Address' required className='text-pcolor text-xl placeholder:text-lg placeholder:text-darkcolor py-3 pl-6 rounded-full outline-none border hover:border-btnbgcolor hover:transition-opacity hover:border-4 hover:transition-all w-96'  />
                    <button className='rounded-full bg-btnbgcolor py-4 w-96 text-xl font-medium text-whitecolor hover:bg-btnbghovercolor'>Subscribe</button>

                </div>
            </div>

    </div>
  )
}

export default Webdesign
