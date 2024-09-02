import React from 'react';
import "../App.css"; // Import the CSS for styling
import { Outlet, Link } from "react-router-dom";

const Transactions = () => {
    return (
        <div>
            <div className='bg-yelloish-green'>
                <div className="container text-center">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                        <div className="col text-left"><h4>Transactions</h4>
                            <p>Here is the list of your loyal client’s transactions.  </p>
                        </div>
                    </div>
                </div>
 
            </div>
            <div className="content-container-no-radious text-center">
            <table class="table">
                <thead>
                    <tr>
                            <th scope="col" className='w-15pc'><span>Date&Time </span><div className="vl">&nbsp;</div></th>
                            <th scope="col" className='w-30pc'><span>Client </span><div className="vl">&nbsp;</div></th>
                            <th scope="col"><span>Promo (if used) </span><div className="vl">&nbsp;</div></th>
                            <th scope="col" className='w-15pc'><span>Location</span><div className="vl">&nbsp;</div></th>
                            <th scope="col" className='w-15pc'><span>Amount (if provided)</span></th>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>2024-05-22 21:20:38</td>
                    <td>p****@k*******.pl</td>
                    <td>Promo 1 Name</td>
                    <td>Location 1</td>
                    <td>245</td>
                    </tr>
                    <tr>
                    <td>2024-05-22 20:10:10</td>
                    <td>d****@g****.com</td>
                    <td>Promo 2 Name</td>
                    <td>Location 2</td>
                    <td>45</td>
                    </tr>
                </tbody>
            </table>
            </div>
           
        </div>

    );
};

export default Transactions;