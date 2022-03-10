import React from 'react';
import './AppSidebar.css';
import BrandLogo from '../../assets/image/White-OB-Logo-Mark-1.png';
import { FaMicrosoft, FaMizuni, FaUsers} from "react-icons/fa";
import { Link } from 'react-router-dom';

const AppSidebar = () => {
 
  return (
      <>
      <section className="app-sidebar">
       <div className="app-sidebar-logo">
        <img src={BrandLogo} alt="brand-logo" title='brand-logo'  className='img-fluid' />
       </div>

       <div className="app-sidebar-menu">
         <ul>
           <li><Link to="/boq-listing"><FaMicrosoft  style={{fontSize :"22px"}}/></Link></li>
           <li><Link to="/create-boq"><FaMizuni style={{fontSize :"22px"}}/></Link></li>
           <li><Link to="/"><FaUsers style={{fontSize :"22px"}} /></Link></li>
           
         </ul>
       </div>
      </section>
      </>
  );
};

export default AppSidebar;
