import React from 'react'
import Design from '../../container/browse/card'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const design = () => {
    console.log(Design);
  return (

    <div className="tab__content grid lg:grid-cols-3" id='design'>
            {Design.map(({heading, paragraph, badge__no, image}) => (
              <div className="tab__items">
                <h5>  <Link to='webdesign'>{heading}</Link>  </h5>
                <div className="badge">
                  <h5> <Link to='webdesign'>{badge__no}  </Link> </h5>
                </div>
    
                <p>{paragraph}</p>
                <img src={image} alt="" />
              </div>
            )
          )}
            </div>
          

  )
}

export default design