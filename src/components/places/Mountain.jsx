import React from 'react'
import Place from '../place/Place'
import mountain1 from '../../images/popularPlaces/place7.jpg'
import mountain2 from '../../images/popularPlaces/place11.jpg'
import mountain3 from '../../images/popularPlaces/place12.jpg'
import mountain4 from '../../images/popularPlaces/place21.jpg'
import mountain5 from '../../images/popularPlaces/place15.jpg'

export default function Mountain() {
    const mountains = [
        {
            placeImg: mountain1,
            placeName: "Mount Rainier",
            placeDuration: "12 June - 20 June, 2023",
            placeLocation: "Washington, USA",
            placeRating: "4.5",
            placePrice: 1800
        },        
        {
            placeImg: mountain2,
            placeName: "Rocky Mountains",
            placeDuration: "20 July - 30 July, 2023",
            placeLocation: "Canada",
            placeRating: "4.7",
            placePrice: 1200
        },
        {
            placeImg: mountain3,
            placeName: "Mount Kilimanjaro",
            placeDuration: "1 October - 10 October, 2023",
            placeLocation: "Tanzania",
            placeRating: "4.6",
            placePrice: 2000
        },
        {
            placeImg: mountain4,
            placeName: "Andes Mountains",
            placeDuration: "15 November - 25 November, 2023",
            placeLocation: "South America",
            placeRating: "4.8",
            placePrice: 1800
        },
        {
            placeImg: mountain5,
            placeName: "Mount Fuji",
            placeDuration: "7 May - 14 May, 2023",
            placeLocation: "Japan",
            placeRating: "4.7",
            placePrice: 2500
        }
    ];
    return (
        <div className='placesBox container'>
            {
                mountains.map((mountain) => <Place key={mountain.placeName} p={mountain.placeImg} pn={mountain.placeName} pl={mountain.placeLocation} pr={mountain.placeRating} pd={mountain.placeDuration} tp={mountain.placePrice} />)
            }
            {/* <Place/> */}
        </div>
    )
}
