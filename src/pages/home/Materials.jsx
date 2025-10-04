import React from 'react'
import materials1 from '../../assets/material1.png'
import materials2 from '../../assets/material2.png'
import materials3 from '../../assets/material3.png'
import Button from "../../component/Button";

const Materials = () => {
  return (
    <section className='section-container my-24 flex flex-col md:flex-row justify-between items-center md:gap-20'>
        
        <div className='md:w-1/2 mx-auto'>
            <h3 className='uppercase font-semibold text-lg text-primary mb-4'>materials</h3>
            <h2 className='capitalize text-4xl font-bold lg:w-[413px] mb-4'>Very serious materials for making furniture</h2>
            <p className='text-secondary  mb-5 lg:w-2/3'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
            <Button  btnText="More info" />
        </div>
        <div className='md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center gap-2 mt-6 md:mt-0'>
            <div className=''>
                <img src={materials1} alt="" className='w-full object-cover'/>
                <img src={materials2} alt="" className='w-full object-cover'/>
            </div>
            <div className='md:col-span-2 col-span-1'>
                <img src={materials3} alt="" className='w-full md:h-[541px] object-cover' />
            </div>
        </div>
        
    </section>
  )
}

export default Materials