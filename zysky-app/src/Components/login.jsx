import React from 'react';
import "../App.css";
import logo from '../assets/img/zysky-splash-small 1@2x.png';
import { Outlet, Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      {/* Language selection */}
      <div className="langselect">
        <select>
          <option value="pl">PL</option>
          <option value="en">EN</option>
        </select>
      </div>
      {/* Login modal */}
      <div className="my-modal modal-sm">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h2 className="text-center">Partner Portal</h2>
        </div>
        <div className='login-group'>
          <form>
            <div className="form-group">
              <input type="email" className="form-control text-center" placeholder="Email" required />
              <span className="input-icon"><i className='icon-check-double-fill'></i></span>
            </div>
            <div className="form-group">
              <input type="password" className="form-control text-center" placeholder="Password" required />
              <span className="input-icon"><i className='icon-eye-off-line'></i></span>
            </div>

            <div className="text-end">
              <a href="/forgot-password" className="link">Forgot password?</a>
            </div>

            <div className="float-right p-t-30">
               <Link to="/signup"><button type="button" className="btn btn-outlined">Sign Up</button></Link>
              <button type="submit" className="btn btn-success m-l-15">Log In</button>
            </div>
          </form>
        </div>
      </div>
      {/* footer */}
      <div className='footer'><span className='footer-content'>All Rights Reserved, 2024 ZYSKY Sp. z o.o. </span></div>
    </div>
  );
};

export default Login;
