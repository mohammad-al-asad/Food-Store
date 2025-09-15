import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SingleProduct from "../SingleProduct";
import productData from "~/json/product.json";

export type Product = {
  id: string;
  name: string;
  sale?: boolean;
  description: string;
  price: {
    original_price: string;
    discounted_price: string;
    discount_percentage: number;
  };
  availability: string;
  rating: { value: number; quantity: number };
  sku: string;
  brand: string;
  category: string;
  tags: string[];
  additional_information: {
    weight: string;
    organic: boolean;
    nutrition: string;
  };
  images: string[];
};

const FeaturedProduct: React.FC = () => {

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
          {productData.map((product, index) =>
            index > 3 ? null : (
              <SingleProduct
                key={`${product.name}-${index}`}
                product={product}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
