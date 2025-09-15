import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

export type Category = {
  image: string;
  name: string;
  count: number;
  isSelected?: boolean;
};
export const categories: Category[] = [
  {
    image: "./catagories/vegetable.png",
    name: "Vegetables",
    count: 165,
    isSelected: false,
  },
  {
    image: "./catagories/fruits.png",
    name: "Fresh Fruit",
    count: 137,
    isSelected: false,
  },
  {
    image: "./catagories/fish.png",
    name: "Fish",
    count: 34,
    isSelected: false,
  },
  {
    image: "./catagories/meat.png",
    name: "Meat",
    count: 165,
    isSelected: false,
  },
  {
    image: "./catagories/softDrink.png",
    name: "Water and Drinks",
    count: 48,
    isSelected: false,
  },
  {
    image: "./catagories/snacks.png",
    name: "Snacks",
    count: 165,
    isSelected: false,
  },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className="relative flex z-10 items-center justify-center px-[100px] gap-4 py-28 mt-8 w-full shadow-sm bg-gradient-to-b from-[#F2F5F3] to-[#ffff]">
      {/* Decorative element */}
      <img
        src="./leap.png"
        className="object-contain aspect-[1.13] w-[79px] absolute -top-3 left-20"
        alt="Decorative element"
      />
      <img
        src="./bottleBG.png"
        className="object-contain w-[150px] absolute right-0 bottom-10"
        alt="Decorative element"
      />
      {/* Arrow */}
      <div className="flex shrink-0 justify-center items-center  mt-28 bg-white rounded-full border border-solid border-neutral-200 fill-white h-[45px] stroke-[1px] stroke-neutral-200 w-[45px]">
        <FaArrowLeft />
      </div>
      <div className="flex z-10 flex-col">
        {/* Header */}
        <div className="flex flex-wrap gap-10 justify-between items-center self-center mt-9 w-full max-w-[1320px] max-md:max-w-full">
          <h2 className="self-stretch my-auto text-4xl font-semibold leading-tight min-w-60 text-zinc-900 max-md:max-w-full">
            Shop by Top Categories
          </h2>
          <button className="flex gap-3 justify-center items-center self-stretch my-auto text-base font-medium text-green-600 rounded-[43px]">
            View All
          </button>
        </div>
        {/* Catagories */}
        <div className="flex flex-wrap gap-2 mt-10 text-center">
          {categories.map((category, index) => (
            <Link
              to={`shop/?cat=${category.name.toLowerCase().replaceAll(" ", "_")}`}
              key={index}
              className={`group transition-all w-[200px] flex flex-col items-center pt-8 pb-6 bg-white rounded-md border border-solid hover:border-green-800 hover:shadow-sm border-gray-200`}
            >
              <img
                src={category.image}
                className="object-contain w-20 aspect-square"
                alt={category.name}
              />
              <div className="flex z-10 flex-col items-center mt-5 max-w-full w-[200px]">
                <h3
                  className={`text-lg font-medium group-hover:text-green-800 text-zinc-900 transition-all`}
                >
                  {category.name}
                </h3>
                <p className="mt-1.5 text-sm text-zinc-500">
                  {category.count} Products
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex shrink-0 mt-28 justify-center items-center bg-white rounded-full border border-solid border-neutral-200 fill-white h-[45px] stroke-[1px] stroke-neutral-200 w-[45px]">
        <FaArrowRight />
      </div>
    </section>
  );
};

export default CategoriesSection;
