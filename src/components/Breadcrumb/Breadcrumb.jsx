import React from 'react'
import './Breadcrumb.css';
import { Link } from 'react-router-dom';

const Breadcrumb = ({PageName}) => {
  return (
  <>
<nav aria-label="breadcrumb">
  <ol  className="breadcrumb">
    <li  className="breadcrumb-item"><Link to="Dashboard">Dashboard</Link></li>
    <li  className="breadcrumb-item active" aria-current="page">{PageName}</li>
  </ol>
</nav>
  </>
  )
}

export default Breadcrumb