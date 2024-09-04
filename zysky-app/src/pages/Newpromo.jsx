import React from 'react';
import "../App.css"; // Import the CSS for styling
import { Outlet, Link } from "react-router-dom";

const Newpromo = () => {
    return (
        <div>
            <div className='bg-yelloish-green'>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                        <div className="col text-left"><h4>Add New Promo</h4>
                            <p>Add new promo that you want to offer in the app.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="content-container-no-radious text-center">
            <div className="row row-cols-1   row-cols-md-4 m-b-20">
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="PromoName" placeholder="Promo Name" />
                            <label for="PromoName">Promo Name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating customselect">
                            <select clasclassNames="form-select" id="PromoType" aria-label="Promo Type">
                                <option value="1">Promo Type</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="PromoType" className='fl-select-label sr-only'>Promo Type</label>
                        </div>

                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
                {/* fieldset */}
                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
            <div className="col col-lg-7">
            <div className='fieldset m-b-30'>
                    <div className='legend'>Details</div>
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-12 col-md-auto">
                            <div className="mb-3">
  <label for="Description" className="form-label sr-only">Description</label>
  <textarea className="form-control" id="Description" rows="3" placeholder='Description'>Description</textarea>
</div>
<div className="row">
<div className='col-lg-2 col-md-auto'>
<div className="form-floating">
    <input type="text" className="form-control max-w-115" id="Points" placeholder="Points" />
    <label for="Points">Points</label>
</div>
</div>
<div className='col-lg-10 col-md-auto newpromo-txt'>Price of the Promo in Points. Use when you want to offer a Promo that will give 100% discount and can be exchanged for points. Zero means, no price. </div>
</div>
{/* */}
<div className="row">
<div className='col-lg-2 col-md-auto'>
<div className="form-floating">
    <input type="text" className="form-control max-w-115" id="Discount" placeholder="Discount" />
    <label for="Discount">Discount</label>
</div>
</div>
<div className='col-lg-10 col-md-auto newpromo-txt'>Discount that you give to your Clients. For example 10, means there will be 10% of a discount.</div>
</div>
{/* */}
<div className="row">
<div className='col-lg-2 col-md-auto'>
<div className="form-floating">
    <input type="text" className="form-control max-w-115" id="Gain" placeholder="Gain" />
    <label for="Gain">Gain</label>
</div>
</div>
<div className='col-lg-10 col-md-auto newpromo-txt'>How much in PLN a Client can get when using this Promo. Example: 10-50 means a Client can get 10zł to 50zł discount for the product.</div>
</div>
{/* */}
<div className='empty-placeholder'>
<span class="black-label"><span>Keyword1</span><i className='icon-close'></i></span>
<span class="black-label"><span>Keyword2</span><i className='icon-close'></i></span>
<span class="black-label"><span>Keyword3</span><i className='icon-close'></i></span>
<span class="black-label"><span>Keyword4</span><i className='icon-close'></i></span>
</div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                {/* */}
            </div>
            <div className="col col-lg-5">
            <div className='fieldset m-b-30'>
                    <div className='legend'>Details</div>
                    <div className="container justify-content-md-center">
                    <input type="" className='drop-logo m-b-20 min-h-110 text-center' 
  placeholder='Drop IMAGE (format: *.jpg, *.png, size: 425x248)'/>
                    </div>
                </div>
                {/* */}
                <div className='fieldset m-b-30'>
                    <div className='legend'>Status</div>
                    <div className="container justify-content-md-center">
                    <div className="col">
                        <div className='row m-b-20'>
                            <div className='col-lg-10'>
                                <div className='form-group'>
                            <div className="form-check m-t-10 ">
                                <input className="form-check-input" type="checkbox" value="" id="Active" />
                                <label className="form-check-label checkbox-fl" for="Active">
                                <span>Active</span>
                                </label>
                            </div>
                            </div>
                            <div className="form-floating customselect m-t-20">
                            <select clasclassNames="form-select" id="Activefrom" aria-label="Active from">
                                <option value="1">Active from</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="Activefrom" className='fl-select-label sr-only'>Active from</label>
                        </div>
                        <div className="form-floating customselect m-t-20">
                            <select clasclassNames="form-select" id="Activeto" aria-label="Active to">
                                <option value="1">Active to</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="Activeto" className='fl-select-label sr-only'>Active to</label>
                        </div>
                        <div>
                        <div className="form-check m-t-10 fl">
                                <input className="form-check-input" type="checkbox" value="" id="Monday" />
                                <label className="form-check-label checkbox-fl" for="Monday">
                                <span>Monday</span>
                                </label>
                            </div>
                            <div className="form-check m-t-10 fl">
                                <input className="form-check-input" type="checkbox" value="" id="Tuesday" />
                                <label className="form-check-label checkbox-fl" for="Tuesday">
                                <span>Tuesday</span>
                                </label>
                            </div>
                            <div className="form-check m-t-10 fl">
                                <input className="form-check-input" type="checkbox" value="" id="Wednesday" />
                                <label className="form-check-label checkbox-fl" for="Wednesday">
                                <span>Wednesday</span>
                                </label>
                            </div>
                            <div className="form-check m-t-10 fl">
                                <input className="form-check-input" type="checkbox" value="" id="Thursday" />
                                <label className="form-check-label checkbox-fl" for="Thursday">
                                <span>Thursday</span>
                                </label>
                            </div>
                            <div className="form-check m-t-10 fl">
                                <input className="form-check-input" type="checkbox" value="" id="Friday" />
                                <label className="form-check-label checkbox-fl" for="Friday">
                                <span>Friday</span>
                                </label>
                            </div>
                            <div className="form-check m-t-10 fl">
                                <input className="form-check-input" type="checkbox" value="" id="Saturday" />
                                <label className="form-check-label checkbox-fl" for="Saturday">
                                <span>Saturday</span>
                                </label>
                            </div>
                            <div className="form-check m-t-10 fl">
                                <input className="form-check-input" type="checkbox" value="" id="Sunday" />
                                <label className="form-check-label checkbox-fl" for="Sunday">
                                <span>Sunday</span>
                                </label>
                            </div>
                        </div>
                            </div>
                            <div className='col-lg-2'> </div>
                        </div>
                      </div>
                    </div>
                </div>
                
            </div>
                    </div>
                
                {/* Add */}
                <div className='fr text-right'><Link to="/home"><button type="button" className="btn btn-success m-l-15 min-w-140">Add</button></Link></div>
            </div>
           
        </div>

    );
};

export default Newpromo;