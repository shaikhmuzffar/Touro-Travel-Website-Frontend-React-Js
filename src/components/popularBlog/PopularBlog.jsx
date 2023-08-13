import React from 'react'
import './popularBlog.css'
export default function PopularBlog(props) {
    return (
        <div className="popularPost">
            <h2 className="popularPostNumber">
            {props.PostNumber}
            </h2>
            <div className="popularPostInfo">
                <span className="popularPostName">{props.PostName}</span>
                <p className="popularPostBlogger">{props.PostBlogger}</p>
                <span className="popularPostDate">{props.PostDate} &middot; 3 min read <i class="fa-solid fa-earth-americas"> </i></span>
            </div>
        </div>
    )
}
