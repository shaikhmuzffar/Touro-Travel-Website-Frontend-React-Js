import React, { useState } from "react"
import SectionHeading from '../sectionHeading/SectionHeading'
import Beach from "../places/Beach"
import Historic from "../places/Historic"
import Mountain from "../places/Mountain"
import Waterfalls from "../places/Waterfalls"

export default function ExplorePlaces() {
    const [MenuItem,setMenuItem]=useState("historic")
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