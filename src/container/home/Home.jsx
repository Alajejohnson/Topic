import React from 'react'
import './home.css'
import Hero from '../hero/Hero'
import Browse from '../browse/Browse'
import How from '../how/How'
import Faq from '../faq/Faq'
import Contact from '../contact/Contact'
import Pages from '../pages/Pages'

const Home = () => {
  return (
        <div className="home">
              <Hero />
              <Browse />
              <How />
              <Faq />
              <Contact />
              <Pages />
        </div>
  )
}

export default Home