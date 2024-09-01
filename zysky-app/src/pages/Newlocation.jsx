import React from 'react';
import "../App.css"; // Import the CSS for styling
import logo from '../assets/img/zysky-splash-small 1@2x.png';
import { Outlet, Link } from "react-router-dom";

const Newlocation = () => {
    return (
        <div>
            <div className='bg-yelloish-green'>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                        <div className="col text-left"><h4>Add New Location</h4>
                            <p>Add a new location when you want to offer your promos.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="content-container-no-radious text-center">
                <div className="row row-cols-1   row-cols-md-4 m-b-20">
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="LocationName" placeholder="Location Name" />
                            <label for="LocationName">Location Name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating customselect">
                            <select clasclassNames="form-select" id="Category" aria-label="Floating label select example">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="Category" className='fl-select-label'>Category</label>
                        </div>

                    </div>
                    <div className="col">
                        <div className="form-floating customselect">
                            <select clasclassNames="form-select" id="SubCategory" aria-label="Floating label select example">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="SubCategory" className='fl-select-label'>Sub Category</label>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                {/* 2nd Row */}

                <div className='fieldset m-b-30'>
                    <div className='legend'>Address</div>
                    <div className="container justify-content-md-center">
                        <div className="row">
                            <div className="col-lg-8 col-md-auto">
                                Google Map
                            </div>
                            <div className="col-lg-4  col-md-auto">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="Street" placeholder="Street" />
                                    <label for="Street">Street</label>
                                </div>
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="City" placeholder="City" />
                                    <label for="City">City</label>
                                </div>
                                <div className="form-floating customselect m-b-15">
                                    <select clasclassNames="form-select" id="Powiat" aria-label="Floating label select example">
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="Powiat" className='fl-select-label'>Powiat</label>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div class="form-floating">
                                            <input type="text" className="form-control" id="Latitude" placeholder="Latitude" />
                                            <label for="Latitude">Latitude</label>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="Longitude" placeholder="Longitude" />
                                            <label for="Longitude">Longitude</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd Row */}
                <div className="row row-cols-1   row-cols-md-3 m-b-20">
                    <div className="col">
                        <div className='fieldset'>
                            <div className='legend'>Social Media</div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="StWebsiteeet" placeholder="Website (optional)" />
                                <label for="Website">Website (optional)</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="fb" placeholder="FB (optional)" />
                                <label for="fb">FB (optional)</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="IG" placeholder="IG (optional)" />
                                <label for="IG">IG (optional)</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="YT" placeholder="YT (optional)" />
                                <label for="YT">YT (optional)</label>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col">
                            <div className='fieldset'>
                                <div className='legend'>Images</div>
                                <input type="" className='drop-logo m-b-20' 
  placeholder='Drop LOGO (format: *.jpg, *.png, size: 200x200)'/>
<input type="" className='drop-logo m-b-20' 
  placeholder='Drop IMAGES (format: *.jpg, *.png, 15 files max)'/>
<input type="" className='drop-logo m-b-20' 
  placeholder='Drop PRICING (format: *.jpg, *.png, 10 files max)'/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className='row m-b-20'>
                            <div className='col-lg-8'>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="FastPartner" disabled />
                                <label className="form-check-label checkbox-fl" for="Fast Partner">
                                <span>Fast Partner</span>
                                </label>
                            </div>
                            </div>
                            <div className='col-lg-4'>
                            <input type="text" className="form-control text-center" id="FastPoints" placeholder="Fast Points" />
                            </div>
                        </div>
                        <p className='m-b-20'>Fast Partner is a busy location where Client is not being asked for amount during QR Scan. Client will get Fast Points for the transaction (they are based on an average transaction amount of the Partner).</p>
                        <h4>PIN</h4>
                        <p>Your PIN is only visible when you create a new location. You can reset the PIN anytime but you cannot show the PIN again once saved.</p>
                    </div>
                    
                </div>
                <div className='fr text-right'><Link to="/home"><button type="button" className="btn btn-success m-l-15">Add</button></Link></div>
            </div>
           
        </div>

    );
};

export default Newlocation;