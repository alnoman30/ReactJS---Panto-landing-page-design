import React from "react";
import bannerImg from "../../assets/banner.png";
import Products from "./Products";
import Hero from "../home/Hero";

const Shop = () => {
  return (
    <section className="min-h-screen">
      <div
        className=" h-[400px] bg-center bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-4xl font-bold">Shop Our Products</h1>
      </div>
      <Products heading="What's Your Choice" />
    </section>

  );
};

export default Shop;
