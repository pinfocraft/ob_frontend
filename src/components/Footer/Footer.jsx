import React from 'react';
import Button from '../Button/Button';
import './Footer.css';


const Footer = () => {
  return (
    <>
     <section className="footer-section">
         <div className='footer-left-sec'>
    
         </div>

         <div className="footer-right-sec">
             <div style={{marginRight : "30px"}}>
             <Button buttonInnerText="Save As Draft"  buttonWidth="180px" buttonTextColor="#5855BC" buttonBackground="none" />
             </div>
           <Button buttonInnerText="Next"  buttonWidth="180px" buttonArrow={<> <i className="fa-solid fa-arrow-right"></i></>} />
         </div>


     </section>
    </>
  )
}

export default Footer