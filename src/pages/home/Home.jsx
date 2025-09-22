import React from 'react'
import Hero from './Hero'
import WhyChoose from './WhyChoose'
import Products from '../shop/Products'

const Home = () => {
  return (
    <>
      <Hero/>
      <WhyChoose/>
      <Products heading="Best Selling Product"/>
    </>
  )
}

export default Home