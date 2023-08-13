import React from 'react'

export default function Achivement(props) {
    return (
        <div className="achivement">
            <h2 className="achivementTitle">
                {props.number}
            </h2>
            <span className="achivementSubTitle">
                {props.text}
            </span>
        </div>
    )
}
