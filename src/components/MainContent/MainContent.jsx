import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import './MainContent.css';
import MainContentHeader from '../MainContentHeader/MainContentHeader'
import OfficeAreaCal from '../OfficeAreaCal/OfficeAreaCal';
import Cabin from '../Cabin/Cabin';
import Footer from '../Footer/Footer';
import Accordion from '../Accordion/Accordion';


const MainContent = () => {
  return (
    <>
      <section className='mainContent-section'>
        <Breadcrumb PageName="BOQ" />
        <MainContentHeader />

        <div className="card" style={{marginBottom : "80px"}}>
          <div className="card-body">
            <ul className="nav nav-tabs mb-3 nav-tabs-style" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#Requirement-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">01 <span>Requirement Input</span> </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-Specification" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">02 <span>Specification Input</span> </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-Output-Room" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">03 <span>BOQ Output-Room Wise</span> </button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-Output-Service" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">04 <span>BOQ Output-Service Wise</span> </button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-Review" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">05 <span>Review BOQ</span> </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="Requirement-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row">
                  <div className="col-12">
                    <OfficeAreaCal />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Requirement-acc-fisrt" aria-expanded="true" aria-controls="Requirement-acc-fisrt">
                            Main Area  <span> Cabin (5)</span>
                          </button>
                        </h2>
                        <div id="Requirement-acc-fisrt" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                          <div className="accordion-body">
                            <div className="row">
                              <div className="col-12">
                                <div className="requirement-cabin-wrapper">
                                  <Cabin />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-Specification" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row">
                  <div className="col-12">
                    <OfficeAreaCal />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#Requirement-acc-fisrt" aria-expanded="true" aria-controls="Requirement-acc-fisrt">
                            Main Area  <span> Cabin (5)</span>
                          </button>
                        </h2>
                        <div id="Requirement-acc-fisrt" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                          <div className="accordion-body">
                            <div className="row">
                              <div className="col-12">
                                {/* inner accordion start  */}
                                <Accordion />
                                <Accordion />
                                <Accordion />
                                {/* inner accordin end  */}
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-Output-Room" role="tabpanel" aria-labelledby="pills-contact-tab">
           
              </div>
              <div className="tab-pane fade" id="pills-Output-Service" role="tabpanel" aria-labelledby="pills-contact-tab">55</div>
              <div className="tab-pane fade" id="pills-Review" role="tabpanel" aria-labelledby="pills-contact-tab">66</div>

            </div>
          </div>
        </div>
        {/* footer  */}
        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </section>




    </>
  )
};

export default MainContent;
