import React from 'react';
import IncDecBtn from '../IncDecBtn/IncDecBtn';
import './SideBar.css';


const SideBar = () => {
    return (
        <>
            <section className="sidebar-section">
                <div className="sidebar-content">
                    <div className="sidebar-heading">BOQ BUILDER</div>


                    <div className="sidebar-accordion">
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <span><i className="fa-solid fa-anchor"></i>Main Areas </span> <span><i className="fa-solid fa-angle-down"></i></span> 
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                            Cabins
                                                        </label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <IncDecBtn />
                                                </div>
                                            </li>


                                            <li>
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Workstations
                                                        </label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <IncDecBtn />
                                                </div>
                                            </li>


                                            <li>
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Conference Roo..
                                                        </label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <IncDecBtn />
                                                </div>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                       <span><i className="fa-solid fa-anchor"></i>Wet Areas</span> <span><i className="fa-solid fa-angle-down"></i></span> 
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        <ul>
                                         
                                        <li>
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Washrooms
                                                        </label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <IncDecBtn />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                      <span><span><i className="fa-solid fa-anchor"></i></span> Recreational Areas </span> <span><i className="fa-solid fa-angle-down"></i></span> 
                                    </button> 
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>
                                                <div>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                        Recreational Space
                                                        </label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <IncDecBtn />
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SideBar