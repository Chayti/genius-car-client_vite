import React, { useContext, useEffect, useState } from "react";
import { FaRegTrashAlt, FaReply } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Banner from "../SingleService/Banner/Banner";
import AllItems from "./AllItems";
<<<<<<< HEAD
=======
import CartBanner from "./CartBanner";
>>>>>>> e1b6fd4c02d18556c6f6eafc4a1ae8c2e25aa7f1

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/myOrder?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return (
<<<<<<< HEAD
    <section className="w-5/6 mx-auto px-6">
=======
    <section className="container mx-auto px-6 md:w-5/6">
>>>>>>> e1b6fd4c02d18556c6f6eafc4a1ae8c2e25aa7f1
      {/* Banner using Hero */}
      <Banner title={"My Orders"} />
      {/* This component shows all the orders of a specific email. */}
      <AllItems orders={orders} />

      {/* This contains  Clear Shopping Cart and Continue Shopping button*/}
      <div className="my-4 grid md:grid-cols-2">
        
          <button onClick={()=>{navigate(`/services`)}} className="mb-2 flex items-center justify-center">
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
