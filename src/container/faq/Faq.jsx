import React, { useState } from 'react';
import './faq.css';
import faq__data from './faq__card';
import { Faq_graphics } from '../../asset'
import { Icon } from '@iconify/react/dist/iconify.js';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item max-w-[400px] md:max-w-[500px] lg:w-[400px] ">
      <div className="faq-question  relative hover:text-textblue hover:bg-[var(--accordion-active-bg)] hover:p-[10px] hover:rounded-3xl hover:items-center " onClick={toggleOpen}  >
        <strong>{question} </strong> 
        <Icon icon="quill:inline-down" className='absolute top-0 left-[90%] lg:left-80'  />
      </div>
      {isOpen && <div className="faq-answer w- ">{answer}</div>}
    </div>
  );
};

const Faq = () => {
 console.log(faq__data);
  return (
    <div className="faq section__padding " id='faq'>
     
        <div className=" flex lg:flex-row flex-col gap-10 lg:gap-20  items-center justify-center w-fit ">
        <div className="faq__right w-10/12 lg:w-6/12 relative">
          <img src={Faq_graphics} alt="" className='w-fit' />
      </div>
        <div className="faq__left relative">
        <div className="faq__container flex flex-col justify-center w-fit ">
      {faq__data.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
        </div>
        </div>

      </div>


  );
};

export default Faq;
