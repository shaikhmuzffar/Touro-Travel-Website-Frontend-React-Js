import "./newsLatter.css";
import React from "react";
export default function NewsLatter(){
    return(
        <>
        <div className="newslatterSection marginTop4">
            <div className="newslatter container">
                <h1>Sign up to our newslatter</h1>
                <div className="newslatterInputbox">
                    <input type="text" placeholder="Enter Your Email Here"/>
                    <button className="btn-Primary">Submit</button>
                </div>
            </div>
        </div>
        </>
    )
}