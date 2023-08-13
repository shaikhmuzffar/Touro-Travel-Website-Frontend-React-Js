import React from 'react'
import Place from '../place/Place'
import waterfalls1 from '../../images/popularPlaces/place8.jpg'
import waterfalls2 from '../../images/popularPlaces/place10.jpg'
import waterfalls3 from '../../images/popularPlaces/place17.jpg'
import waterfalls4 from '../../images/popularPlaces/place19.jpg'

export default function Waterfalls() {
    const waterfalls = [
        {
            placeImg: waterfalls1,
            placeName: "Niagara Falls",
            placeDuration: "5 July - 10 July, 2023",
            placeLocation: "Ontario, Canada",
            placeRating: "4.9",
            placePrice: 800
        },
        {
            placeImg: waterfalls2,
            placeName: "Victoria Falls",
            placeDuration: "15 September - 25 September, 2023",
            placeLocation: "Zambia / Zimbabwe",
            placeRating: "4.8",
            placePrice: 1200
        },
        {
            placeImg: waterfalls3,
            placeName: "Iguazu Falls",
            placeDuration: "20 May - 30 May, 2023",
            placeLocation: "Argentina / Brazil",
            placeRating: "4.7",
            placePrice: 1000
        },
        {
            placeImg: waterfalls4,
            placeName: "Angel Falls",
            placeDuration: "3 November - 10 November, 2023",
            placeLocation: "Venezuela",
            placeRating: "4.9",
            placePrice: 1500
        }
    ];
    return (
        <div className='placesBox container'>
            {
                waterfalls.map((waterfall) => <Place key={waterfall.placeName} p={waterfall.placeImg} pn={waterfall.placeName} pl={waterfall.placeLocation} pr={waterfall.placeRating} pd={waterfall.placeDuration} tp={waterfall.placePrice} />)
            }
            {/* <Place/> */}
        </div>
    )
}
