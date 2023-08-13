import React from 'react'
import Place from '../place/Place'
import hist1 from '../../images/popularPlaces/place23.jpg'
import hist2 from '../../images/popularPlaces/place7.jpg'
import hist3 from '../../images/popularPlaces/place9.jpg'
import hist4 from '../../images/popularPlaces/place14.jpg'
import hist5 from '../../images/popularPlaces/place18.jpg'
import hist6 from '../../images/popularPlaces/place24.jpg'
import hist7 from '../../images/popularPlaces/place16.jpg'
import hist8 from '../../images/popularPlaces/place13.jpg'

export default function Historic() {
    const historic = [
        {
            placeImg: hist1,
            placeName: "The Colosseum",
            placeDuration: "10 August - 17 August, 2023",
            placeLocation: "Rome, Italy",
            placeRating: "4.8",
            placePrice: 1200
        },  
        {
            placeImg: hist2,
            placeName: "The Great Wall of China",
            placeDuration: "20 July - 30 July, 2023",
            placeLocation: "Beijing, China",
            placeRating: "4.7",
            placePrice: 1800
        },         
        {
            placeImg: hist3,
            placeName: "Machu Picchu",
            placeDuration: "5 September - 15 September, 2023",
            placeLocation: "Cusco, Peru",
            placeRating: "4.9",
            placePrice: 2000
        },
        {
            placeImg: hist4,
            placeName: "The Pyramids of Giza",
            placeDuration: "1 October - 10 October, 2023",
            placeLocation: "Cairo, Egypt",
            placeRating: "4.6",
            placePrice: 2500
        },
        {
            placeImg: hist5,
            placeName: "Petra - The Rose City",
            placeDuration: "15 November - 25 November, 2023",
            placeLocation: "Ma'an, Jordan",
            placeRating: "4.8",
            placePrice: 2200
        },
        {
            placeImg: hist6,
            placeName: "The Taj Mahal",
            placeDuration: "3 September - 10 September, 2023",
            placeLocation: "Agra, India",
            placeRating: "4.9",
            placePrice: 1800
        },
        {
            placeImg: hist7,
            placeName: "London Bridge",
            placeDuration: "1 November - 7 November, 2023",
            placeLocation: "London, United Kingdom",
            placeRating: "4.7",
            placePrice: 1300
        },
        {
            placeImg: hist8,
            placeName: "Statue of Liberty",
            placeDuration: "20 October - 27 October, 2023",
            placeLocation: "New York City, USA",
            placeRating: "4.9",
            placePrice: 1800
        }
        
        
    ];
    return (
        <div className='placesBox container'>
            {
                historic.map((hist) => <Place key={hist.placeName} p={hist.placeImg} pn={hist.placeName} pl={hist.placeLocation} pr={hist.placeRating} pd={hist.placeDuration} tp={hist.placePrice} />)
            }
            {/* <Place/> */}
        </div>
    )
}
