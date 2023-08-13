import React from 'react'
import './sectionHeading.css'
import { NavLink } from 'react-router-dom'
export default function SectionHeading(props) {
    return (
        <>
            <div className="sectionHeadingSection marginTop4">
                <div className="sectionHeading container">
                    <h3 className='sectionHeadingTitle'>{props.heading}</h3>
                    <div className="sectionHeadingLinks">
                        <ul className="sectionHeadingMenu">
                            <li className='Link' onClick={()=>props.setMenuItem("beach")}>{props.menuItem1}</li>
                            <li className='Link' onClick={()=>props.setMenuItem("mountain")} >{props.menuItem2}</li>
                            <li className='Link' onClick={()=>props.setMenuItem("waterfall")} >{props.menuItem3}</li>
                            <li className='Link'onClick={()=>props.setMenuItem("historic")} >{props.menuItem4}</li>
                        </ul>
                        <NavLink className='viewAll' to="/places">View all</NavLink>
                    </div>
                </div>
            </div>
        </>

    )
}