import React from 'react';
import './MainContentHeader.css' 

const MainContentHeader = (props) => {
  return (
    <>
   <section className='MainContentHeader-section'>
     <h2 className='MainContentHeader-heading'>{ props.heading && props.heading ||`BOQ Builder`}</h2>
     <p className='MainContentHeader-para'>{ props.subHeading && props.subHeading ||`Create Bill of Quantities for your Customer`}</p>
   
     <div className='MainContentHeader-ids'>
        {<span>{ props.leadId || `Lead ID: OB83893`}</span>}
        {<span>{props.customerId || `Customer ID: #C1002`}</span>}
     </div>
     
   </section>
    </>
  )
}

export default MainContentHeader