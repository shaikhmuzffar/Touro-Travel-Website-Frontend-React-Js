import React from 'react'
import Place from '../place/Place'
import beach1 from '../../images/popularPlaces/island1.jpg'
import beach2 from '../../images/popularPlaces/island2.jpg'
import beach3 from '../../images/popularPlaces/island3.jpg'
import beach4 from '../../images/popularPlaces/island4.jpg'
import beach5 from '../../images/popularPlaces/island5.jpg'
import beach6 from '../../images/popularPlaces/island6.jpg'

export default function Beach() {
    const Beaches = [
        {
            placeImg: beach1,
            placeName: "Waikiki Beach",
            placeDuration: "10 August - 17 August, 2023",
            placeLocation: "Honolulu, Hawaii",
            placeRating: "4.8",
            placePrice: 1500
        },

        {
            placeImg: beach2,
            placeName: "Cannon Beach",
            placeDuration: "22 September - 29 September, 2023",
            placeLocation: "Oregon, USA",
            placeRating: "4.7",
            placePrice: 1100
        },

        {
            placeImg: beach3,
            placeName: "Anse Source d'Argent",
            placeDuration: "5 November - 12 November, 2023",
            placeLocation: "La Digue, Seychelles",
            placeRating: "4.9",
            placePrice: 1800
        },

        {
            placeImg: beach4,
            placeName: "Whitehaven Beach",
            placeDuration: "20 December - 27 December, 2023",
            placeLocation: "Queensland, Australia",
            placeRating: "4.9",
            placePrice: 1400
        },
        {
            placeImg: beach5,
            placeName: "Bora Bora",
            placeDuration: "14 January - 21 January, 2024",
            placeLocation: "French Polynesia",
            placeRating: "4.9",
            placePrice: 2500
        },
        {
            placeImg: beach6,
            placeName: "Navagio Beach",
            placeDuration: "2 March - 9 March, 2024",
            placeLocation: "Zakynthos, Greece",
            placeRating: "4.8",
            placePrice: 1350
        }
    ];
    return (
        <div className='placesBox container'>
            {
                Beaches.map((beach) => <Place key={beach.placeName} p={beach.placeImg} pn={beach.placeName} pl={beach.placeLocation} pr={beach.placeRating} pd={beach.placeDuration} tp={beach.placePrice} />)
            }
            {/* <Place/> */}
        </div>
    )
}
