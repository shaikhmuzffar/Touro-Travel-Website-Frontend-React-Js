import React from "react"
import './category.css'
import '../../components/popularPlaces/popularPlaces.css'
import { Link } from "react-router-dom"
import PlacesPagePlace from '../../components/placesPage_Place/PlacesPagePlace';
import Navbar from '../../components/navbar/Navbar'
import Placeinfo from '../placeInfo/PlaceInfo'
import Place from '../../components/place/Place'
import place1 from '../../images/popularPlaces/island1.jpg'
import place2 from '../../images/popularPlaces/island2.jpg'
import place3 from '../../images/popularPlaces/island3.jpg'
import place4 from '../../images/popularPlaces/island4.jpg'
import place5 from '../../images/popularPlaces/island5.jpg'
import place6 from '../../images/popularPlaces/island6.jpg'
import place7 from '../../images/popularPlaces/place7.jpg'
import place8 from '../../images/popularPlaces/place8.jpg'
import place9 from '../../images/popularPlaces/place9.jpg'
import place10 from '../../images/popularPlaces/place10.jpg'
import place11 from '../../images/popularPlaces/place11.jpg'
import place12 from '../../images/popularPlaces/place12.jpg'
import place13 from '../../images/popularPlaces/place13.jpg'
import place14 from '../../images/popularPlaces/place14.jpg'
import place15 from '../../images/popularPlaces/place15.jpg'
import place16 from '../../images/popularPlaces/place16.jpg'
import place17 from '../../images/popularPlaces/place17.jpg'
import place18 from '../../images/popularPlaces/place18.jpg'
import place19 from '../../images/popularPlaces/place19.jpg'
import place20 from '../../images/popularPlaces/place20.jpg'
import place21 from '../../images/popularPlaces/place21.jpg'
import place22 from '../../images/popularPlaces/place22.jpg'
import place23 from '../../images/popularPlaces/place23.jpg'
import place24 from '../../images/popularPlaces/place24.jpg'

import filterImg from '../../images/category/filter.png'
import weatherImg from '../../images/category/weather.png'
export default function Category() {
    return (
        <>
            <div className="categorySection marginTop4">
                <Navbar active="places" />
                <div className="category marginTop6">
                    <div className="categoryHeader container">
                        <div className="categoryDate">
                            <h3 className="date">16</h3>
                            <div className="dayAndyear">
                                <span className="day">Wednesday</span>
                                <span className="year">September, 2020</span>
                            </div>
                        </div>
                        <div className="categoryFilter">
                            <div className="selectField">
                                <label htmlFor="">Select Place</label>
                                <select className="" name="" id="">
                                    <option value="">All Places</option>
                                    <option value="">All Places</option>
                                </select>
                            </div>
                            <div className="selectField">
                                <label htmlFor="">How many Days?</label>
                                <select className="" name="" id="">
                                    <option value="">One Week</option>
                                    <option value="">Two Week</option>
                                    <option value="">Three Week</option>
                                    <option value="">one Month</option>
                                </select>
                            </div>
                            <div className="selectField">
                                <label htmlFor="">Select Date</label>
                                <select className="" name="" id="">
                                    <option value="">Any Date</option>
                                    <option value="">Two Week</option>
                                    <option value="">Three Week</option>
                                    <option value="">one Month</option>
                                </select>
                            </div>
                            <div className="filterImage">
                                <img src={filterImg} alt="" />
                            </div>
                            <div className="filterBtn">
                                <button><i className="fa-solid fa-magnifying-glass"></i>Go!</button>
                            </div>
                        </div>

                        <div className="categoryWeather">
                            <div className="weatherimage">
                                <img src={weatherImg} alt="" />
                            </div>
                            <div className="weatherInfo">
                                <div className="celcius">
                                    <h3>23°</h3>
                                </div>
                                <div className="cityAndState">
                                    <span className="city">mumbai</span>
                                    <span className="state">maharashtra</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="placesPage container section2">
                        <div className="placesPage_Category ">
                            <div className="placesPage_Category_typeOfPlace leftbox_container">
                                <span className="placesPage_Category_SectionHeader">Type of Place</span>
                                <div className="typeOfPlaces ">
                                    <span className="typeOfPlace active">all type</span>
                                    <span className="typeOfPlace">Nature</span>
                                    <span className="typeOfPlace">Mountains</span>
                                    <span className="typeOfPlace">Waterfalls</span>
                                    <span className="typeOfPlace">Beach</span>
                                </div>
                            </div>
                            <div className="placesPage_Category_priceRange leftbox_container">
                                <span className="placesPage_Category_SectionHeader">Price Range</span>
                                <div className="placesPage_Category_typeOfPlace_inputFied">
                                    <small>Minimum</small>
                                    <input type="text" placeholder="$ 80" />
                                </div>
                                <small className="to">to</small>
                                <div className="placesPage_Category_typeOfPlace_inputFied">
                                    <small>Maximum</small>
                                    <input type="text" placeholder="$ 800" />
                                </div>
                                <a href=""><span>see more option</span> <i className="fa-solid fa-chevron-right"></i> </a>
                            </div>

                        </div>
                        <div className="placesPage_Places">
                            <PlacesPagePlace
                                img={place2}
                                name="Emerald Bay"
                                location="south Seychelles archipelago"
                                price="$ 250"
                                rating="9.2"
                                review='134'
                            />
                            <PlacesPagePlace
                                img={place3}
                                name="Azure Isle"
                                location="Azure Cove, Islandia"
                                price="$ 320"
                                rating="9.7"
                                review='234'
                            />
                            <PlacesPagePlace
                                img={place4}
                                name="Crimson Cove Isle"
                                location=" Caribbean Sea"
                                price="$ 430"
                                rating="9.1"
                                review='224'
                            />
                            <PlacesPagePlace
                                img={place5}
                                name="Silvershore Atoll"
                                location="Indian Ocean"
                                price="$ 290"
                                rating="9.5"
                                review='258'
                            />
                            <PlacesPagePlace
                                img={place6}
                                name="Enchanted Lagoon Isle"
                                location="Pacific Ocean, southeast of Hawaii"
                                price="$ 220"
                                rating="9.0"
                                review='334'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}