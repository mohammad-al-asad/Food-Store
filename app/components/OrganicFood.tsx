import React from "react";
import { MdOutlineDone } from "react-icons/md";

const OrganicFood: React.FC = () => {
  const features = [
    {
      title: "Healthy & natural food for lovers of healthy food.",
      description:
        "Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum.",
    },
    {
      title: "Every day fresh and quality products for you.",
      description:
        "Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.",
    },
  ];

  return (
    <section className="flex relative items-center px-16 pb-11 w-full  bg-[url(./bg-2.png)] bg-no-repeat bg-contain justify-center">
      {/* <img
        src="./bg-2.png"
        className="object-contain absolute inset-0 size-full"
        alt="Organic food background"
      /> */}
      <div className="flex justify-center gap-3">
        <div className="w-3/5 max-md:ml-0 max-md:w-full">
          <img src="./organicFood.png" alt="Fresh organic vegetables" />
        </div>
        <div className="ml-5">
          <div className="flex relative flex-col mt-20">
            <h2 className="text-4xl font-semibold leading-10 rounded-none text-zinc-900 w-[389px]">
              100% Trusted
              <br />
              Organic Food Store
            </h2>

            {features.map((feature, index) => (
              <article key={index} className="mt-7 max-md:max-w-full">
                <div className="flex gap-3 items-center text-lg font-medium text-zinc-900 max-md:max-w-full">
                  <MdOutlineDone
                    size={24}
                    className="p-1 bg-green-500 text-white rounded-full transition-all duration-200"
                  />
                  <h3 className="self-stretch my-auto w-[500px] max-md:max-w-full">
                    {feature.title}
                  </h3>
                </div>
                <div className="flex items-start pl-9 mt-2.5 max-w-full text-sm leading-5 text-zinc-500 w-[534px] max-md:pl-5">
                  <p className="w-[500px] max-md:max-w-full">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}

            <button className="flex gap-4 justify-center items-center self-start px-10 py-4 mt-7 text-base font-semibold leading-tight text-white bg-green-600 rounded-[43px] max-md:px-5">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganicFood;
