import React from "react"
import './placeInfo.css'
import Slider from "../../components/Slider/Slider"
import Navbar from '../../components/navbar/Navbar'

import italy from '../../images/placeInfo/italy.jpg'
import italy1 from '../../images/placeInfo/italy1.jpg'
import italy2 from '../../images/placeInfo/italy2.jpg'
import italy3 from '../../images/placeInfo/italy3.jpg'
import italy4 from '../../images/placeInfo/italy4.jpg'
import italy5 from '../../images/placeInfo/italy5.jpg'


// features Img
import feature1 from '../../images/placeInfo/feature1.png'
import feature2 from '../../images/placeInfo/feature2.png'
import feature3 from '../../images/placeInfo/feature3.png'
import feature4 from '../../images/placeInfo/feature4.png'
import feature6 from '../../images/placeInfo/feature6.png'

// user
import user1 from '../../images/placeInfo/user1.avif'
import user2 from '../../images/placeInfo/user2.avif'
import user3 from '../../images/placeInfo/user3.avif'
import user4 from '../../images/placeInfo/user4.avif'




export default function PlaceInfo() {
    // rating bar
    function RatingBar(props) {
        return (
            <div className="placeInformationSection_DescriptionRightBox_Reviews_stat">
                <span className="state_title">{props.ratingName}</span>
                <div className="state_bar">
                    <div className="stat_bar_line">
                        <p className="stat_bar_lineFront"></p>
                        <p className="stat_bar_lineBack" style={{ width: `${props.ratingPercentage}` }}></p>
                    </div>
                    <span className="stat_bar_Number">{props.ratingNumber}</span>
                </div>
            </div>
        )
    }
    function UserReview(props) {
        return (
            <div className="placeInformationSection_DescriptionRightBox_userReview">
                <div className="placeInformationSection_DescriptionRightBox_userReview_userInfo">
                    <img src={props.userImg} alt="" width="50px" />
                    <div className="userNameAndDate">
                        <span>{props.userName}</span>
                        <span>{props.date}</span>
                    </div>
                </div>
                <p className="placeInformationSection_DescriptionRightBox_userReview_userComment">
                    {props.userComment}
                </p>
            </div>
        )
    }


    return (
        <>
            <div className="placeInfoSection">
                <Navbar active="places" />
                <div className="placeInformationSection marginTop4">

                    {/* info */}
                    <div className="placeInformationSection_Info">
                        <h1>Venice</h1>
                        <h1>Italy, Europe</h1>
                        <a href="" className="moreInformation"><span>More information</span> <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                    {/* inputBox */}
                    <div className="placeInformationSection_InputBox container">
                        <div className="placeInformationSection_InputBoxRow">
                            <div className="placeInformationSection_InputBoxRow_cityInputField">
                                <input type="text" placeholder="Venice, Italy" />
                            </div>
                            <div className="placeInformationSection_InputBoxRow_calenderBox">
                                <div className="calenderInputField">
                                    <input type="date" name="" id="" />
                                </div>
                                <span><i className="ri-subtract-line"></i></span>
                                <div className="calenderInputField">
                                    <input type="date" name="" id="" />
                                </div>
                            </div>
                            <div className="placeInformationSection_InputBoxRow_peopleInputField">
                                <div>
                                    <i className="ri-user-line"></i>
                                </div>
                                <input type="text" placeholder="2 adults" /> &middot;<input type="text" placeholder="0 children" />
                            </div>
                        </div>
                        <a href="" className="placeInformationSection_InputBox_submit"><i class="fa-sharp fa-solid fa-paper-plane"></i><span>Go!</span> </a>
                    </div>

                    {/* description */}
                    <div className="placeInformationSection_Description container">
                        <div className="placeInformationSection_DescriptionLeftBox">
                            <div className="placeInformationSection_DescriptionLeftBox_PlaceDesc">
                                <div className="placeInformationSection_DescriptionLeftBox_PlaceDesc_para">
                                    Experience the enchanting beauty of Venice on our guided city tour. Glide through picturesque canals on gondolas, visit iconic landmarks like St. Mark's Basilica and Rialto Bridge, and immerse yourself in the city's rich history and culture.
                                    <br />
                                    <br />
                                    Our expert guides provide fascinating insights into Venice's rich history and culture, allowing you to immerse yourself in the magic of this floating city. With the native language translator tour guide feature, language barriers dissolve, ensuring an unforgettable experience for every visitor.
                                    <br />
                                    <br />
                                    Explore enchanting Venice with our guided city tour. Glide through iconic canals on gondolas, marvel at the stunning architecture of St. Mark's Basilica, and discover hidden gems in charming alleyways. Learn about the city's rich history and enjoy a true Venetian experience with expert guides. Unforgettable memories await!
                                </div>
                            </div>
                            <div className="placeInformationSection_DescriptionLeftBox_Features">
                                <h2>What we offer?</h2>
                                <div
                                    className="placeInformationSection_DescriptionLeftBox_Feature">
                                    <div><img src={feature1} alt="" /></div>
                                    <div className="placeInformationSection_DescriptionLeftBox_FeatureTitle">
                                        <span>Dedicated Tour Guide</span>
                                        <span> A detailed overview of city, including its history, culture, and geographical location</span>
                                    </div>
                                </div>
                                <div className="placeInformationSection_DescriptionLeftBox_Feature">
                                    <div><img src={feature2} alt="" /></div>
                                    <div className="placeInformationSection_DescriptionLeftBox_FeatureTitle">
                                        <span>Special Item Handling</span>
                                        <span> Some services may offer secure storage for valuable or fragile items that require extra care.</span>
                                    </div>
                                </div>
                                <div className="placeInformationSection_DescriptionLeftBox_Feature">
                                    <div><img src={feature3} alt="" /></div>
                                    <div className="placeInformationSection_DescriptionLeftBox_FeatureTitle">
                                        <span>Top Attractions</span>
                                        <span> A list of the must-visit attractions.Each attraction will have a brief description and key highlights.</span>
                                    </div>
                                </div>
                                <div className="placeInformationSection_DescriptionLeftBox_Feature">
                                    <div><img src={feature4} alt="" /></div>
                                    <div className="placeInformationSection_DescriptionLeftBox_FeatureTitle">
                                        <span>Activities and Tours</span>
                                        <span>Visitors can find something suitable for their interests and preferences.</span>
                                    </div>
                                </div>
                                <div className="placeInformationSection_DescriptionLeftBox_Feature">
                                    <div><img src={feature6} alt="" /></div>
                                    <div className="placeInformationSection_DescriptionLeftBox_FeatureTitle">
                                        <span>native translater</span>
                                        <span>valuable service offered to tourists who may not be fluent in the local language of their travel destination</span>
                                    </div>
                                </div>
                            </div>
                            <div className="placeInformationSection_DescriptionLeftBox_PlacesVisit">
                                <h2>Places you Visit?</h2>
                                <div className="placeInformationSection_DescriptionLeftBox_PlacesVisit_Places">
                                    <div className="placeInformationSection_DescriptionLeftBox_PlacesVisit_Place">
                                        <img src={italy1} alt="" />
                                    </div>
                                    <div className="placeInformationSection_DescriptionLeftBox_PlacesVisit_Place">
                                        <img src={italy3} alt="" />
                                    </div>
                                    <div className="placeInformationSection_DescriptionLeftBox_PlacesVisit_Place">
                                        <img src={italy4} alt="" />
                                    </div>
                                    <div className="placeInformationSection_DescriptionLeftBox_PlacesVisit_Place">
                                        <img src={italy5} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="placeInformationSection_DescriptionRightBox">
                            {/* rating */}
                            <div className="placeInformationSection_DescriptionRightBox_Reviews">
                                <h3><i className="fa-solid fa-star"></i> 4.91 &middot; 143 reviews</h3>
                                <div className="placeInformationSection_DescriptionRightBox_Reviews_stats">
                                    <RatingBar ratingName="Location" ratingNumber="4.9" ratingPercentage="96%" />
                                    <RatingBar ratingName="Accuracy" ratingNumber="4.5" ratingPercentage="90%" />
                                    <RatingBar ratingName="value" ratingNumber="4.6" ratingPercentage="95%" />
                                    <RatingBar ratingName="Communication" ratingNumber="4.2" ratingPercentage="85%" />
                                    <RatingBar ratingName="Check-in" ratingNumber="4.6" ratingPercentage="95%" />
                                    <RatingBar ratingName="cleanness" ratingNumber="4.3" ratingPercentage="86%" />
                                </div>
                            </div>
                            {/*userReview */}
                            <div className="placeInformationSection_DescriptionRightBox_userReviews">
                                <UserReview userName="Hamid ansari" date="22 April" userComment="This place is like a hidden gem. I couldn't have been more happier with my 2 day stay. The people are extremely nice, the food is delicious and the views are just beyond imagination" userImg={user1} />
                                <UserReview userName="Shrivats" date="22 April" userComment="Simply loved my stay here 😍
                                This place is straight out of a fairytale.P.S - Do try the mutton curry!" userImg={user2} />
                                <UserReview userName="Simran" date="22 April" userComment="It was a pleasure to visit." userImg={user3} />
                                <UserReview userName="Samiuel" date="22 April" userComment="This has to be one of my most memorable. The enire trip was generous." userImg={user4} />
                                <a className="placeInformationSection_DescriptionRightBox_userReviews_showReviews" href="">show all reviews</a>
                            </div>

                            {/* book now */}
                            <div className="placeInformationSection_DescriptionRightBox_BookNow">
                                <h3>What you waiting for?</h3>
                                <div className="placeInformationSection_DescriptionRightBox_BookNow_form">
                                    <div className="placeInformationSection_DescriptionRightBox_BookNow_form_priceRows">
                                        <div className="placeInformationSection_DescriptionRightBox_BookNow_priceRow"><span>$5080 x 5 Nights</span> <span>$25,400</span>
                                        </div>
                                        <div className="placeInformationSection_DescriptionRightBox_BookNow_priceRow"><span>Touro Service fee</span> <span>$3,765</span>
                                        </div>
                                    </div>
                                    <div className="placeInformationSection_DescriptionRightBox_BookNow_totalRow"><span>Total before taxes</span> <span>$29,165</span>
                                    </div>
                                    <a className="btn-Primary placeInformationSection_DescriptionRightBox_BookNow_form_button" href="">Book your Trip!</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* map */}
                    <div className="placeInformationSection_Location container">
                        <h2>Where you will be?</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22744.71453174997!2d12.311530153862844!3d45.43692734100835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1daf1d63d89%3A0x7ba3c6f0bd92102f!2sVenice%2C%20Metropolitan%20City%20of%20Venice%2C%20Italy!5e0!3m2!1sen!2sin!4v1690765237039!5m2!1sen!2sin" width="100%" height={350} style={{ border: 0 }} loading="lazy" ></iframe>
                    </div>

                    {/*  Discover hidden gems, savor delicious Italian cuisine, and capture unforgettable moments in this timeless floating city. An unforgettable journey awaits you. Book now! */}

                    {/* relarted places */}
                    <div className="placeInformationSection_popularCitiesSection container">
                        <h2>Popular Italy cities</h2>
                        <Slider />
                    </div>
                </div>

            </div >
        </>
    )
}