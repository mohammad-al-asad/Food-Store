import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <section className="flex w-full h-[695px] bg-[#EDF2EE] relative bg-[url(./bg.png)] bg-no-repeat bg-contain items-center justify-center gap-5">
      {/* Arrow */}
      <div className="flex shrink-0 justify-center items-center bg-white rounded-full border border-solid border-neutral-200 fill-white h-[45px] stroke-[1px] stroke-neutral-200 w-[45px]">
        <FaArrowLeft />
      </div>
      {/* Image */}
      <img
        src="./vegetable.png"
        className="w-[742px] h-[500px]"
        alt="Fresh organic vegetables background"
      />
      {/* Texts */}
      <div className="flex flex-col items-start right-10 top-5">
        <p className="text-sm font-medium tracking-wide leading-none text-center text-green-600 uppercase">
          Welcome to shopery
        </p>
        <h2 className="self-stretch mt-2 text-7xl font-semibold leading-[86px] text-zinc-900">
          Fresh & Healthy
          <br />
          Organic Food
        </h2>
        <div className="flex flex-col items-start mt-7 max-w-full w-[363px]">
          <h3 className="text-3xl leading-tight text-zinc-900">
            Sale up to{" "}
            <span style={{ fontWeight: 600, color: "rgba(255,138,0,1)" }}>
              30% OFF
            </span>
          </h3>
          <p className="self-stretch mt-3 text-sm text-zinc-500">
            Free shipping on all your order. we deliver, you enjoy
          </p>
          <button className="flex flex-col justify-center items-center px-10 py-4 mt-8 max-w-full text-base font-semibold leading-tight text-white bg-green-600 rounded-[53px] w-[191px] max-md:px-5">
            Shop now
          </button>
        </div>
      </div>
      {/* Arrow */}
      <div className="flex shrink-0 justify-center items-center bg-white rounded-full border border-solid border-neutral-200 fill-white h-[45px] stroke-[1px] stroke-neutral-200 w-[45px]">
        <FaArrowRight />
      </div>
    </section>
  );
};

export default HeroSection;
