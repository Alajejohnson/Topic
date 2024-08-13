import React from 'react'

const Nopage = () => {
  return (
    <div className='nopage bg-[var(--white-color)] dlex justify-center item-center flex-col center  '>

        <h5 className='text-4xl md:text-7xl text-[var(--dark-color)] font-bold relative after:bg-[var(--design)] after:h-[6px] after:w-[50%]  after:absolute after:top-full after:left-[30%]  after:mt-3  '>404</h5>
        <p className='pt-8 text-base md:text-2xl   '>Page Not Found</p>
    </div>
  )
}

export default Nopage