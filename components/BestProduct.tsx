import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import SingleProduct from "./SingleProduct";

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      image: "./products/greenApple.jpg",
      name: "Green Apple",
      price: "$14.99",
      rating: 4,
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
      rating: 5,
    },
    {
      image: "./products/chili.jpg",
      name: "Green Chili",
      price: "$14.99",
      rating: 4,
    },
  ];

  return (
    <section className="w-full px-[150px] pt-28 pb-20 relative flex justify-center flex-col">
      {/* Background */}
      <img
        src="./leapVector.png"
        alt="papeya"
        className="absolute bottom-10 left-0 w-[120px]"
      />
      {/* Header */}
      <div className="flex flex-wrap gap-10 justify-between items-center self-center w-full max-w-[1320px]">
        <h2 className=" my-auto text-4xl font-semibold leading-tight min-w-60 text-zinc-900">
          Best Seller Products
        </h2>
      </div>
      {/* Product */}
      <div className="flex flex-wrap gap-10 items-center justify-center mt-10 w-full">
        <div className="flex gap-5 justify-center">
          {products.map((product, index) => (
            <SingleProduct index={index} product={product}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
