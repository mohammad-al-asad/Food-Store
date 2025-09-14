import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const Contact: React.FC = () => {
  return (
    <section className="mt-5 w-full flex flex-col justify-center items-center px-[300px]">
      <div className="mb-4">
        <img src="./decorationText.png" alt="decoration text" />
      </div>
      <div className="flex gap-5">
        <article className="min-w-[20%] max-w-3/1 h-[184px] p-5 text-sm bg-white rounded-lg border border-solid border-green-600 border-opacity-20">
          <div className="flex relative flex-col justify-center p-4 aspect-square rounded-[5000px] w-[56px]">
            <img
              src="./container.png"
              className="object-cover absolute inset-0 size-full opacity-30"
            />
            <CiLocationOn
              size={25}
              className="z-20 text-green-700 group-hover:text-white self-center font-light"
            />
          </div>
          <div className="mt-4 max-w-full w-[272px]">
            <h3 className="font-medium tracking-wide leading-none uppercase text-zinc-900">
              Our Location
            </h3>
            <p className="mt-2.5 leading-5 text-stone-500">
              1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
            </p>
          </div>
        </article>

        <article className="ml-5 min-w-[20%] max-w-3/12 h-[184px] p-5 bg-white rounded-lg border border-solid border-green-600 border-opacity-20">
          <div className="flex relative flex-col justify-center p-4 aspect-square rounded-[5000px] w-[56px]">
            <img
              src="./container.png"
              className="object-cover absolute inset-0 size-full opacity-30"
            />
            <LiaPhoneVolumeSolid
              size={25}
              className="z-20 text-green-700 group-hover:text-white self-center font-light"
            />
          </div>
          <div className="mt-4 max-w-full w-[272px]">
            <h3 className="text-sm font-medium tracking-wide leading-none uppercase text-zinc-900">
              Call Us 24/7
            </h3>
            <p className="mt-2.5 text-2xl leading-6 text-green-600">
              (303) 555-0105
            </p>
          </div>
        </article>

        <article className="ml-5 h-[184px] min-w-[40%] p-5 text-sm bg-white rounded-lg border border-solid border-green-600 border-opacity-20">
            <div className="flex relative flex-col justify-center p-4 aspect-square rounded-[5000px] w-[56px]">
              <img
                src="./container.png"
                className="object-cover absolute inset-0 size-full opacity-30"
              />
              <CiMail
                size={25}
                className="z-20 text-green-700 group-hover:text-white self-center font-light"
              />
            </div>
            <div className="mt-3.5 space-y-3">
              <h3 className="font-medium tracking-wide leading-none uppercase text-zinc-900">
                Subscribe Newsletter
              </h3>
                <div className="flex gap-5 justify-between pl-6 w-full bg-white border border-solid border-neutral-200 rounded-[500px] max-md:pl-5 max-md:max-w-full">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="my-auto leading-6 text-neutral-400 bg-transparent border-none outline-none"
                  />
                  <button className="flex z-10 gap-3 justify-center items-center px-8 py-3.5 mr-0 font-semibold leading-tight text-white whitespace-nowrap bg-green-600 rounded-[43px] max-md:px-5">
                    Subscribe
                  </button>
                </div>
            </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
