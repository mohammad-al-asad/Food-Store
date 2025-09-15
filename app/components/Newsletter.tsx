import SocialLink from "./SocialLink";

function Newsletter() {
  return (
    <div className="flex items-center justify-between py-[80px] px-[300px] gap-10 bg-[#F7F7F7] self-end">
      <div className="w-[400px]">
        <h3 className="tracking-wide leading-none uppercase text-black text-xl font-bold mb-2">
          Subscribe Newsletter
        </h3>
        <p className="text-neutral-400">
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </p>
      </div>
      <div className="flex gap-5 justify-between pl-6 w-[536px] bg-white border border-solid border-neutral-200 rounded-[500px] max-md:pl-5 max-md:max-w-full">
        <input
          type="email"
          placeholder="Your email address"
          className="my-auto leading-6 text-neutral-400 bg-transparent border-none outline-none"
        />
        <button className="flex z-10 gap-3 justify-center items-center px-8 py-3.5 mr-0 font-semibold leading-tight text-white whitespace-nowrap bg-green-600 hover:bg-green-700 rounded-[43px] max-md:px-5">
          Subscribe
        </button>
      </div>
      <SocialLink className="text-black"/>
    </div>
  );
}

export default Newsletter;
