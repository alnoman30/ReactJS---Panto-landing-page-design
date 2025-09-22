import React from 'react'
import { getImageUrl } from '../../utils/getImageUrl'
import Rating from '../../component/Rating'
import { FiPlus } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className='rounded-[20px] shadow-sm bg-red dark:bg-black'>
      {/* Image section */}
      <div className='bg-[#FAFAFA]'>
        <img
          src={getImageUrl(`${product.imageUrl}`)}
          alt={product.name}
          className="w-full h-full object-cover px-8 py-2 rounded"
        />
      </div>

      {/* Content section */}
      <div className='p-6'>
        <h4 className='text-base mb-1'>{product.category}</h4>
        <h3 className='font-semibold text-xl mb-2'>{product.name}</h3>
        <Rating rating={product.rating} />

        <div className='mt-5 flex justify-between items-center'>
          <p className='text-secondary dark:text-white font-bold text-lg'>
            <sup>$</sup> <span>{product.price}</span>
          </p>
          <button className='bg-secondary text-white p-2 rounded-full hover:bg-primary transition-colors cursor-pointer'>
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
