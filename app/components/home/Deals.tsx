import React from "react";
import type { Product } from "./FeaturesProduct";
import DealsCard from "../DealsCard";
import { FaArrowRight } from "react-icons/fa";
import productData from "~/json/product.json";

const ProductListsSidebar: React.FC = () => {
  return (
    <section className="mt-10 ml-6 w-full m-32">
      <div className="flex gap-5 justify-center">
        <div className="flex flex-wrap gap-6 items-start mr-0">
          <div className="min-w-60 w-[312px]">
            <h3 className="text-2xl font-medium text-zinc-900">Hot Deals</h3>
            {productData.map((product: Product, index: number) =>
              index < 5 || index > 7 ? null : <DealsCard product={product} />
            )}
          </div>

          <div className="min-w-60 w-[312px]">
            <h3 className="text-2xl font-medium text-zinc-900">Best Seller</h3>
            {productData.map((product: Product, index: number) =>
              index < 1 || index > 3 ? null : <DealsCard product={product} />
            )}
          </div>

          <div className="min-w-60 w-[312px]">
            <h3 className="text-2xl font-medium text-zinc-900">Top Rated</h3>
            {productData.map((product: Product, index: number) =>
              index < 3 || index > 5 ? null : <DealsCard product={product} />
            )}
          </div>
        </div>

        <div className="relative flex items-center flex-col pt-8 ml-5 w-[22%]  h-[432px]">
          <img
            src="./banner/banner-3.jpg"
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
