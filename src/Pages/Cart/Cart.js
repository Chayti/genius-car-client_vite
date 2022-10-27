import React from "react";
import { FaRegTrashAlt, FaReply } from "react-icons/fa";
import Banner from "../SingleService/Banner/Banner";
import AllItems from "./AllItems";

const Cart = () => {
  return (
    <section className="w-5/6 mx-auto px-6">
      {/* Banner using Hero */}
      <Banner title={"My Orders"} />
      {/* This component shows all the orders of a specific email. */}
      <AllItems />


      {/* This contains  Clear Shopping Cart and Continue Shopping button*/}
      <div className="my-4 grid md:grid-cols-2">
        <button className=" mb-2 flex items-center justify-center">
          <span className="mr-2">
            <FaReply />
          </span>{" "}
          Continue Shopping
        </button>
        <button className="flex items-center justify-center">
          <span className="mr-2">
            {/* Icon form react-icons */}
            <FaRegTrashAlt />
          </span>{" "}
          Clear Shopping Cart
        </button>
      </div>
    </section>
  );
};

export default Cart;
