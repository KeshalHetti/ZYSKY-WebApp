import { Outlet, Link } from "react-router-dom";
import logo from '../assets/img/zysky-splash-small 1@2x.png';

const Layout = () => {
  return (
    <div className="layout-container">
      <nav role="navigation">
  <div id="menuToggle">
    <input type="checkbox" className="toggleinput"/>
    <div className="dashbord-logo">
    <img src={logo} alt="Logo" />
    </div>
    {/*Hamberger menu icon
     <span></span>
    <span></span>
    <span></span> */}
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
            <Link to="/locations"><i className="icon-bell"></i><span>Notifications</span></Link>
          </li>
          <li>
            <Link to="/locations"><i className="icon-dialog"></i><span>Transactions</span></Link>
          </li>
          <li>
            <Link to="/locations"><i className="icon-account"></i><span>Account</span></Link>
          </li>
          <li>
            <Link to="/locations"><i className="icon-log-out"></i><span>Logout</span></Link>
          </li>
    </ul>
    <div className="content">
    <div className="header">
    <div>
  <div className="row">
    <div className="col-md-6 col-sm-auto text-left">
      <div> Company: XXXXXX</div>
      <div> Email: xxx@xxx.com</div>
    </div>
    <div className="col-md-6 col-sm-auto text-right">
    <Link to="/"><button type="submit" className="btn btn-red-outline ">Free</button></Link>
    <Link to="/"><button type="submit" className="btn btn-red m-l-15">Not Verified</button></Link>
    
    </div>
  </div>
</div>
    </div>
      <Outlet /></div>
  </div>
</nav>
<div className='footer'><span className='footer-content'>All Rights Reserved, 2024 ZYSKY Sp. z o.o. </span></div>
    </div>
  )
};

export default Layout;