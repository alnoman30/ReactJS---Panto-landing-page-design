import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "../../component/Rating";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from 'swiper/modules';
import { reviews } from "../../utils/reviews";

const Testimonials = () => {
  return (
    <section className="section-container px-8">
      <div className="text-center mb-12">
        <h3 className="uppercase font-semibold text-lg text-primary mb-4">
          Testimonials
        </h3>
        <h2 className="capitalize text-4xl font-bold  mb-4">
          Our Client Reviews
        </h2>
      </div>
      {/* Testimonial cards */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
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
        modules={[Pagination, Navigation]}
        className="md:max-w-7xl mx-auto relative rounded"
      >
        {reviews.map((item, index) => (
          <SwiperSlide
            className=" bg-no-repeat bg-cover rounded-lg"
            style={{ backgroundImage: `url(${item.coverImg})` }}
          >
            <div className="md:h-[547px] flex  justify-center items-center mb-4">
              <div className="mt-16 mb-5 bg-white rounded-xl md:w-4/5 w-full p-4 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-20 absolute bg-white p-2 rounded-full -top-5 left-1/2 -translate-x-1/2 ring-2 ring-primary object-cover"
                />
                <div className="mt-16 text-center">
                  <h3 className="text-lg font-semibold dark:text-black">
                    {item.name}
                  </h3>
                  <p className=" mb-3 font-normal text-xs text-gray-500 dark:text-black">{item.designation}</p>
                  <p className="text-gray-500 dark:text-black mb-4">
                    "{item.review}"
                  </p>

                  <div className="w-full mx-auto mb-2 flex items-center justify-center text-center">
                    <Rating rating={item.rating} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
