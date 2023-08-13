import React from 'react'

export default function Member(props) {
    return (
        <div className="member">
            <img src={props.img} alt="" />
            <div className="memberInfo">
                <h3>{props.name}</h3>
                <span>{props.position}</span>
                <span className="memberSocialMedia">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-pinterest"></i>
                </span>
            </div>
        </div>
    )
}
