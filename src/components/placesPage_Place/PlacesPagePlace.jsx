import React from 'react'
import leftImg from '../../images/category/left.png'
import rightImg from '../../images/category/right.png'
import { Link } from 'react-router-dom'

export default function PlacesPagePlace(props) {
    return (
        <div className="placesPage_Place">
            <div className="placesPage_PlaceImg">
                <img src={props.img} alt="" width="50px" />
            </div>
            <div className="placesPage_PlaceInfo">
                <div className="placesPage_PlaceInfo_Title">
                    <div className="placesPage_PlaceInfo_Title_Left">
                        <p className="placesPage_PlaceInfo_Title_Left_nameAndRating">
                            <span className="name">{props.name}</span>
                            <span className="rating">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </span>
                        </p>
                        <p className="placesPage_PlaceInfo_Title_Left_Location">
                            <i class="ri-map-pin-2-fill"></i><span>{props.location}</span>
                        </p>
                    </div>
                    <div className="placesPage_PlaceInfo_Title_Right">
                        <div className="placesPage_PlaceInfo_Title_Right_Rating">
                            <span className="reviewsImg"><img src={leftImg} alt="" />{props.rating} <img src={rightImg} alt="" /> </span>
                            <span>{props.review} reviews</span>
                        </div>
                    </div>
                </div>
                <div className="placesPage_PlaceInfo_Desc">
                    <ul className="placesPage_PlaceInfo_Desc_Left">
                        <li>Lowest price ever</li>
                        <li>Reservation possible witihout credit a card</li>
                        <li>Free cancelation</li>
                    </ul>
                    <div className="placesPage_PlaceInfo_Desc_Right">
                        <span>{props.price}</span>
                        <span><i class="ri-information-line"></i>per person</span>
                    </div>
                </div>
                <div className="placesPage_PlaceInfo_UserActions">
                    <span><i class="fa-solid fa-user-tie"></i> Tour guide included</span>
                    <Link style={{ borderRadius: "0" }} to="/placeInfo"><span>Explore more</span> <i class="fa-solid fa-chevron-right"></i> </Link>
                </div>

            </div>
        </div>
    )
}
