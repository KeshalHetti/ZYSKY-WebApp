import React from 'react';
import "../App.css";
import logo from '../assets/img/zysky-splash-small 1@2x.png';



const Login = () => {
  return (
    <div>
      <div className="logo">
            <img src={logo} alt="Logo" />
            <h2 className="text-center">Partner Portal</h2>
      </div>
          <div className='login-group'>
          <form>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" required />
            </div>

            <div className="text-end">
              <a href="/forgot-password" className="forgot-password">Forgot password?</a>
            </div>

            <div className="d-flex justify-content-around mt-3">
              <button type="button" className="btn btn-light">Sign Up</button>
              <button type="submit" className="btn btn-success">Log In</button>
            </div>
            </form>
          </div>
    </div>
  );
};

export default Login;
