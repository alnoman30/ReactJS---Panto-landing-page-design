import React from 'react'

const Products = ({heading}) => {
  const categories = [
    "Chair","Beds", "Sofa", "Lamps"
  ];
  return (
    <div className='section-container'>
        <h2 className='text-4xl font-bold text-center my-8'>{heading}</h2>
      {/* Category tabs */}
      <div className='bg-[#EEEEEE] max-w-md mx-auto rounded-full p-2 md:p-2.5 py-2 md:py-3 mb-16'>
        <div className="flex items-center justify-between gap-2 ">
          {
          categories.map((category,index)=>(
            <button key={index} className='py-1.5 px-3 md:px-6 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer'>{category}</button>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Products