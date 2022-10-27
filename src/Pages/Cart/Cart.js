import React from "react";
import { FaRegTrashAlt, FaReply } from "react-icons/fa";
import AllItems from "./AllItems";
import CartBanner from "./CartBanner";


const Cart = () => {
  return (
    <section className="container mx-auto px-6">
      <CartBanner />
      <AllItems />
      <div className="my-4 grid md:grid-cols-2">
        <button className=" mb-2 flex items-center justify-center">
          <span className="mr-2">
            <FaReply />
          </span>{" "}
          Continue Shopping
        </button>
        <button className="flex items-center justify-center">
          <span className="mr-2">
            <FaRegTrashAlt />
          </span>{" "}
          Clear Shopping Cart
        </button>
      </div>
    </section>
  );
};

export default Cart;
