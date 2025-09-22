import React from 'react'
import experienceImg from '../../assets/expricences.png'

const Experiences = () => {
  return (
    <section className='section-container my-24 flex flex-col md:flex-row justify-between items-center md:gap-20'>
        <div className='md:w-1/2 md:h-[541px]'>
            <img src={experienceImg} alt="" />
        </div>
        <div className='md:w-1/2 mx-auto'>
            <h3 className='uppercase font-semibold text-lg text-primary mb-4'>experiences</h3>
            <h2 className='capitalize text-4xl font-bold md:w-[415px] mb-4'>we provide you the best experience</h2>
            <p className='text-secondary dark:text-white mb-5 lg:w-2/3'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
        </div>
        
    </section>
  )
}

export default Experiences