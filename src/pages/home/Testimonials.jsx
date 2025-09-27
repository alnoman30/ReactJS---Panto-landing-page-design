import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { reviews } from '../../utils/reviews';

const Testimonials = () => {
  return (
    <section className='section-container px-8'>
        <div className='text-center mb-12'>
            <h3 className='uppercase font-semibold text-lg text-primary mb-4'>Testimonials</h3>
            <h2 className='capitalize text-4xl font-bold  mb-4'>Our Client Reviews</h2>
        </div>
        {/* Testimonial cards */}
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            reviews.map((item,index)=>(
                <SwiperSlide key={index} className='bg-no-repeat bg-cover rounded-lg' style={{backgroundImage: `url(${item.coverImg})`}}>
                    <div className='md:h-[547px] flex justify-center items-end mb-4 '>
                        <div className='mt-16 mb-5 bg-white md:w-4/5 w-full p-4 rounded-lg relative justify-end'>
                            <img src={item.image} alt="" className='size-20 bg-white p-2 rounded-full flex items-center justify-center absolute -top-10 left-1/2 -translate-x-1/2' />
                            <div className='mt-16 text-center'>
                                <h3 className='text-lg font-semibold text-secondary dark:text-black'>{item.name}</h3>
                                <p className='mt-2 font-normal text-xs text-gray-500'>{item.designation}</p>
                                <p className='mt-3 font-normal text-lg'>"{item.review}"</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials