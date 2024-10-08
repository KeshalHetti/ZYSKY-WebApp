import React from 'react';
import "../App.css"; // Import the CSS for styling
import { Outlet, Link } from "react-router-dom";

const NewNotification = () => {
    return (
        <div>
            <div className='bg-yelloish-green'>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                        <div className="col text-left"><h4>Notifications</h4>
                            <p>Here is the list of your notifications and notification configuration. </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="content-container-no-radious text-center">
                {/* 1st Row */}
                <div className='fieldset m-b-30'>
                    <div className='legend'>Auto Push</div>
                    <div className="container justify-content-md-center">
                        <div className="row">
                            <div className="col-lg-4 col-md-auto">
                                <div className="form-check">
                                    <input className="form-check-input fl " type="checkbox" value="" id="Sendnotifications" disabled />
                                    <div className='fl txt-with-small-number'>Send notifications to my clients</div>
                                </div>
                                <div className='row'>
                                    <div class="form-group fl  ">
                                        <input type="text" className="form-control max-w-50 m-t--25 myclients" id="days" placeholder="" />
                                        <label for="days" className='sr-only'>Days</label>
                                    </div>
                                </div>
                                <div className='row fl txt-with-small-number m-b-8'>days after the transaction,</div>
                                {/* */}
                                <div className='row'>
                                    <div className='fl'></div><div className='fl txt-with-small-number'>offering the following promo:</div>
                                </div>
                                <div className="form-floating customselect">
                                    <select clasclassNames="form-select" id="One-time-Promo" aria-label="Floating label select example">
                                        <option value="1">One-time Promo</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="One-time-Promo" className='fl-select-label sr-only'>One-time Promo</label>
                                </div>

                            </div>
                            <div className="col-lg-2  col-md-auto"></div>
                            <div className="col-lg-6  col-md-auto">
                                <p className='text-left'>Message Preview</p>
                                <div className='shadow-box text-left black'>
                                    Hej, dziękujemy za wizytę u nas. Wpadnij do nas ponownie, a otrzymasz fajną promkę na &lt;Promo_Name&gt; Zapraszamy, &lt; Partner_Name &gt;
                                </div>
                            </div>
                            {/* Add */}
                            <div className='fr text-right'><Link to="/home"><button type="button" className="btn btn-success m-l-15 min-w-80">Save</button></Link></div>
                        </div>


                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className='w-15pc'><span>Date </span><div className="vl">&nbsp;</div></th>
                            <th scope="col" className='w-30pc'><span>Promo </span><div className="vl">&nbsp;</div></th>
                            <th scope="col"><span>Message </span><div className="vl">&nbsp;</div></th>
                            <th scope="col" className='w-15pc'><span>Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>17-11-2024</td>
                            <td>Promo 1 Name</td>
                            <td>Message 1</td>
                            <td className='text-right'>
                                <div className='grid-buttons'>
                                    <Link to="/signup"><button type="button" className="btn btn-success min-w-80">Edit</button></Link>
                                    <Link to="/signup"><button type="button" className="btn btn-danger m-l-15 min-w-80">Delete</button></Link>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>15-08-2024<br></br>
                                <span className='black-label'>Sent</span>
                            </td>
                            <td>Promo 2 Name</td>
                            <td>Message 2</td>
                            <td className='text-right'>
                                <div className='grid-buttons'>
                                    <Link to="/signup"><button type="button" className="btn btn-success min-w-80">Reuse</button></Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* Add Manual Notification */}
                <div className='fr text-right'><Link to="/newnotifications"><button type="button" className="btn btn-success m-l-15 min-w-80">Add&nbsp;Manual&nbsp;Notification</button></Link></div>
            </div>

        </div>

    );
};

export default NewNotification;