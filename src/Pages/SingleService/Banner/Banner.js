import React from "react";

const Banner = (props) => {
  console.log(props);
  return (
    <div>
      {/* DaisyUI link: https://daisyui.com/components/hero/ */}
      {/* Component Name: Hero with overlay image */}
      <div
        className="mt-10 hero h-28 md:h-64 w-11/12 rounded-lg mx-auto"
        style={{
          backgroundImage: `url("https://i.ibb.co/sqyf1Q1/99.jpg")`,
          backroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">
              {props?.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Fixed for all services */}

      <div></div>
    </div>
  );
};

export default Banner;
