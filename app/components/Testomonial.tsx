import React from "react";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export type Testimonial = {
  text: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
};
const Testimonial: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      author: "Robert Fox",
      role: "Customer",
      avatar: "./avatar/avatar-1.jpg",
      rating: 5,
    },
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      author: "Dianne Russell",
      role: "Customer",
      avatar: "./avatar/avatar-2.jpg",
      rating: 4,
    },
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      author: "Eleanor Pena",
      role: "Customer",
      avatar: "./avatar/avatar-3.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="flex relative flex-col items-center w-full py-24 px-[120px] bg-gradient-to-t from-[#F2F5F3] to-[#ffff] ">
      <img
        src="./BG/testimonial.png"
        alt="BG"
        className="absolute top-24 left-20 z-0"
      />
      <div>
        <div className="flex justify-between w-full">
          {/* Heading */}
          <div className="my-auto leading-tight">
            <p className="text-base text-green-600 uppercase">Testimonial</p>
            <h2 className="text-4xl font-semibold text-zinc-900">
              What Our Customer Says
            </h2>
          </div>

          {/* Arrow */}
          <div className="flex gap-4 z-10">
            <div className="flex shrink-0 justify-center items-center bg-white rounded-full border border-solid border-neutral-200 fill-white h-[45px] stroke-[1px] stroke-neutral-200 w-[45px] hover:bg-green-500 hover:text-white hover:border-none">
              <FaArrowLeft />
            </div>
            <div className="flex shrink-0 justify-center items-center bg-white rounded-full border border-solid border-neutral-200 fill-white h-[45px] stroke-[1px] stroke-neutral-200 w-[45px] hover:bg-green-500 hover:text-white hover:border-none">
              <FaArrowRight />
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="flex flex-wrap mt-12 gap-6 w-full">
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <article
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg w-[424px] z-10"
            >
              <img
                src="./quote.png"
                className="object-contain w-8 aspect-[1.23] fill-green-600"
                alt="Quote icon"
              />
              <p className="mt-4 text-sm leading-5 text-neutral-600">
                {testimonial.text}
              </p>
              <div className="flex gap-10 justify-between items-center pt-2 mt-4 w-full">
                <div className="flex gap-3 items-center self-stretch my-auto text-center w-[168px]">
                  <img
                    src={testimonial.avatar}
                    className="object-cover shrink-0 self-stretch my-auto w-14 rounded-full aspect-square"
                    alt={`${testimonial.author} avatar`}
                  />
                  <div className="flex flex-col items-start self-stretch my-auto">
                    <h4 className="text-base font-medium text-zinc-900 truncate text-start">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-neutral-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                {/* Rating */}
                <div>
                  <Rating value={testimonial.rating} readOnly>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton className="text-green-500" key={index} />
                    ))}
                  </Rating>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
