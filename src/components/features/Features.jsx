import './features.css'
import featureImg from '../../images/features/featureimg.png'
import flight from '../../images/features/flight.png'
import food from '../../images/features/food.png'
import hotel from '../../images/features/hotel.png'
import wifi from '../../images/features/wifi.png'
export default function Features() {
    return (
        <>
        <div className="featuresSection marginTop4">
            <div className="features container">
                <div className="featureImage">
                    <img src={featureImg} alt="" />
                    <div className="imgCircle"></div>
                </div>
                <div className="featureInfo">
                    <h2 className='featureTitle'>Explore all the corners of the World with us.</h2>
                    <p className='featureDescription' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus odit quibusdam omnis eaque saepe optio assumenda molestias tenetur! Repellat, tempora?</p>
                    <div className="featureContainer">
                        <div className="featureItem">
                            <div className='featureItemImg'><img src={flight} alt="" /></div><span >Flight</span>
                        </div>
                        <div className="featureItem">
                        <div className='featureItemImg'><img src={hotel} alt="" /></div> <span>Hotel</span>
                        </div>
                        <div className="featureItem">
                        <div className='featureItemImg'><img src={wifi} alt="" /></div> <span>Wifi</span>
                        </div>
                        <div className="featureItem">
                        <div className='featureItemImg'><img src={food} alt="" /></div> <span>Food</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}