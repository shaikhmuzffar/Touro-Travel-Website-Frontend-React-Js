import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import SectionHeading from '../../components/sectionHeading/SectionHeading'
import PopularPlaces from '../../components/popularPlaces/PopularPlaces'
import ExplorePlaces from '../../components/explorePlaces/ExplorePlaces'
import Features from '../../components/features/Features'
import Achivements from '../../components/achivements/Achivements'
import OurGallery from '../../components/ourGallery/OurGallery'
import NewsLatter from '../../components/newsLatter/NewsLatter';
import Footer from '../../components/footer/Footer';
import Copyright from '../../components/copyright/Copyright';

export default function Home(){
    return(
        <>
        <Navbar active="home" />
        <Hero/>
        {/* <SectionHeading heading="Popular Places" menuItem1="Beach" menuItem2="Mountain" menuItem3="waterfall" menuItem4="Iceberg" /> */}
        <PopularPlaces/>
        <Features/>
        <ExplorePlaces/>
        <Achivements/>
        <SectionHeading heading="Our Gallery"/>
        <OurGallery/>
        <NewsLatter/>        
        </>
    )
}