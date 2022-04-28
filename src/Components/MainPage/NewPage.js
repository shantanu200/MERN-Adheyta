import React from 'react'
import Navbar from "./SubComponents/Navbar"
import HomeSection from './SubComponents/HomeSection'
import Cards from './SubComponents/Cards';
import Footer from './SubComponents/Footer';
import InformationSection from './SubComponents/InformationSection';

const NewPage = () => {
  return (
    <>
    <Navbar />
    <HomeSection />
    <Cards />
    {/* <InformationSection /> */}
    <Footer />
    </>
  )
}

export default NewPage