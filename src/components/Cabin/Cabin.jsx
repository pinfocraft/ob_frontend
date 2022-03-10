import React from "react";
import "./Cabin.css";
import CarbinData from "../Cabin/CabinData";
import { Link } from "react-router-dom";

const Cabin = () => {
  return (
    <>
      {CarbinData.map((item,index) => {
        return (
          <>
            <div key={index} className="card cabin-card" style={{ width: "200px" }}>
              <div className="card-header cabin-header">
                <span>
                  <h5>Cabin 01</h5>
                </span>
                <span
                  className="dropdown-toggle btn"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="dropdown-item" to="#">
                      Edit
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Delete
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="card-body cabin-content">
                <ul className="cabin-styleList">
                  <li>
                    <span>Space</span>
                    <span>MD Cabin</span>
                  </li>

                  <li>
                    <span>Qty</span>
                    <span>2</span>
                  </li>

                  <li>
                    <span>Typology</span>
                    <span>1 pax + 2 visitor</span>
                  </li>

                  <li>
                    <span>Shape/size</span>
                    <span>Conventional</span>
                  </li>

                  <li>
                    <span>Size</span>
                    <span>20” / 12” / 10”</span>
                  </li>

                  <li>
                    <span>Total Area</span>
                    <span>480 Sq. Ft.</span>
                  </li>
                </ul>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Cabin;
