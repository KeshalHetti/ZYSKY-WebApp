import React from 'react';
import "../App.css"; // Import the CSS for styling
import logo from '../assets/img/zysky-splash-small 1@2x.png';
import { Outlet, Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <div className="row m-t-15 gx-5">
                <div className="col-3">
                    &nbsp;
                </div>
                <div className="col-6">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="col-3">
                    &nbsp;
                </div>
            </div>

            <h2 className='p-b-40 outfit'>Partner Registration</h2>
            <form>
                <div className='fieldset'>
                    <div className='legend'>New Partner Account</div>
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Firstname" placeholder="Firstname" />
                                <label for="Firstname">Firstname</label>
                            </div>
                            <div className="form-floating m-b-20">
                                <input type="text" className="form-control" id="Lastname" placeholder="Lastname" />
                                <label for="Lastname">Lastname</label>
                            </div>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="Youremail" placeholder="Your Email" />
                                <label for="Youremail">Your Email</label>
                            </div>
                            <div className="form-floating m-b-20">
                                <input type="email" className="form-control" id="Confirmemail" placeholder="Confirm Your Email" />
                                <label for="Confirmemail">Confirm Your Email</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="Password" placeholder="Password" />
                                <label for="Password">Password</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="Confirmpassword" placeholder="Confirm Password" />
                                <label for="Confirmpassword">Confirm Password</label>
                            </div>

                        </div>
                        <div className="col-lg-2"></div>
                        <div className="col-lg-5 col-md-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Companyname" placeholder="Company Name" />
                                <label for="Companyname">Company Name</label>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div class="form-floating">
                                        <input type="text" className="form-control" id="Zip" placeholder="Zip" />
                                        <label for="Zip">Zip</label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="City" placeholder="City" />
                                        <label for="City">City</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Streetnumber" placeholder="Street & Number" />
                                <label for="Streetnumber">Street & Number</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="Phone" placeholder="Phone" />
                                <label for="Phone">Phone</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="NIP" placeholder="NIP" />
                                <label for="NIP">NIP</label>
                            </div>
                            <span className='fl text-left'>You must read and accept the following documents to continue</span>
                            <div className='fl'>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="PrivacyPolicy" />
                                <label className="form-check-label checkbox-fl" for="PrivacyPolicy">
                                <a href="#" className='link'>Privacy Policy</a>
                                </label>
                            </div>
                            <br></br>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label checkbox-fl" for="flexCheckDefault">
                                <a href="#" className='link'>Terms of Service</a>
                                </label>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="float-right p-t-30 m-r-60">
                <Link to="/home"><button type="button" className="btn btn-success ">Utwórz&nbsp;konto</button></Link>
            </div>
            </form>
        </div>
    );
};

export default SignUp;
