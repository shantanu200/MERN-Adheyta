import React from 'react'
import Navbar from "./SubComponents/Navbar"
import HomeSection from './SubComponents/HomeSection'
import Cards from './SubComponents/Cards';
import Footer from './SubComponents/Footer';

const NewPage = () => {
  return (
    <>
    <Navbar />
    <HomeSection />
    <Cards />
    <Footer />
    </>
  )
}

export default NewPage