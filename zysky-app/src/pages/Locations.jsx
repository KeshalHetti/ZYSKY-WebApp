import React from 'react';
import { Outlet, Link } from "react-router-dom";
import samplelogo from '../assets/img/demo-logo 1.png';

const Locations = () => {
  return (
<div>
<div className='bg-yelloish-green'>
<div className="container text-center">
  <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
    <div className="col text-left"><h4>Locations</h4>
    <p>Here is the list of your current locations. You need at least one location in order to create a promo.</p>
    </div>
    
    <div className="col text-right"><Link to="/"><button type="submit" className="btn btn-transparent m-l-15 p-a-10">Add&nbsp;New&nbsp;Location </button></Link></div>
  </div>
</div>

</div>
    <div className='content-container'>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Logo</th>
      <th scope="col">Name</th>
      <th scope="col">Addess</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src={samplelogo} alt="sample-Logo" className='smaple-logo'/></th>
      <td>Demo Location 1</td>
      <td>Demo Location 1 Address</td>
      <td className='text-right'>
        <div className='grid-buttons'>
        <Link to="/signup"><button type="button" className="btn btn-success">Edit</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-danger m-l-15">Delete</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-warning m-l-15">Print QR</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-info m-l-15">Reset Pin</button></Link>
      </div>
      </td>
    </tr>
    <tr>
      <th scope="row"><img src={samplelogo} alt="sample-Logo" className='smaple-logo'/></th>
      <td>Demo Location 2</td>
      <td>Demo Location 2 Address</td>
      <td className='text-right'>
        <div className='grid-buttons'>
        <Link to="/signup"><button type="button" className="btn btn-success">Edit</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-danger m-l-15">Delete</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-warning m-l-15">Print QR</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-info m-l-15">Reset Pin</button></Link>
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