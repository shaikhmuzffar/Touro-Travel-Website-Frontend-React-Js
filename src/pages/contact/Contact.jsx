import React from 'react'
import './contact.css'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
export default function Contact() {
    return (
        <>
            <div className="contactSection marginTop6">
                <Navbar active="contact" />
                <div className="contact">
                    <div className="contactSectionHero">
                        <h1 className="contactUsTitle">Contact Us</h1>
                    </div>
                    <h1 className='contactHeader container'> Get in touch</h1>
                    <div className="contactForm container">
                        <div className="contactFormLeftBox">
                            <div className="contactInfoRow">
                                <span className='contactInfoRowTitle'>Send a Message</span>
                                <p className='contactInfoRowSubtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto saepe, nam veritatis nesciunt vitae obcaecati voluptatem ullam. Culpa, accusamus!</p>
                            </div>
                            <div className="contactBoxgroup">
                                <div className="inputField">
                                    <label htmlFor="">Name</label>
                                    <input type="text" />
                                </div>  <div className="inputField">
                                    <label htmlFor="">Email Address</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="contactBoxgroup">
                                <div className="inputField">
                                    <label htmlFor="">Interested in</label>
                                    <input type="text" />
                                </div>  <div className="inputField">
                                    <label htmlFor="">Phone number</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="inputField">
                                <label htmlFor="">Message</label>
                                <input type="text" />
                            </div>
                            <Link className="btn-Primary contactSubmit" to="/">Submit<i className="ri-send-plane-fill"></i></Link>
                        </div>
                        <div className="contactFormRightBox">
                            <div className="contactInfoRow">
                                <span className='contactInfoRowTitle'>Call Us</span>
                                <p className='contactInfoRowSubtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto saepe, nam veritatis nesciunt vitae obcaecati voluptatem ullam. Culpa, accusamus!</p>
                                <p className='contactInfoRowIcon'><i className="ri-contacts-fill"></i> <span>(123)325-5435</span></p>
                            </div>
                            <div className="contactInfoRow">
                                <span className='contactInfoRowTitle'>Visit Us</span>
                                <p className='contactInfoRowSubtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto saepe, nam veritatis nesciunt vitae obcaecati voluptatem ullam. Culpa, accusamus!</p>
                                <p className='contactInfoRowIcon'><i className="ri-map-pin-fill"></i> <span>1234 Downtown St, San francisco</span></p>
                            </div>
                            <div className="contactInfoRow">
                                <span className='contactInfoRowTitle'>Live Chat</span>
                                <p className='contactInfoRowSubtitle'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto saepe, nam veritatis nesciunt vitae obcaecati voluptatem ullam. Culpa, accusamus!</p>
                                <p className='contactInfoRowIcon'><i className="ri-message-3-fill"></i><span>Start Chat</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="contactLocation container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.8803792638746!2d-122.43644685261611!3d37.75869793666781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1690443190824!5m2!1sen!2sin" height="450" width="100%" style={{ border: "0" }}></iframe>
                    </div>
                    <div className="FAQ container">
                        <div className="FAQLeft">
                            <span className='FAQSmallTitle'>FAQ</span>
                            <h1 className="FAQLargeTitle">Frequently <br />asked <br /> questions</h1>

                        </div>
                        <div className="FAQRight ">
                            <span className='FAQSmallTitle'>Contacting us is a breeze!</span>
                            <p className='FAQDesc'>We are thrilled to hear from you and are here to assist with any inquiries, suggestions, or travel-related questions you may have. Our dedicated team of travel experts is eager to ensure your journey is smooth and memorable from start to finish.</p>
                            <ul className='FAQs'>
                                <li><i className="ri-question-fill"></i>How do I book a flight on your website?</li>
                                <li><i className="ri-question-fill"></i>How can I modify or cancel my existing booking?</li>
                                <li><i className="ri-question-fill"></i>What types of accommodation options do you offer?</li>
                                <li><i className="ri-question-fill"></i>What are the available payment methods?</li>
                                <li><i className="ri-question-fill"></i>Do you offer travel packages for group bookings or corporate trips?</li>
                                <li><i className="ri-question-fill"></i>Are there any language translation services available for travelers?</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}
