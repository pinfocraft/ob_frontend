import React, { useEffect, useState } from 'react';
import './AppSidebar.css';
import BrandLogo from '../../assets/image/White-OB-Logo-Mark-1.png';
import { FaMicrosoft, FaMizuni, FaUsers, FaObjectGroup } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AppSidebar = () => {
  const [flow, Setflow] = useState([]);
  const getSidebars = () => {
    const v = localStorage.getItem("workflow");
    if (v.length > 0) {
      return (<ul style={{listStyle:"none"}}>
        {v.includes(2) ? <li><Link to="/lead-listing"><FaMicrosoft style={{ fontSize: "22px" }} /></Link></li> : ""}
        {v.includes(3) ? <li><Link to="/userlist"><FaUsers style={{ fontSize: "22px" }} /></Link></li> : ""}
        {v.includes(1) ? <li><Link to="/boq-listing"><FaMizuni style={{ fontSize: "22px" }} /></Link></li> : ""}
        {v.includes(4) ? <li><Link to="/create-group"><FaObjectGroup style={{ fontSize: "22px" }} /></Link></li> : ""}
      </ul>
      )
    } else {
      return (
        <ul style={{listStyle:"none"}}>
          <li><Link to="/lead-listing"><FaMicrosoft style={{ fontSize: "22px" }} /></Link></li>
          <li><Link to="/userlist"><FaUsers style={{ fontSize: "22px" }} /></Link></li>
          <li><Link to="/boq-listing"><FaMizuni style={{ fontSize: "22px" }} /></Link></li>
          <li><Link to="/create-group"><FaObjectGroup style={{ fontSize: "22px" }} /></Link></li>
        </ul>
      )
    }
  }
  useEffect(() => {
    if (localStorage.getItem("workflow") !== null) {
      Setflow(localStorage.getItem("workflow"));
    }
  }, []);
  return (
    <>
      <section className="app-sidebar">
        <div className="app-sidebar-logo">
          <img src={BrandLogo} alt="brand-logo" title='brand-logo' className='img-fluid' />
        </div>

        <div className="app-sidebar-menu">
          {flow.length != null ? getSidebars() : ""}
        </div>
      </section>
    </>
  );
};

export default AppSidebar;
