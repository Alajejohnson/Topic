import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer py-12 px-10 lg:px-48 lg:py-20 grid grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div className="header__logo ">
            <Link to="/" >
            <Icon icon="tabler:box-multiple" className='text-4xl lg:text-5xl' />
              <h1 className='text-4xl'>Topic</h1>
              </Link>
            </div>

     
          <div className="footer__col  ">
              <div className="footer__header">
                  <h5>Resources</h5>
              </div>
              <ul>
                <li>Home</li>
                <li>How it works</li>
                <li>FAQs</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="footer__col">
              <div className="footer_header">
                <h5>
                Information <input  />
                </h5>
              </div>
              <ul>
                <li>305-240-9671</li>
                <li>info@company.com</li>
              </ul>
            </div>
            <div className="footer__col copyright">
              <div className="footer__header">
                  <button>English</button>
              </div>
                <h5>
              Copyright &copy; {year} Topic Listing Center. All rights reserved.
                </h5>
                <h5>Design: TemplateMo</h5>
            </div>



          
    </div>
  )
}

export default Footer