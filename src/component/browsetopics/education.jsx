import React from 'react'
import { Education } from '../../container/browse/card';
import { Link } from 'react-router-dom';

const education = () => {
    console.log(Education);
  return (
    <div>
        <div className="tab__content content2 grid lg:grid-cols-2" id='education'>
        {Education.map(({heading, paragraph, badge__no, image}) => (
          <div className="tab__items">
            <h5><Link to='webdesign'> {heading}</Link> </h5>
            <div className="badge">
              <h5><Link to='webdesign'> {badge__no} </Link> </h5>
            </div>

            <p>{paragraph}</p>
            <img src={image} alt="" />
          </div>
        )
      )}
        </div>

    </div>
  )
}

export default education