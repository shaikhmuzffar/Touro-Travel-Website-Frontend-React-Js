import React from "react";
import '../popularPlaces/popularPlaces.css'
import { Link } from "react-router-dom";
export default function Place(props) {
    return (
        <>
            <div className="place">
                <div className="placeImg">
                    <img src={props.p} alt="" width="200px" />
                </div>
                <div className="placeInfo">
                    <span className="placeName">{props.pn}</span>
                    <span className="placeDuration"><i className="fa-regular fa-clock"></i> {props.pd}</span>
                    <span className="placeLocation"><i className="fa-solid fa-location-crosshairs"></i> {props.pl}</span>
                    <span className="placeRating"><i className="fa-solid fa-star"></i>{props.pr}</span>
                    <div className="priceAndExplore">
                        <div className="price">
                            <span>Total Price</span>
                            <span>$ {props.tp}</span>
                        </div>
                        <Link className="explore" to="/placeInfo">Explore</Link>
                    </div>
                </div>
            </div>
        </>
    )
}