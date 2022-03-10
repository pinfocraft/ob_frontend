import React, { useState } from 'react';
import './OffcanvasRight.css';
import Button from '../Button/Button';

const OffcanvasRight = ({onClick}) => {
   const [hide, setHide] = useState(true);
  return (
    <>
    {hide && 
      <section className="offcanvasRight-section">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-6">
                <div className="offcanvasRight-heading">
                  <p>Main Area</p>
                  <h3>Cabin 01</h3>
                </div>
              </div>
              <div className="col-6">
                <div className="offcanvasRight-close">
                  <button onClick={onClick}><i className="fa-solid fa-xmark"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="offcanvasRight-content">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="canvas-input-group">
                <label htmlFor="cars">Space</label>
                <select name="cars" id="cars">
                  <option value="" disabled>Please Select the Space</option>
                  <option value="saab">MD Cabin</option>
                  <option value="opel">Conference Room</option>
                  <option value="audi">MD Cabin</option>
                  <option value="audi">Cafeteria</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-6">
                  <div className="canvas-input-group">
                    <label htmlFor="cars">Qty</label>
                    <select name="cars" id="cars">
                      <option disabled>Please Enter the Qty.</option>
                      <option value="">Saab</option>
                      <option value="">Opel</option>
                      <option value="">Audi</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="canvas-input-group">
                    <label htmlFor="cars">Typology</label>
                    <select name="cars" id="cars">
                      <option value="">Please Enter the Qty.</option>
                      <option value="">Saab</option>
                      <option value="">Opel</option>
                      <option value="">Audi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-6">
                  <div className="canvas-input-group">
                    <div>
                      <label htmlFor="">Size</label>
                    </div>

                    <div className='canvas-inputs'>
                      <input type="text" />
                      <input type="text" />
                      <input type="text" />

                    </div>

                  </div>
                </div>
                <div className="col-6">
                  <div className="canvas-input-group">
                    <label htmlFor="cars">Shape/Size</label>
                    <select name="cars" id="cars">
                      <option value="" disabled>Please Enter the Qty.</option>
                      <option value="">Saab</option>
                      <option value="">Opel</option>
                      <option value="">Audi</option>
                    </select>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-6">
                  <div className="canvas-input-group">
                    <label htmlFor="cars">Area (Sq. Ft.)</label>
                    <select name="cars" id="cars">
                      <option value="" disabled>Area (Sq. Ft.)</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>

                <div className="col-6"></div>

              </div>
            </div>
          </div>

        </div>

        <div className="offcanvasRight-footer">
          <div className="canvasFooter-button">
            <Button buttonInnerText="Submit" />
          </div>
        </div>
      </section>
}
    </>
  )
}

export default OffcanvasRight