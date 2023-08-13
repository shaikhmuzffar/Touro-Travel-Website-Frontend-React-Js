import React from 'react'
import './blogPost.css'

export default function BlogPost(props) {
    return (
        <div className="blog">
            <div className="blogImg">
                <img src={props.blogImg} alt="" />
            </div>
            <div className="blogInfo">
                <h2 className="blogTitle">
                {props.blogTitle}
                </h2>
                <p className="blogDesc">
                    {props.blogDesc}
                </p>
                <div >
                    <span className="bloggerName">
                        {props.bloggerName}
                    </span>
                    <div className="blogDate">
                        <span>{props.blogDate}</span>
                        <span>&middot;</span>
                        <span>5 min read</span>
                        <span><i class="fa-solid fa-earth-americas"></i></span>
                    </div>
                </div>
            </div>
            <i class="fa-regular fa-bookmark blogSave"></i>
        </div>
    )
}
