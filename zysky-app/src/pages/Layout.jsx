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
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
    </ul>
    <div className="content"><Outlet /></div>
  </div>
</nav>

    </div>
  )
};

export default Layout;