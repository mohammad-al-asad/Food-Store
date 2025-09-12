import React from 'react';

const PromotionalBanners: React.FC = () => {
  return (
    <section className="mt-20 w-full relative">
      <div className="flex gap-5 max-md:flex-col">
            {/* Decorative element */}
          <img
            src="./onion.png"
            className="absolute bottom-0"
            alt="Decorative element"
          />
        <div className="ml-5 w-full">
              <div className="flex gap-2 justify-center items-center">
                <article className="w-[650px] text-white">
                    <div className="flex relative flex-col justify-center items-start px-10 py-20 w-full rounded-xl min-h-[360px] max-md:px-5 max-md:max-w-full">
                      <img
                        src="./banner-1.jpg"
                        className="object-cover rounded absolute inset-0 size-full rotate-180"
                        alt="Organic fruits and vegetables"
                      />
                      <div className="flex relative flex-col">
                        <div className="flex flex-col">
                          <div>
                            <p className="text-sm font-medium tracking-wide leading-none uppercase">
                              100% Organic
                            </p>
                            <h3 className="mt-2 text-4xl font-semibold leading-tight">
                              Fruit & Vegetable
                            </h3>
                          </div>
                          <div className="flex gap-2 items-center self-start mt-5 text-center">
                            <span className="self-stretch my-auto text-sm opacity-80">
                              Starting at:
                            </span>
                            <div className="flex gap-2.5 items-start self-stretch px-2 py-1 my-auto text-base font-medium whitespace-nowrap bg-amber-500 rounded-md">
                              <span>$11.99</span>
                            </div>
                          </div>
                        </div>
                        <button className="flex gap-3 justify-center items-center self-start px-8 py-3.5 mt-6 text-sm font-semibold leading-tight bg-green-600 rounded-[43px] max-md:px-5">
                          Shop Now
                        </button>
                      </div>
                    </div>
                </article>

                <article className="ml-5 w-[650px]">
                    <div className="text-white flex relative flex-col justify-center items-start px-10 py-20 w-full rounded-lg min-h-[360px] max-md:px-5 max-md:max-w-full">
                      <img
                        src="./banner-2.jpg"
                        className="object-cover w-[650px] absolute inset-0 size-full rotate-180 rounded"
                        alt="Sale promotion background"
                      />
                      <div className="flex relative flex-col">
                        <div className="flex flex-col">
                          <div>
                            <p className="text-sm font-medium tracking-wide leading-none uppercase">
                              sale off the week
                            </p>
                            <h3 className="mt-2 text-4xl font-semibold leading-tight">
                              Sales of the Year
                            </h3>
                          </div>
                          <div className="flex gap-2 items-start self-start mt-4 text-center whitespace-nowrap">
                            <div className="flex flex-col items-center w-8 rounded-md">
                              <span className="text-xl">00</span>
                              <span className="mt-1 text-xs tracking-wide leading-none uppercase opacity-70">
                                Days
                              </span>
                            </div>
                            <span className="text-base leading-8 opacity-60">:</span>
                            <div className="flex flex-col items-center rounded-md">
                              <span className="text-xl">02</span>
                              <span className="mt-1 text-xs tracking-wide leading-none uppercase opacity-70">
                                Hours
                              </span>
                            </div>
                            <span className="text-base leading-8 opacity-60">:</span>
                            <div className="flex flex-col items-center w-8 rounded-md">
                              <span className="text-xl">18</span>
                              <span className="mt-1 text-xs tracking-wide leading-none uppercase opacity-70">
                                Mins
                              </span>
                            </div>
                            <span className="text-base leading-8 opacity-60">:</span>
                            <div className="flex flex-col items-center w-8 rounded-md">
                              <span className="text-xl">46</span>
                              <span className="mt-1 text-xs tracking-wide leading-none uppercase opacity-70">
                                Secs
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="flex gap-3 justify-center items-center self-start px-8 py-3.5 mt-6 text-sm font-semibold leading-tight bg-green-600 rounded-[43px] max-md:px-5">
                          Shop Now
                        </button>
                      </div>
                    </div>
                </article>
              </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;
