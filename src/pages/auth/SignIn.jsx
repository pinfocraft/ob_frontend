import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import './SignIn.css';
import BrandLogo from '../../assets/image/OB-Logo-Black-1.png';
import BackgroundImg from '../../assets/image/signIn-background.png';
import { Link, useHistory } from 'react-router-dom';

const SignIn = () => {
    const { t } = useTranslation();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmitSuccess = (result) => {

        result.json().then(
            (payload) => {
                console.log(payload);
                if (payload?.id) {
                    localStorage.setItem("idd", payload.id);
                    localStorage.setItem("token", payload.accessToken);
                    localStorage.setItem("workflow", payload.workflow);
                    history.push('/Dashboard');
                } else {
                    console.log("result", result);
                }
            },
            (err) => {
                result.text().then((text) => {
                    var arr, reason = t('LoginBomb', 'There was an error logging in on the server. No more information is available.');
                    arr = /<\/h1>([\s\S]+)<\/article>/m.exec(text);
                    if (arr && (arr.length > 1)) {
                        reason = arr[1];
                    } else {
                        arr = /<title>([\s\S]+)<\/title>/m.exec(text);
                        if (arr && (arr.length > 1)) {
                            reason = arr[1];
                        }
                    }
                    alert(reason);
                })
            }
        );
    };

    const onSubmitFailure = (result) => {
        console.log('Bad username or password');
    };

    const onNetworkSuccess = (result) => {
        if (result.ok) {
            onSubmitSuccess(result);
        } else {
            onSubmitFailure(result);
        }
    };

    const onNetworkFailure = (err) => {
        console.log('Could not make a network connection');
    };

    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:8080/api/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)
        }).then(
            onNetworkSuccess,
            onNetworkFailure
        );
    };

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
                                            <h2>Sign-In</h2>
                                            <p>Access OB using your email and passcode.</p>
                                        </div>
                                        <form className="Login" onSubmit={handleSubmit(onSubmit)}>
                                            <div className="signin-card-form">
                                                <div className="input-group">
                                                    <label htmlFor="userName">Email or Username</label>
                                                    <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" {...register('username', { required: true })} />
                                                    {errors?.username && <p>This field is required.</p>}
                                                </div>

                                                <div className="input-group">
                                                    <div>
                                                        <label htmlFor="paswword">Password</label>
                                                        <span><Link to="forgot-password">Forgot Code?</Link></span>
                                                    </div>
                                                    <input type="password" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" {...register('password', { required: true })} />
                                                    {errors?.password && <p>This field is required.</p>}
                                                </div>

                                                <div className="button-group">
                                                    <Button type="submit" buttonWidth="100%" buttonInnerText="SIGN IN" aria-label="Recipient's sign button" aria-describedby="User will sign in after click this button" />
                                                </div>
                                            </div>
                                        </form>
                                        {/*<div className="signin-card-footer">
                                            <p>New on our platform? <Link to="">Create an account</Link></p>
                                            <div className='below-footer'>
                                                <h5 className='or-footer'>OR</h5>
                                                <p>Contact Office Banao System Admin</p>
                                            </div>
                                        </div>*/}
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
                        {/*<img src={BackgroundImg} alt="" className='img-fluid' />*/}
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
};

export default SignIn;
