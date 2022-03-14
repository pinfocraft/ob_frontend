import React from "react";
import AppSidebar from "../../components/AppSidebar/AppSidebar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MainContentHeader from "../../components/MainContentHeader/MainContentHeader";
import Topbar from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";

export default function BoqUserGroup() {

    return (
        <>
            <Topbar />
            <AppSidebar />
            <div className="mainContent">
                <div className="boq-listing-content">
                    <div className="row">
                        <div className="col-12">
                            <Breadcrumb />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <MainContentHeader
                                heading="Dashboard"
                                subHeading=""
                                leadId=" "
                                customerId=" "
                            />
                        </div>
                        {/*<div className="col align-items-center justify-content-end d-flex">
                            <Button
                                className="btn-small"
                                buttonInnerText="Create group"
                                buttonWidth="150px"
                                onClick={() => window.location.href = "/create-group"}
                            ></Button>
    </div>*/}
                    </div>
                    <div className="row" style={{ marginBottom: "100px" }}>
                        <div className="col-12">
                            <div className="card" style={{ height: "450px", textAlign: "center" }}>
                                <h1 style={{marginTop:"200px"}}>Coming soon...</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer  */}
            <div className="row">
                <div className="col-12">
                    {/*<Footer />*/}
                </div>
            </div>
        </>
    );
}
