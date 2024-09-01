import React from 'react';
import { Outlet, Link } from "react-router-dom";
import samplelogo from '../assets/img/demo-logo 1.png';

const Locations = () => {
  return (
<div>
<div className='bg-yelloish-green'>
<div className="container text-center">
  <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
    <div className="col text-left col-lg-9"><h4>Locations</h4>
    <p>Here is the list of your current locations. You need at least one location in order to create a promo.</p>
    </div>
    
    <div className="col col-lg-3 text-right vertical-center flex-right"><Link to="/newlocation"><button type="submit" className="btn btn-transparent m-l-15 p-a-10 white">Add&nbsp;New&nbsp;Location </button></Link></div>
  </div>
</div>

</div>
    <div className='content-container-no-x-p'>
    <table class="table location">
  <thead >
    <tr>
      <th scope="col"><span>Logo </span><div className="vl">&nbsp;</div></th>
      <th scope="col"><span>Name </span><div className="vl">&nbsp;</div></th>
      <th scope="col"><span>Addess </span><div className="vl">&nbsp;</div></th>
      <th scope="col"><span>Actions</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row"><img src={samplelogo} alt="sample-Logo" className='smaple-logo'/></td>
      <td>Demo Location 1</td>
      <td>Demo Location 1 Address</td>
      <td className='text-right'>
        <div className='grid-buttons'>
        <Link to="/signup"><button type="button" className="btn btn-success min-w-80">Edit</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-danger m-l-15 min-w-80">Delete</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-warning m-l-15 min-w-80">Print QR</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-info m-l-15 min-w-80">Reset Pin</button></Link>
      </div>
      </td>
    </tr>
    <tr>
      <td scope="row"><img src={samplelogo} alt="sample-Logo" className='smaple-logo'/></td>
      <td>Demo Location 2</td>
      <td>Demo Location 2 Address</td>
      <td className='text-right'>
        <div className='grid-buttons'>
        <Link to="/signup"><button type="button" className="btn btn-success min-w-80">Edit</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-danger m-l-15 min-w-80">Delete</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-warning m-l-15 min-w-80">Print QR</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-info m-l-15 min-w-80">Reset Pin</button></Link>
      </div>
      </td>
    </tr>
  </tbody>
</table>


    </div>
    </div>

  );
};

export default Locations;