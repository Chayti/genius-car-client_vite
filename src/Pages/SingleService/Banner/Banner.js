import React from "react";

const Banner = () => {
  return (
    <div>
      {/* DaisyUI link: https://daisyui.com/components/hero/ */}
      {/* Component Name: Hero with overlay image */}
      <div
        className="hero h-64 w-11/12 rounded-lg mx-auto"
        style={{
          backgroundImage: `url("https://i.ibb.co/sqyf1Q1/99.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Service Details</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
