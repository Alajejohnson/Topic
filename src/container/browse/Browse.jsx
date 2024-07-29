import React from 'react'
import './browse.css'
// import Design, { Marketing, Finance, Music, Education } from './card'
import { useState } from 'react'
import { Design, Education, Finance, Marketing, Music } from '../../component';

const Browse = () => {
  const [selectedTopic, setSelectedTopic] = useState('Design');
  
  return (
    <div className="browse section__padding" id='browse'>
       <div className="browse__header text-3xl font-semibold lg:text-6xl  ">
       <h5>Browse Topics</h5>
       </div>
       <div className="tab__links flex flex-wrap gap-4 lg:gap-8 mt-8  w-full">
          <div className="tab__link">
          <button onClick={() => setSelectedTopic('Design')}>Design</button>
            </div>
          <div className="tab__link"><button onClick={() => setSelectedTopic('Marketing')} >Marketing</button>
         </div>
          <div className="tab__link"><button  onClick={() => setSelectedTopic('Finance')}>Finance</button></div>
          <div className="tab__link"><button onClick={() => setSelectedTopic('Music')}>Music</button></div>
          <div className="tab__link"><button onClick={() => setSelectedTopic('Education')}>Education</button></div>
       </div>
        
       <div className="tab__contents ">
        {selectedTopic === 'Design' && <Design />}
        {selectedTopic === 'Marketing' && <Marketing />}
        {selectedTopic === 'Finance' && <Finance />}
        {selectedTopic === 'Music' && <Music />}
        {selectedTopic === 'Education' && <Education />}

        
      </div>

  
    </div>
  )
}

export default Browse