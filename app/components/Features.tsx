import React, { type JSX } from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaShippingFast } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";

const FeatureCards: React.FC = () => {
  const icons: { [key: string]: JSX.Element } = {
    "headphone": <TfiHeadphoneAlt  size={30} className="z-20 text-green-700 group-hover:text-white self-center font-light"/>,
    "shipping": <FaShippingFast  size={30} className="z-20 text-green-700 group-hover:text-white self-center font-light"/>,
    "bag": <IoBagCheckOutline  size={30} className="z-20 text-green-700 group-hover:text-white self-center font-light"/>,
    "box": <BsBoxSeam  size={30} className="z-20 text-green-700 group-hover:text-white self-center font-light"/>,
  };
  type Features = {
    icon: string;
    title: string;
    description: string;
  };
  const features: Features[] = [
    {
      icon: "shipping",
      title: "Free Shipping",
      description: "Free shipping with discount",
    },
    {
      icon: "headphone",
      title: "Great Support 24/7",
      description: "Instant access to Contact",
    },
    {
      icon: "bag",
      title: "100% Sucure Payment",
      description: "We ensure your money is save",
    },
    {
      icon: "box",
      title: "Money-Back Guarantee",
      description: "30 days money-back",
    },
  ];

  return (
    <section className="flex flex-wrap w-full px-[150px] gap-6 items-start justify-center mt-0 bg-white shadow-sm shadow-[#CCCCCC]">
      {features.map((feature, index) => (
        <article
          key={index}
          className={`group flex flex-col items-center justify-center py-10 w-60 border-b-2 border-transparent hover:bg-white hover:border-green-400`}
        >
          <div className="flex relative flex-col justify-center p-4 aspect-square rounded-[5000px] w-[72px]">
            <img
              src="./container.png"
              className="object-cover absolute inset-0 size-full opacity-50 group-hover:opacity-100"
              alt=""
            />
            {icons[feature.icon]}
          </div>
          <div className="flex flex-col justify-center items-center mt-4 max-w-full text-center w-[312px]">
            <h3 className="text-lg font-semibold text-zinc-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400">
              {feature.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default FeatureCards;
