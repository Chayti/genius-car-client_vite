import React from "react";

const CartBanner = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Cart Details</h1>
          <p className="mb-5 text-red-600">
            My orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartBanner;
