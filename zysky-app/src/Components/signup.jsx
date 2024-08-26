import React from 'react';
import "../App.css"; // Import the CSS for styling
import logo from '../assets/img/zysky-splash-small 1@2x.png';

const SignUp = () => {
  return (
    <div>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h2>Partner Registration</h2>
      </div>

        <form>
            <fieldset>
            <legend>New Partner Account</legend>
                <div className="form-row">
                <div className="Signup-form">
                    <input type="text" className="form-control" placeholder="Firstname" required />
                </div>
                <div className="Signup-form">
                    <input type="text" className="form-control" placeholder="Company Name" required />
                </div>
                </div>

                <div className="form-row ">
                <div className="Signup-form">
                    <input type="text" className="form-control" placeholder="Lastname" required />
                </div>
                <div className="form-row ">
                <div className="Signup-form">
                    <input type="text" className="form-control" placeholder="ZIP" required />
                    <input type="text" className="form-control" placeholder="City" required />
                </div>
                </div>
                </div>

                <div className="form-row">
                <div className="Signup-form">
                    <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="Signup-form">
                    <input type="text" className="form-control" placeholder="Street & Number" required />
                </div>
                </div>

                <div className="form-row">
                <div className="Signup-form">
                    <input type="email" className="form-control" placeholder="Confirm Your Email" required />
                </div>
                <div className="Signup-form">
                    <input type="text" className="form-control" placeholder="Phone" required />
                </div>
                </div>

                <div className="form-row">
                <div className="Signup-form">
                    <input type="password" className="form-control" placeholder="Password" required />
                </div>
                <div className="Signup-form">
                    <input type="text" className="form-control" placeholder="NIP" required />
                </div>
                </div>

                <div className="form-row">
                <div className="Signup-form">
                    <input type="password" className="form-control" placeholder="Confirm Password" required />
                </div>
                <div className="Signup-form">
                    <p>You must read and accept the following documents to continue</p>
                    <div className="checkbox-group">
                    <label>
                        <input type="checkbox" required /> Privacy Policy
                    </label>
                    <label>
                        <input type="checkbox" required /> Terms of Service
                    </label>
                    </div>
                </div>
                </div>

                <div className="form-row">
                <button type="submit" className="btn btn-primary">Create Account</button>
                </div>
            </fieldset>
        </form>

      
    </div>
  );
};

export default SignUp;
