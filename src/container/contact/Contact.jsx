import React from 'react'
import './contact.css'
import MapComponent from '../../component/mapcomponent/MapComponent'

const Contact = () => {
  return (
    <div className="contact section__padding bg-sectioncolor " id='contact'>
      <div className="contact__header">
        <h1 className='text-4xl font-semibold lg:text-6xl'>Get in touch</h1>
      </div>
      <div className="contact__container flex flex-col lg:flex-row">
        <div className="contact__content map" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.002018351348!2d4.501093374543339!3d7.789609292230303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787c0698166b5%3A0xdd7a00eb58713bf8!2sANETTCOM%20TECHNOLOGIES!5e0!3m2!1sen!2sng!4v1721137752030!5m2!1sen!2sng" width="100%" height="300" style={{borderRadius: "20px" ,border: "0"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
        <div className="contact__content ">
          <h5>Head office </h5>
         <p> Bay St &, Larkin St, San Francisco, CA 94109, United States</p>
         <hr />
         <p>Phone <span>305-240-9671</span> </p>
         <p>Email <span>info@company.com</span> </p>

        </div>

        <div className="contact__content">
          <h5>Dubai office  </h5>
         <p> Burj Park, Downtown Dubai, United Arab Emirates</p>
         <hr />
         <p>Phone <span> 110-220-3400</span> </p>
         <p>Email <span>info@company.com</span> </p>

        </div>
      </div>

    </div>
  )
}

export default Contact