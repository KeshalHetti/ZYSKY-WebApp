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
                            <div className='notification-setting'>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="Send notifications" />
                                <div className='fl txt-with-small-number'>Send notifications to my clients</div>
                            </div>
                                <div className='col'>
                                    <div class="form-floating notifications">
                                        <input type="text" className="form-control" id="days" placeholder="days" />
                                        <div className='fl txt-with-small-number'>Send notifications to my clients</div>
                                        <label for="days">7</label>
                                    </div>
                                </div>
                                </div>
                                {/* 1 */}
                                <div className='smalll-number-group'>
                                <div className='fl'></div><div className='fl txt-with-small-number'>Provide a one-time promo to offer:</div>
                                </div>
                                <div className="form-floating customselect m-b-20">
                                    <select clasclassNames="form-select" id="MessageTemplate" aria-label="Floating label select example">
                                        <option value="1">One-time Promo</option>
                                    </select>
                                    <label for="One-time Promo">One-time Promo</label>
                                </div>
                            
                            </div>
                            <div className="col-lg-8  col-md-auto">
                                <p>Message Preview</p>
                                <div className='shadow-box'>
                                Hej, dziękujemy za wizytę u nas. Wpadnij do nas ponownie, a otrzymasz fajną promkę na &lt;Promo_Name&gt; Zapraszamy, &lt; Partner_Name &gt;
                                </div>
                            </div>
                            {/* Add */}
                            <div className='fr text-right'><Link to="/home"><button type="button" className="btn btn-success m-l-15">Save</button></Link></div>
                        </div>

                        
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Promo</th>
                        <th scope="col">Message</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>17-11-2024</td>
                        <td>Promo 1 Name</td>
                        <td>Message 1</td>
                        <td className='text-right'>
                            <div className='grid-buttons'>
                            <Link to="/signup"><button type="button" className="btn btn-success">Edit</button></Link>
                        <Link to="/signup"><button type="button" className="btn btn-danger m-l-15">Delete</button></Link>
                        </div>
                        </td>
                        </tr>
                        <tr>
                        <td>15-08-2024</td>
                        <td>Promo 2 Name</td>
                        <td>Message 2</td>
                        <td className='text-right'>
                            <div className='grid-buttons'>
                            <Link to="/signup"><button type="button" className="btn btn-success">Reuse</button></Link>
                        </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
                {/* Add Manual Notification */}
                <div className='fr text-right'><Link to="/newnotifications"><button type="button" className="btn btn-success m-l-15">Add Manual Notification</button></Link></div>
            </div>
           
        </div>

    );
};

export default NewNotification;