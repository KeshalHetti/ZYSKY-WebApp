import { Outlet, Link } from "react-router-dom";
import logo from '../assets/img/zysky-splash-small 1@2x.png';

const Layout = () => {
  return (
    <div>
      <div className="sidebar">
    <div className="dashbord-logo">
    <img src={logo} alt="Logo" />
    </div>
    <ul id="menu">
    <li>
            <Link to="/Home"><i className="icon-home"></i><span>Home</span></Link>
          </li>
          <li>
            <Link to="/promos"><i className="icon-promotions"></i><span>Promos</span></Link>
          </li>
          <li>
            <Link to="/locations"><i className="icon-map"></i><span>Locations</span></Link>
          </li>
          <li>
            <Link to="/notifications"><i className="icon-bell"></i><span>Notifications</span></Link>
          </li>
          <li>
            <Link to="/transactions"><i className="icon-dialog"></i><span>Transactions</span></Link>
          </li>
          <li>
            <Link to="/account"><i className="icon-account"></i><span>Account</span></Link>
          </li>
          <li>
            <Link to="/locations"><i className="icon-log-out"></i><span>Logout</span></Link>
          </li>
    </ul>
    </div>
    <div className="content">
    <div className="header">
    <div>
  <div className="row">
    <div className="col-md-6 col-sm-auto text-left logged-info">
      <div> Company: XXXXXX</div>
      <div> Email: xxx@xxx.com</div>
    </div>
    <div className="col-md-6 col-sm-auto text-right sm-text-left sm-m-t-10 m-t-10">
    <Link to="/"><button type="submit" className="btn btn-red-outline min-w-100">Free</button></Link>
    <Link to="/"><button type="submit" className="btn btn-red m-l-15 min-w-100">Not Verified</button></Link>
    
    </div>
  </div>
</div>
    </div>
      <Outlet />
      </div>


<div className='footer'><span className='footer-content'>All Rights Reserved, 2024 ZYSKY Sp. z o.o. </span></div>
    </div>
  )
};

export default Layout;