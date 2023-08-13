import React from 'react'
import './login.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import logo from '../../images/logo/touro.png'
import loginImg from '../../images/login/login.png'
import signinImg from '../../images/login/signin.png'
export default function Signin() {
  return (
    <div>
      <div className="formSection login">
      <Navbar/>
        <div className="form marginTop6">
          <span className="formLogo">
            <img src={logo} width="24px" alt="touro" />Touro
          </span>
          <div className='formTitleAndDesc'>
            <h3 className='formTitle'>Sign In to Account</h3>
            <span className='formDesc'>get your account by providing your proper information</span>
          </div>
          <div className="loginSignUpSwitch">
            <Link className='loginSignUpSwitchLogin loginSignUpSwitchBox ' to="/login"><i className="ri-user-6-line"></i>Login</Link>
            <Link className='loginSignUpSwitchSignin loginSignUpSwitchBox active' to="/signin"><i className="ri-login-circle-line"></i> Signup</Link>
          </div>
          <div className="formBox">
            <form>
              <div className="formInputBox">
                <div className="inputField">
                  <label htmlFor="">Email</label>
                  <input type="text" />
                </div>
                <div className="inputField">
                  <label htmlFor="">Password</label>
                  <input type="text" />
                </div>
                <div className= "radio">
                  <input type="checkbox" />
                  <p className='checkboxInfo'>
                    Signing in account means you're okay with out <span>Terms of Services</span>, <span>Privacy Policy</span> and Our default <span>notification settings</span>
                  </p>
                </div>
              </div>
              <Link className="btn-Primary formLogin" to="/">Signin</Link>
            </form>

          </div>
        </div>
        <div className="bgOverlay"></div>

      </div>
    </div>
  )
}
