import './footer.css'
import React from "react";
import logo from '../../images/logo/touro.png'
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            <div className="footerSection marginTop4">
                <div className="Footer container">
                    <div className="footerColumn">
                        <h3 style={{display:"flex"}} className='footerColumnHeader'><img src={logo} alt="touro"  width="18px" style={{marginRight:"6px"}}/> Touro</h3>
                        <ul className='footerColumnLinks'>
                            <li><p className="footerColumnDesc" to="#">
                                Travel is fatal to prejudice, and narrow mindness, And many of our people
                            </p></li>
                            <span className='socialMedias'>
                                <Link className='socialMedia' to="#"><i className="fa-brands fa-facebook"></i></Link>
                                <Link className='socialMedia' to="#"><i className="fa-brands fa-twitter"></i></Link>
                                <Link className='socialMedia' to="#"><i className="fa-brands fa-instagram"></i></Link>
                                <Link className='socialMedia' to="#"><i className="fa-brands fa-linkedin"></i></Link>
                            </span>
                        </ul>
                    </div>
                    <div className="footerColumn">
                        <h3 className='footerColumnHeader'>Quick Link</h3>
                        <ul className='footerColumnLinks'>
                            <li><Link className="footerColumnLink" to="#">Home</Link></li>
                            <li><Link className="footerColumnLink" to="#">Category</Link></li>
                            <li><Link className="footerColumnLink" to="#">Blog</Link></li>
                            <li><Link className="footerColumnLink" to="#">About Us</Link></li>
                        </ul>
                    </div>
                    <div className="footerColumn">
                        <h3 className='footerColumnHeader'>Quick Link</h3>
                        <ul className='footerColumnLinks'>
                            <li><Link className="footerColumnLink" to="#">FAQ's</Link></li>
                            <li><Link className="footerColumnLink" to="#">privacy policy</Link></li>
                            <li><Link className="footerColumnLink" to="#">terms & conditions</Link></li>
                            <li><Link className="footerColumnLink" to="#">support</Link></li>
                        </ul>
                    </div>
                    <div className="footerColumn">
                        <h3 className='footerColumnHeader'>Contact Us</h3>
                        <ul className='footerColumnLinks'>
                            <li className='footerColumnInfo'><i className="fa-sharp fa-solid fa-thumbtack  "></i> 342 blane Street, wisconsing united states</li>
                            <li className='footerColumnInfo'><i className="fa-solid fa-phone "></i> 4855-7432-5153</li>
                            <li className='footerColumnInfo'><i className="fa-solid fa-envelope "></i> touro@agency.com</li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}