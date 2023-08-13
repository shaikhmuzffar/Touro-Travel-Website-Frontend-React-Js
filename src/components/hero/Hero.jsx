import React from "react"
import './hero.css'
import heroVid from '../../video/heroVid.mp4'
import star from '../../images/hero/star.png'
import plane from '../../images/hero/plane.png'
import HeroImg from '../../images/hero/HeroImg.png'
export default function Hero() {
    return (
        <>
            <div className="heroSection marginTop4">
                <div className="hero container">
                    <div className="overlay"></div>
                    {/* <video src={heroVid} autoPlay loop muted /> */}
                    <div className="heroInfo">
                        <h1>Explore</h1>
                        <span><h1>Beautiful</h1><img src={star} alt="" /> </span>
                        <h1>World!</h1>
                        <p className="heroDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quas repellendus tenetur eveniet explicabo aut non alias adipisci a perferendis.</p>
                    </div>
                    <div className="heroImg">
                        <img src={HeroImg} alt="" />
                        <div className="imgCircle"></div>
                    </div>
                    <div className="heroInput">
                        <div className="wrapper">
                            <div className="inputBox cityBox">
                                <label htmlFor="">Located in</label>
                                <select className="city" name="" id="">
                                    <option value="">India</option>
                                    <option value="">UAE</option>
                                    <option value="">Europ</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label htmlFor="">Date</label>
                                <input className="date" type="date" name="" id="" />
                            </div>
                            <div className="inputBox">
                                <label htmlFor="">Price Range</label>
                                <select className="price" name="" id="">
                                    <option value="">$400 -600$</option>
                                    <option value="">$700 -900$</option>
                                    <option value="">$900 -1200$</option>
                                </select>
                            </div>
                        </div>
                        <button className="btn-Primary">search</button>
                    </div>
                    <img className="plane" src={plane} alt="" width="100px" />
                </div>
            </div>
        </>
    )
}