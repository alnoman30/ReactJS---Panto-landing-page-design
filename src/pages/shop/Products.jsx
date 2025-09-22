import React, { useState } from "react";
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";
import btnIcon from "../../assets/button-icon.png";

const Products = ({ heading }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, selectedSetCategory] = useState("Chair");
  const [visibleProducts, setvisibleProducts] = useState(4);

  const filteredProducts = products.filter(
    (item) => item.category === selectedCategory
  );

  const loadMoreProducts = () => {
    setvisibleProducts((prev) => prev + 4);
  };

  return (
    <div className="section-container ">
      <h2 className="text-4xl font-bold text-center my-8">{heading}</h2>
      {/* Category tabs */}
      <div className="bg-[#EEEEEE] max-w-md mx-auto rounded-full p-2 md:p-2.5 py-2 md:py-3 mb-16">
        <div className="flex items-center justify-between gap-2 ">
          {categories.map((category, index) => (
            <button
              onClick={() => {
                selectedSetCategory(category);
                setvisibleProducts(4);
              }}
              key={index}
              className={`py-1.5 px-3 md:px-6 rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer ${
                selectedCategory === category
                  ? "bg-white text-primary"
                  : "text-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {filteredProducts.slice(0, visibleProducts).map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
      {/* Load more products button */}
      {visibleProducts < filteredProducts.length && (
        <div className="flex justify-center items-center mt-8">
          <button onClick={loadMoreProducts} className="text-base font-semibold text-primary flex items-center gap-1 cursor-pointer">
            <p>View all</p>
            <img src={btnIcon} alt="btn icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
