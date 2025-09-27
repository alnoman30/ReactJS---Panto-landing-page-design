import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Products from '../shop/Products'
import Experiences from './Experiences'
import Materials from './Materials'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <>
      <Hero/>
      <WhyChoose/>
      <Products heading="Best Selling Product"/>
      <Experiences />
      <Materials/>
      <Testimonials/>
    </>
  )
}

export default Home