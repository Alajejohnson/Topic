import React from 'react'
import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button className="dropdown__toggle   uppercase flex ">PAGE <Icon icon="quill:inline-down"  /></button>
        
      {isOpen && (
        <div className="dropdown__menu flex flex-col absolute  z-10 bg-white p-3 rounded text-black">
          {/* <a href="/topics-listing" className=' text-black' style={{color: "black"}}>Topics Listing</a>  */}
          <Link to="topic" className=' text-black' style={{color: "black"}}> Topics Listing</Link>
          {/* <a href="/contact-form" className=' text-gray-900' style={{color: "black"}}>Contact Form</a> */}
          <Link to="contact_form" className=' text-black' style={{color: "black"}}> Contact Form</Link>
        </div>
      )}
    </div>
  )
}

export default Dropdown