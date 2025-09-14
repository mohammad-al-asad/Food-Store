import React from "react";
import type { Product } from "./FeaturesProduct";
import DealsCard from "./DealsCard";
import { FaArrowRight } from "react-icons/fa";

const ProductListsSidebar: React.FC = () => {
  const hotDeals: Product[] = [
    {
      image: "./products/greenApple.jpg",
      name: "Green Apple",
      price: "$14.99",
      rating: 4,
    },
    {
      image: "./products/malta.jpg",
      name: "Indian Malta",
      price: "$12.99",
      rating: 3,
    },
    {
      image: "./products/lettuce.jpg",
      name: "Green Lettuce",
      price: "$14.99",
      rating: 4,
    },
  ];

  const bestSeller: Product[] = [
    {
      image: "./products/eggplant.jpg",
      name: "Eggplant",
      price: "$14.99",
      rating: 5,
    },
    {
      image: "./products/greenCapsicum.jpg",
      name: "Red Capsicum",
      price: "$14.99",
      originalPrice: "$20.99",
      rating: 4,
    },
    {
      image: "./products/tomato.jpg",
      name: "Red Tomato",
      price: "$13.99",
      rating: 5,
    },
  ];

  const topRated: Product[] = [
    {
      image: "./products/potato.jpg",
      name: "Big Potatos",
      price: "$12.99",
      rating: 4,
    },
    {
      image: "./products/corn.jpg",
      name: "Corn",
      price: "$14.99",
      originalPrice: "$20.99",
      rating: 3,
    },
    {
      image: "./products/cauliflower.jpg",
      name: "Fresh cauliflower",
      price: "$14.99",
      rating: 4,
    },
  ];

  return (
    <section className="mt-10 ml-6 w-full m-32">
      <div className="flex gap-5 justify-center">
        <div className="flex flex-wrap gap-6 items-start mr-0">
          <div className="min-w-60 w-[312px]">
            <h3 className="text-2xl font-medium text-zinc-900">Hot Deals</h3>
            {hotDeals.map((product: Product, index: number) => (
              <DealsCard key={index} product={product} />
            ))}
          </div>

          <div className="min-w-60 w-[312px]">
            <h3 className="text-2xl font-medium text-zinc-900">Best Seller</h3>
            {bestSeller.map((product: Product, index: number) => (
              <DealsCard key={index} product={product} />
            ))}
          </div>

          <div className="min-w-60 w-[312px]">
            <h3 className="text-2xl font-medium text-zinc-900">Top Rated</h3>
            {topRated.map((product: Product, index: number) => (
              <DealsCard key={index} product={product} />
            ))}
          </div>
        </div>

        <div className="relative flex items-center flex-col pt-8 ml-5 w-[22%]  h-[432px]">
          <img
            src="./discount.jpg"
            alt="discount"
            className="absolute top-0 bottom-0 left-0 right-0 -z-10 rounded-lg"
          />
          <p>Hot Sale</p>
          <h2 className="text-[32px] ">
            <span className="font-bold">Saved 37%</span>On
          </h2>
          <h2 className="text-[32px]">Every Order</h2>
          <button className="rounded-3xl bg-white p-4 text-green-500 font-bold flex justify-center gap-1 items-center mt-4">
            Shop Now <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductListsSidebar;
