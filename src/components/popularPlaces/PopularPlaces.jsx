import React, { useState } from "react"
import './popularPlaces.css'
import SectionHeading from '../sectionHeading/SectionHeading'
import Beach from "../places/Beach"
import Historic from "../places/Historic"
import Mountain from "../places/Mountain"
import Waterfalls from "../places/Waterfalls"


export default function PopularPlaces(props) {
    const [MenuItem,setMenuItem]=useState("beach")
    return (
        <>
            <SectionHeading
                heading="Popular Places"
                menuItem1="Beach"
                menuItem2="Mountain"
                menuItem3="Waterfall"
                menuItem4="Historic"
                setMenuItem={setMenuItem}
            />
            {
                MenuItem ==="beach"?<Beach/>:MenuItem ==="mountain"?<Mountain/>:MenuItem ==="waterfall"?<Waterfalls/>:MenuItem ==="historic"?<Historic/>:<></>
            }
        </>
    )
}

