import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
    <Navbar></Navbar>
     <Banner></Banner>
     <Slider></Slider>
     <Footer></Footer>
    </div>
  )
}
