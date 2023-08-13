import React from "react";
import Navbar from '../../components/navbar/Navbar'
import ourStoryImg from '../../images/about/ourStory.jpg'
import member2 from '../../images/about/member2.jpg'
import member3 from '../../images/about/member3.jpg'
import member4 from '../../images/about/member4.jpg'
import member1 from '../../images/about/member1.jpg'
import Member from "../../components/member/Member";
import './about.css';
export default function About() {
    const members =[
        {
            img:member1,
            name:"mariam Raheman",
            postion:"CEO"
        },
        {
            img:member2,
            name:"pit hemsworth",
            postion:"co-founder"
        },
        {
            img:member3,
            name:"anna Marie",
            postion:"UI/UX Designer"
        },
        {
            img:member4,
            name:"Muzffar Shaikh",
            postion:"Web Devloper & Founder"
        },
        
    ]
    return (
        <>
            <div className="aboutSection">
                <Navbar active="about" />
                <div className="about  marginTop6">
                    <div className="aboutSectionHero ">
                        <h1 className="AboutUsTitle">About Us</h1>
                    </div>
                    <div className="ourStory container marginTop4">
                        <div className="ourStoryLeftBox ">
                            <h2>Our Story</h2>
                            <p>"Embarking on daring journeys, defying boundaries, and unlocking the secrets of uncharted realms. An intrepid explorer, driven by an insatiable curiosity to discover the world's hidden wonders. Fearless in the face of challenges, inspiring others to embrace the thrill of exploration. Charting the course to endless possibilities."</p>
                        </div>
                        <div className="ourStoryRightBox">
                            <img src={ourStoryImg} alt="" width="300px" />
                        </div>
                    </div>
                    <div className="allMembers container marginTop4">
                        <h2>All Members</h2>
                        <div className="members">
                            {
                                members.map((m)=><Member img={m.img} name={m.name} position={m.postion} />)
                            }
                        </div>
                    </div>
                    <div className="partner marginTop4">
                        <div className="partnerBox container">
                            <h3>Do you want to be part of team?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates, ex hic a beatae repellendus. Quia delectus similique tempore vitae suscipit distinctio iure, sit natus, cumque voluptatum quod quae officiis!</p>
                            <a href="" className="btn-Primary">Join Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}