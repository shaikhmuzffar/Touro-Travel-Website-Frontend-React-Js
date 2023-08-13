import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import logo from '../../images/logo/touro.png'
import loginImg from '../../images/login/login.png'
import signinImg from '../../images/login/signin.png'
export default function Login() {
  return (
    <div>
      <div className="formSection login">
        <Navbar/>
        <div className="form marginTop6">
          <span className="formLogo">
            <img src={logo} width="24px" alt="touro" />Touro
          </span>
          <div className='formTitleAndDesc'>
            <h3 className='formTitle'>Create Account</h3>
            <span className='formDesc'>complete your account setup by providing your proper biography information</span>
          </div>
          <div className="loginSignUpSwitch">
            <Link className='loginSignUpSwitchLogin loginSignUpSwitchBox active' to="/login"><i class="ri-user-6-line"></i>Login</Link>
            <Link className='loginSignUpSwitchSignin loginSignUpSwitchBox ' to="/signin"><i class="ri-login-circle-line"></i> Signup</Link>
          </div>
          <div className="formBox">
            <form>
              <div className="formInputBox">
                <div className="inputFieldBox">
                  <div className="inputField">
                    <label htmlFor="">First Name</label>
                    <input type="text" />
                  </div>
                  <div className="inputField">
                    <label htmlFor="">last Name</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="inputField">
                  <label htmlFor="">Email</label>
                  <input type="text" />
                </div>
                <div className="inputField">
                  <label htmlFor="">Password</label>
                  <input type="text" />
                </div>
                <div className="inputField">
                  <label htmlFor="">confirm password</label>
                  <input type="text" />
                </div>
                <div className= "radio">
                  <input type="checkbox" />
                  <p className='checkboxInfo'>
                    Creating an account means you're okay with out <span>Terms of Services</span>, <span>Privacy Policy</span> and Our default <span>notification settings</span>
                  </p>
                </div>
              </div>
              <Link className="btn-Primary formLogin" to="/">Create Account</Link>
            </form>

          </div>
        </div>
        <div className="bgOverlay"></div>
      </div>
    </div>
  )
}
