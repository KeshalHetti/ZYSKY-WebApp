import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout-container">
      <nav role="navigation">
  <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
    <li>
            <Link to="/Home"><i className="icon-home"></i><span>Home</span></Link>
          </li>
          <li>
            <Link to="/login"><i className="icon-promotions"></i><span>Promos</span></Link>
          </li>
          <li>
            <Link to="/signup"><i className="icon-map"></i><span>Locations</span></Link>
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
    <div className="content"><Outlet /></div>
  </div>
</nav>

    </div>
  )
};

export default Layout;