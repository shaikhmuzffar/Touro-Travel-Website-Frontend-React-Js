import React, { useState } from 'react'
import logo from '../../images/logo/touro.png'
import { Link } from "react-router-dom";
import Navbarlink from '../navbar link/Navbarlink';
import './navbar.css'
export default function Navbar({ active }) {
    const [navbar, showNavbar] = useState(false)
    return (
        <>
            <div className="navSection">
                <div className="nav container">
                    <Link to="/home" className="navLogo ">
                        <img src={logo} alt="touro" />Touro
                    </Link>
                    <ul className={navbar ? "navbar navbarMobile" : "navbar"}>

                        {
                             (active === "home") ? <Navbarlink name="Home" active="active" path="/home" /> :<Navbarlink name="Home" active="" path="home" />
                        }


                        {
                            (active === "places") ? <Navbarlink name="Places" active="active" path="places" /> : <Navbarlink name="Places" path="places" />
                        }

                        {
                            //  <Navbarlink name="Blog" path="blog" />
                            (active === "blog") ? <Navbarlink name="Blog" active="active" path="blog" /> : <Navbarlink name="Blog" active="" path="blog" />
                        }

                        {
                            (active === "about") ? <Navbarlink name="About" active="active" path="about" /> : <Navbarlink name="About" active="" path="about" />
                        }

                        {
                            (active === "contact") ? <Navbarlink name="Contact" active="active" path="contact" /> : <Navbarlink name="Contact" path="contact" />
                        }
                        <Link className="btn-Primary navLogin navLoginMob" to="/login">Login</Link>

                        
                    </ul>
                    <div className="navUserActions">
                        <Link className="btn-Primary navLogin" to="/login">Login</Link>
                        <i onClick={() => showNavbar(!navbar)} className={navbar ? "fa-solid fa-xmark" : "fa-solid fa-bars navbarIcon"}></i>
                    </div>
                </div>
            </div>
        </>
    )
}