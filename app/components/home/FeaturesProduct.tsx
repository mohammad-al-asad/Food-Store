import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SingleProduct from "../SingleProduct";

export type Product = {
  image: string;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  sale?: boolean;
  salePercent?: string;
};

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      image: "./products/greenApple.jpg",
      name: "Green Apple",
      price: "$14.99",
      originalPrice: "$20.99",
      rating: 4,
      sale: true,
      salePercent: "50%",
    },
    {
      image: "./products/cabbage.jpg",
      name: "Chanise Cabbage",
      price: "$14.99",
      rating: 3,
    },
    {
      image: "./products/greenCapsicum.jpg",
      name: "Green Capsicum",
      price: "$14.99",
      rating: 4,
    },
    {
      image: "./products/ladiesFinger.jpg",
      name: "Ladies Finger",
      price: "$14.99",
      rating: 5,
    },
  ];

  return (
    <section className="w-full px-[150px] pt-28 pb-20 relative flex justify-center flex-col">
      {/* Background */}
      <img
        src="./papeya.png"
        alt="papeya"
        className="absolute bottom-10 left-0 w-[120px]"
      />
      {/* Header */}
      <div className="flex flex-wrap gap-10 justify-between items-center self-center w-full max-w-[1320px]">
        <h2 className=" my-auto text-4xl font-semibold leading-tight min-w-60 text-zinc-900">
          Featured Products
        </h2>
        <button className="flex gap-3 justify-between items-center self-stretch my-auto text-base font-medium text-green-600 rounded-[43px]">
          View All
          <FaArrowRight />
        </button>
      </div>
      {/* Product */}
      <div className="flex flex-wrap gap-10 items-center justify-center mt-10 w-full">
        <div className="flex gap-5 justify-center">
          {products.map((product: Product, index: number) => (
            <SingleProduct key={index} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
