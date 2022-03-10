import React, { useState } from 'react';
import './Accordion.css';




const Accordion = () => {
    const [show, setShow] = useState(false);

    const AccordianCollapse = () => {

        setShow(!show);
    }

    return (
        <>
            <div className="accordian-wrapper">
                <div className="accordian-tab">
                    <div className="acc-tab-left">

                        <div className="acc-tab-left-delete">
                            <span><i className="fa-solid fa-trash-can"></i></span>
                        </div>

                        <div className="acc-tab-left-heading">
                            <h3>MD Cabin</h3>
                            <p>1 Pax + 3 Visitors, Conventional</p>
                        </div>

                        <div className="acc-tab-left-activity">
                            <button>Add Activity</button>
                        </div>

                    </div>


                    <div className="acc-tab-right">
                        <div className="acc-tab-right-size">

                            <div>
                                <label htmlFor="">Size</label>
                            </div>
                            <div>
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                            </div>


                        </div>

                        <div className="acc-tab-right-area">
                            <div>
                                <label htmlFor="">Area (sqf)</label>
                            </div>
                            <div>
                                <input type="text" />
                            </div>

                        </div>

                        <div className="acc-tab-right-toggle">
                            <button onClick={AccordianCollapse}><i className="fa-solid fa-angle-down"></i></button>
                        </div>

                    </div>
                </div>
                {show &&
                    <div className="accordian-content">
                        <div className="table-wrapper">
                            <div className="table-heading">
                                <h3>Flooring</h3>
                            </div>
                            <div className="table-content">

                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Scope Item</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Unit Rate</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Action</th>




                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='td-span'>
                                                <span>Carpet Installation</span>
                                                <span>5684236583</span>
                                            </td>
                                            <td>Lorem ipsum dolor sit amet, consectetur...</td>
                                            <td>5.2</td>
                                            <td>8X4X10</td>
                                            <td>243</td>
                                            <th>
                                                <span><i className="fa-solid fa-trash-can"></i></span>
                                            </th>

                                        </tr>
                                        <tr>
                                            <td className='td-span'>
                                                <span>Carpet Installation</span>
                                                <span>5684236583</span>
                                            </td>
                                            <td>Lorem ipsum dolor sit amet, consectetur...</td>
                                            <td>5.2</td>
                                            <td>8X4X10</td>
                                            <td>243</td>
                                            <th>
                                                <span><i className="fa-solid fa-crate-empty"></i></span>
                                                <span><i className="fa-solid fa-trash-can"></i></span>
                                            </th>

                                        </tr>
                                        <tr>
                                            <td className='td-span'>
                                                <span>Carpet Installation</span>
                                                <span>5684236583</span>
                                            </td>
                                            <td>Lorem ipsum dolor sit amet, consectetur...</td>
                                            <td>5.2</td>
                                            <td>@8X4X10</td>
                                            <td>243</td>
                                            <th>
                                                <span><i className="fa-solid fa-crate-empty"></i></span>
                                                <span><i className="fa-solid fa-trash-can"></i></span>
                                            </th>

                                        </tr>

                                        <tr>
                                            <td className='td-span'>
                                                <span>Carpet Installation</span>
                                                <span>5684236583</span>
                                            </td>
                                            <td>Lorem ipsum dolor sit amet, consectetur...</td>
                                            <td>5.2</td>
                                            <td>@8X4X10</td>
                                            <td>243</td>
                                            <th>
                                                <span><i className="fa-solid fa-crate-empty"></i></span>
                                                <span><i className="fa-solid fa-trash-can"></i></span>
                                            </th>

                                        </tr>


                                        <tr>
                                            <td className='td-span'>
                                                <span>Carpet Installation</span>
                                                <span>5684236583</span>
                                            </td>
                                            <td>Lorem ipsum dolor sit amet, consectetur...</td>
                                            <td>5.2</td>
                                            <td>@8X4X10</td>
                                            <td>243</td>
                                            <th>
                                                <span><i className="fa-solid fa-crate-empty"></i></span>
                                                <span><i className="fa-solid fa-trash-can"></i></span>
                                            </th>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>}

            </div>
        </>
    )
}

export default Accordion