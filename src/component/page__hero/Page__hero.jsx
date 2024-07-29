import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'


const Page__hero = ({main, page, title, image, btntext }) => {
  return (
    <div className="page__hero section__padding flex flex-col gap-6 lg:gap-0 lg:flex-row linear__bg ">
    <div className="right">
    <ul className='flex '>
            <li className='text-textblue text-base lg:text-xl hover:text-neutral-50'>{main}</li>
            <span className='px-2 lg:px-3 text-white'>/</span>
            <li className='text-base lg:text-xl text-whitecolor'>{page}</li>
        </ul>
        <h2 className='text-4xl lg:text-6xl font-medium pt-3 text-white '>{title}</h2>
          <div className="container flex items-center gap-8 mt-12">
            <button className='page_btn rounded-full bg-transparent py-3 px-6 text-base border-btnbgcolor border-1 border-2 font-medium text-btnbghovercolor hover:bg-btnbgcolor hover:text-whitecolor'>{btntext}</button>
            <Icon icon="ic:outline-bookmark-border" className='page_i text-4xl text-whitecolor hover:text-btnbgcolor transition' />
          </div>
    </div>
      <div className="left">
        <img src={image} alt="" className='rounded-2xl max-w-full' />
      </div>

    </div>
  )
}

export default Page__hero