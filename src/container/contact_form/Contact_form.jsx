import React, { useState } from 'react'
import { Page__hero } from '../../component'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Contact_form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');



  const handlesubmit = async(e) => {
    e.preventDefault();

    try{
      await addDoc(collection(db, 'users'),{
        name: name,
        email: email,
        subject: subject,
        message: message,
        createdAt: new Date()
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      alert('Message added successfully!');
    } catch(e) {
      console.error('Error adding document:', e);
        }

  };


  return (
    <div className="contact_form ">
       <Page__hero main='Homepage' page='Contact Form' title='Contact Form'  />
       <div className="contact-form-container section__padding bg-sectioncolor grid  lg:grid-flow-col  gap-8" >
        <div className="contact-form-right">
            <h5 className=' text-3xl lg:text-4xl text-darkcolor pb-8 font-medium'>We'd love to hear from you</h5>
            <form onSubmit={handlesubmit} action="" className='flex flex-col gap-6'>
                <div className="row flex flex-col lg:flex-row gap-8">
                    <div className="col">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}  name='name' placeholder='Name' className='text-pcolor text-xl placeholder:text-lg placeholder:text-darkcolor py-4 pl-6 rounded-full outline-none border   w-full  hover:border-btnbgcolor  hover:border-4 hover:transition-all  ' required />
                    </div>
                    <div className="col ">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Email address' required className='text-pcolor text-xl placeholder:text-lg placeholder:text-darkcolor py-4 pl-6 rounded-full outline-none w-full  border hover:border-btnbgcolor  hover:border-4 hover:transition-all ' />
                    </div>
                </div>

                <div className="form-col">
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} name='subject' placeholder='Subject' className='text-pcolor text-xl placeholder:text-lg placeholder:text-darkcolor py-4 pl-6 rounded-full outline-none w-full border hover:border-btnbgcolor hover:border-4 hover:transition-all' required />
                </div>
                  <div className="form-col">
                  <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Tell me about the project ' className='w-full outline-none p-7 rounded-3xl text-pcolor text-xl placeholder:text-lg placeholder:text-darkcolor border hover:border-btnbgcolor  hover:border-4 hover:transition-all'/>
                  </div>
                    <div className="form-col flex justify-end items-end">
                      <button type='submit'  className='rounded-full bg-btnbgcolor py-4 px-16 text-xl font-medium text-whitecolor hover:bg-btnbghovercolor '>Submit</button>
                    </div>
               

            </form>
        </div>
        <div className="contact-form-left">
        <div className="contact__content map" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.002018351348!2d4.501093374543339!3d7.789609292230303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787c0698166b5%3A0xdd7a00eb58713bf8!2sANETTCOM%20TECHNOLOGIES!5e0!3m2!1sen!2sng!4v1721137752030!5m2!1sen!2sng" width="100%" height="300" style={{borderRadius: "20px" ,border: "0"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="contact__form__left__text">
          <h5 className='text-darkcolor text-2xl lg:text-3xl font-medium pt-3'>Topic Listing Center </h5>
        <p className='text-xl lg:text-2xl text-pcolor pt-3'>  Bay St &, Larkin St, San Francisco, CA 94109, United States </p>
        </div>

        </div>
       </div>
    </div>
  )
}

export default Contact_form