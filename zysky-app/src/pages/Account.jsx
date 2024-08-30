import React from 'react';
import "../App.css"; // Import the CSS for styling
import logo from '../assets/img/zysky-splash-small 1@2x.png';
import { Outlet, Link } from "react-router-dom";

const Account = () => {
    return (
        <div>
            <div className='bg-yelloish-green'>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                        <div className="col text-left"><h4>Account</h4>
                            <p>This is your account details and subscription.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="content-container-no-radious  ">
                <div className='fieldset m-b-30'>
                    <div className='legend'>Subscription</div>
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 m-b-30">
                                <div className='row'>
                                    <div className='fl display-contents'>Current Plan:</div><div className='fl display-contents'><span className='btn btn-red-outline btn-with-text'>Free</span></div>
                                </div>
                                <div className='row'>
                                    <div className='fl display-contents'>Expires: &nbsp;</div><div className='fl display-contents'>12-09-2025, 13:40:22</div>
                                </div>
                                <div className='row'>
                                    <p className='fl display-contents'>Plan Description</p>
                                </div>
                            </div>
                            <div className="col-md-auto col-lg-9 sm-p-l-r-0">
                                <div className="acc-row">
                                    <div className='fl  '><Link to="/home"><button type="button" className="btn btn-info btn-with-text sm-m-0 ">Upgrade to PROMOS</button></Link></div><div className='fl p-l-10'>PROMOS plan description</div>
                                </div> <br></br>
                                <div className="acc-row">
                                    <div className='fl  '><Link to="/home"><button type="button" className="btn btn-info btn-with-text sm-m-0 ">Upgrade to PROMOS</button></Link></div><div className='fl p-l-10'>PROMOS plan description</div>
                                </div>
                                <div className="acc-row">
                                    <div className='fl '><Link to="/home"><button type="button" className="btn btn-info btn-with-text sm-m-0 ">Upgrade to PROMOS</button></Link></div><div className='fl p-l-10'>PROMOS plan description</div>
                                </div>
                            </div>
                        </div></div>
                </div>
                {/* 2nd Row */}
                <div className="row row-cols-1   row-cols-md-2 m-b-20">
                    <div className="col col-lg-6 col-md-auto m-b-20">
                        <div className='fieldset'>
                            <div className='legend'>Account</div>
                            <div className='row'>
                                <div className='col-lg-10 col-md-auto'>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="StWebsFirstnameiteeet" placeholder="Firstname" />
                                        <label for="WebFirstnamesite">Firstname</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="Lastname" placeholder="Lastname" />
                                        <label for="Lastname">Lastname</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                        <label for="email">Your Email</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="confirmemail" placeholder="Confirm Your Email" />
                                        <label for="confirmemail">Confirm Your Email</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="Password" placeholder="Password" />
                                        <label for="Password">Password</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="password" className="form-control" id="ConfirmPassword" placeholder="Confirm Password" />
                                        <label for="ConfirmPassword">Confirm Password</label>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-auto'>
                                    <div className='fr text-right'><Link to="/home"><button type="button" className="btn btn-success m-l-15">Save</button></Link></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-auto ">
                        <div className='fieldset'>
                            <div className='legend'>Company</div>
                            <div className='row'>
                                <div className='col-lg-10 col-md-auto'>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="CompanyName" placeholder="Company Name" />
                                        <label for="CompanyName">Company Name</label>
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
                                        <input type="text" className="form-control" id="StreetNumber" placeholder="Street & Number" />
                                        <label for="StreetNumber">Street & Number</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="Phone" placeholder="Phone" />
                                        <label for="Phone">Phone</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="passwnumberord" className="form-control" id="nip" placeholder="NIP" />
                                        <label for="nip">NIP</label>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-auto'>
                                    <div className='fr text-right'><Link to="/home"><button type="button" className="btn btn-success m-l-15">Save</button></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Account;