import React from 'react';
import './OfficeAreaCal.css';


const OfficeAreaCal = () => {
  return (
    <>
<section className='officeAreaCal-section'>
    <div className="row">
        <div className="col-12">
          <div className="officeAreaCal-wrapper">
              <h3>Please mention the office area in Sq. Ft. & Height in mm</h3>
              <div className="officeAreaCal-inputs">
              <div className="input-group mb-4">
  <input type="text" placeholder='Office Area' />
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">SQ. FT.</button>
</div>

<div className="input-group mb-4">
  <input type="text" placeholder='Office Height' />
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">MM</button>
</div>


              </div>
          </div>
        </div>
    </div>
</section>
    </>
  )
}

export default OfficeAreaCal