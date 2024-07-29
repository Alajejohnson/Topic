import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './container/layout/Layout';

import { Browse, Contact, Contact_form, Faq, Footer, Header, Hero, Home, How, Pages, Topic, Webdesign } from './container';

const App = () => {
  return (
    <div className='app'>

        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index  element={<Home />} />
                <Route exact path='/#browse' element={<Browse />} />
                <Route path='how' element={<How />}  />
                <Route path='faq' element={<Faq />}  />
                <Route path='contact' element={<Contact />} />
                <Route path='webdesign' element={<Webdesign />} />
                  {/* <Route path='' element={<Pages />}> */}
                      <Route path='topic' element={<Topic />} />
                      <Route path='contact_form' element={<Contact_form />} />
                  {/* </Route> */}


            </Route>
        </Routes>
      </BrowserRouter>
             
    </div>
  )
}

export default App