import React from 'react';
import './MainContentHeader.css' 

const MainContentHeader = () => {
  return (
    <>
   <section className='MainContentHeader-section'>
     <h2 className='MainContentHeader-heading'>BOQ Builder</h2>
     <p className='MainContentHeader-para'>Create Bill of Quantities for your Customer</p>
     <div className='MainContentHeader-ids'>
       <span>Lead ID: OB83893</span>
        <span>Customer ID: #C1002</span>
     </div>
   </section>
    </>
  )
}

export default MainContentHeader