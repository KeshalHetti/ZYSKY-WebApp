import React from 'react';
import "../App.css"; // Import the CSS for styling
import { Outlet, Link } from "react-router-dom";

const Newpromo = () => {
    return (
        <div>
            <div className='bg-yelloish-green'>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                        <div className="col text-left"><h4>New Manual Notification</h4>
                            <p>Configure new notification to tell your Clients about your offer</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="content-container-no-radious text-center">
                {/* 1st Row */}
                <div className='fieldset m-b-30'>
                    <div className='legend'>Manual Push</div>
                    <div className="container justify-content-md-center">
                        <div className="row">
                            <div className="col-lg-4 col-md-auto">
                                {/* 1 */}
                                <div className='smalll-number-group'>
                                <div className='fl'><div className='number-small'>1</div></div><div className='fl txt-with-small-number'>Choose a message template</div>
                                </div>
                            <div className="form-floating customselect m-b-20">
                                    <select clasclassNames="form-select" id="MessageTemplate" aria-label="Floating label select example">
                                        <option value="1">Message Template</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="MessageTemplate" className='fl-select-label sr-only'>Message Template</label>
                                </div>
                                {/* 2 */}
                                <div className='smalll-number-group'>
                                <div className='fl'><div className='number-small'>2</div></div><div className='fl txt-with-small-number text-left'>Fill up required message parameters (optional)</div>
                                <div className='small-text text-left'>Watch the message preview if it looks OK before saving.</div>
                                </div>
                                <div className='row'>
                                <div className='col-lg-4 col-md-auto'>
                                    <div class="form-floating">
                                        <input type="text" className="form-control" id="Param_1" placeholder="Param_1" />
                                        <label for="Param_1">Param_1</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-auto'>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="Param_2" placeholder="Param_2" />
                                        <label for="Param_2">Param_2</label>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-auto'>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="Param_3" placeholder="Param_3" />
                                        <label for="Param_3">Param_3</label>
                                    </div>
                                </div>
                            </div>
                                {/* 3 */}
                                <div className='smalll-number-group'>
                                <div className='fl'><div className='number-small'>3</div></div><div className='fl txt-with-small-number'>Provide a one-time promo to offer</div>
                                <div className='small-text'>Always offer a nice Promo to attract your Clients</div>
                                </div>
                                <div className="form-floating customselect m-b-20">
                                    <select clasclassNames="form-select" id="MessageTemplate" aria-label="Floating label select example">
                                        <option value="1">One-time Promo</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="MessageTemplate" className='fl-select-label sr-only'>One-time Promo</label>
                                </div>
                                {/* 4*/}
                                <div className='smalll-number-group'>
                                <div className='fl'><div className='number-small'>4</div></div><div className='fl txt-with-small-number'>Choose a target group</div>
                                <div className='small-text'>To whom should we send your push notification</div>
                                </div>
                                <div className="form-floating customselect m-b-20">
                                    <select clasclassNames="form-select" id="TargetGroup" aria-label="Floating label select example">
                                        <option value="1">Target Group</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <label for="TargetGroup" className='fl-select-label sr-only'>Target Group</label>
                                </div>
                                {/* 5 */}
                                <div className='smalll-number-group'>
                                <div className='fl'><div className='number-small'>5</div></div><div className='fl txt-with-small-number'>When to send?</div>
                                </div>
                                <div className="form-floating">
                                <input type="date" className="form-control" id="YT" placeholder="YT (optional)" />
                                </div>
                            
                            </div>
                            <div className="col-lg-6  col-md-auto">
                                <p className='text-left'>Message Preview</p>
                                <div className='shadow-box black text-left'>
                                Hej, jutro jest Dzień Pizzy. Jeżeli tak jak my kochasz pizzę, to wpadnij do nas a otrzymasz Param_1 zniżki na każdą pizzę. Promka "Promo_Name" już czeka na Ciebie w aplikacji!
Zapraszamy, "Partner_Name"

                                </div>
                            </div>
                            <div className="col-lg-2  col-md-auto"></div>
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