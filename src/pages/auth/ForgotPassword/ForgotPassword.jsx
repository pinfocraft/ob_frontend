import React from 'react';
import Button from '../../../components/Button/Button';
import '../SignIn.css';
import BrandLogo from '../../../assets/image/OB-Logo-Black-1.png';
import BackgroundImg from '../../../assets/image/signIn-background.png';
import { Link } from 'react-router-dom';

const  ForgotPassword = () => {
    return (
        <React.Fragment>
            <section className="signIn-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="sigin-page-logo">
                                <img src={BrandLogo} alt="brand-logo" title='brand-logo' className='img-fluid' />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="signin-card">
                                <div className="card signin-card-style">
                                    <div className="card-body">
                                        <div className="signin-card-header">
                                            <h2>Forgot Password</h2>
                                            <p>Please enter your registered email id to retreive your password</p>
                                        </div>
                                        <div className="signin-card-form">
                                            <div className="input-group">
                                                <label htmlFor="userName">Email or Username</label>
                                                <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            </div>

                                            {/* <div className="input-group">
                                                <div>
                                                    <label htmlFor="paswword">Password</label>
                                                    <span><a href="">Forgot Code?</a></span>
                                                </div>
                                                <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            </div> */}

                                            <div className="button-group">
                                                <Button
                                                    buttonWidth="100%"
                                                    buttonInnerText="FORGOT PASSWORD"
                                                />
                                            </div>
                                        </div>
                                        <div className="signin-card-footer">
                                        
                                            <div className='below-footer'>
                                                <h5 className='or-footer'>OR</h5>
                                                <p>Existing User on our platform?</p>
                                                <p>Please Click here <Link to="/signin">Sign In</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <p className='reserved-right'>© 2022 Office Banao. All Rights Reserved.</p>
                        </div>
                    </div>

                    <div className="signIn-background">
                        <img src={BackgroundImg} alt="" className='img-fluid' />
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
};

export default ForgotPassword;