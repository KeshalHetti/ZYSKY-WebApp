import React from 'react';
import { Outlet, Link } from "react-router-dom";
import promo1 from '../assets/img/beauty-look-promo-1.png';
import promo2 from '../assets/img/beauty-look-promo-2.png';

const Promos = () => {
  return (
<div>
<div className='bg-yelloish-green'>
<div className="container text-center">
  <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
    <div className="col text-left"><h4>Promos</h4>
    <p>Here is the list of your promos. </p>
    </div>
    
    <div className="col text-right"><Link to="/newpromo"><button type="submit" className="btn btn-transparent m-l-15 p-a-10 white">Add&nbsp;New&nbsp;Promo </button></Link></div>
  </div>
</div>

</div>
    <div className='content-container-no-x-p'>
    <table class="table">
  <thead>
  <tr>
      <th scope="col"className='w-15pc'><span>Logo </span><div className="vl">&nbsp;</div></th>
      <th scope="col" className='w-30pc'><span>Name </span><div className="vl">&nbsp;</div></th>
      <th scope="col"><span>Description </span><div className="vl">&nbsp;</div></th>
      <th scope="col" className='w-15pc'><span>Actions</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row" ><img src={promo1} alt="sample-Logo" className='promo-logo'/></td>
      <td>Promo 1 Name</td>
      <td>Promo 1 Description</td>
      <td className='text-right'>
        <div className='grid-buttons'>
        <Link to="/signup"><button type="button" className="btn btn-success">Edit</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-danger m-l-15">Delete</button></Link>
      </div>
      </td>
    </tr>
    <tr>
      <td scope="row"><img src={promo2} alt="sample-Logo" className='promo-logo'/></td>
      <td>Promo 2 Name</td>
      <td>Promo 1 Description</td>
      <td className='text-right'>
        <div className='grid-buttons'>
        <Link to="/signup"><button type="button" className="btn btn-success">Edit</button></Link>
      <Link to="/signup"><button type="button" className="btn btn-danger m-l-15">Delete</button></Link>
      </div>
      </td>
    </tr>
  </tbody>
</table>


    </div>
    </div>

  );
};

export default Promos;