import React from 'react'
import { Marketing } from '../../container/browse/card';
import { Link } from 'react-router-dom';

const marketing = () => {
    console.log(Marketing);
  return (
    <div>
                <div className="tab__content grid lg:grid-cols-3" id='marketing'>
        {Marketing.map(({heading, paragraph, badge__no, image}) => (
          <div className="tab__items">
            <h5><Link to='webdesign'>{heading} </Link> </h5>
            <div className="badge">
              <h5> <Link to='webdesign'> {badge__no}</Link> </h5>
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

export default marketing