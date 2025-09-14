import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { number: "37+", label: "Years of Hard Work" },
    { number: "500k+", label: "Happy Customer" },
    { number: "28", label: "Qualified Team Member" },
    { number: "750k+", label: "Monthly Orders" }
  ];

  return (
    <section className="flex relative flex-col justify-center items-center px-16 py-20 mt-9 bg-black">
      <img
        src="./bg-3.jpg"
        className="object-cover absolute inset-0 size-full opacity-20"
        alt="Statistics background"
      />
      <img
        src="./multipleLeap.png"
        className="absolute left-0 w-[230px] rotate-y-180 rotate-[30deg]"
        alt="Statistics background"
      />
      <div className="flex relative flex-wrap gap-6 items-start max-md:max-w-full">
        {stats.map((stat, index) => (
          <article key={index} className="relative flex flex-col items-center py-10 rounded-lg w-[280px]">
            <div className='bg-white absolute top-0 bottom-0 left-0 right-0 opacity-10 rounded-lg'/>
            <h3 className="text-6xl font-light leading-tight text-green-600 max-md:text-4xl">
              {stat.number}
            </h3>
            <p className="text-lg text-center text-white">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
