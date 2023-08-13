import './achivements.css'
import Achivement from '../achivement/Achivement'
export default function Achivements() {
    const achivements =[
        {
            number:"24+",
            text:"cities"
        },
        {
            number:"700+",
            text:"Places"
        },
        {
            number:"200+",
            text:"Hotels"
        },
        {
            number:"2k+",
            text:"Reviews"
        },
    ]
    return (
        <>
            <div className="achivementsSection marginTop4">
                <div className="achivements container">
                    {
                        achivements.map((ach,id)=><Achivement  number={ach.number} key={id} text={ach.text} />)
                    }
                    
                </div>
            </div>
        </>
    )
}