import React from 'react';
import { Link } from 'react-router-dom';
import './CabinAdd.css';

const CabinAdd = ({onclick}) => {
    return (
        <>

    <div className="card cabin-card" style={{width : "200px"}}>
           <div className="card-header cabin-header">
             <span><h5>Cabin 0001</h5></span>
             <span className='dropdown-toggle btn' id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis-vertical"></i></span>
           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><Link className="dropdown-item" to="#">Edit</Link></li>
        <li><Link className="dropdown-item" to="#">Delete</Link></li>
      
      </ul>
           </div>
    
           <div className="card-body cabin-content cabin-add-content">
              <button onClick={onclick}  ><span><i className="fa-solid fa-plus"></i></span> Add Specifications</button>
           </div>
        </div>
      
        </>
      )
    }

export default CabinAdd