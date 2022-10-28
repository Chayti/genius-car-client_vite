import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import BannerImage from "../../assets/asset/Checkout/CheckoutBanner.png";
import { AuthContext } from "../../contexts/AuthProvider";
import Banner from "../SingleService/Banner/Banner";
const Checkout = () => {
  const productDetail = useLoaderData();

  const { user } = useContext(AuthContext);
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const phone = form.phone.value;
    const address = form.address.value;
    const message = form.message.value;
    const orderData = {
      userName: user?.displayName || "No name",
      userEmail: user?.email || "No email",
      phone,
      address,
      message,
      proudctName: productDetail.title,
      proudctImage: productDetail.img,
      proudctId: productDetail._id,
      proudctPrice: productDetail.price,
      status: "pending",
    };
    console.log(orderData);
    fetch(`http://localhost:5000/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
<<<<<<< HEAD
        alert("order confirmed")
        console.log(data)
=======
        alert("Ordered successfully");
        
>>>>>>> e1b6fd4c02d18556c6f6eafc4a1ae8c2e25aa7f1
      });
  }
  return (
    <section className="w-5/6 mx-auto">
      {/* <div
        className="relative flex items-center justify-center h-[300px] before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[rgba(0,0,0,0.25)]"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-white text-6xl font-extrabold">Checkout</h1>
      </div> */}
      <Banner title={"Check Out"}></Banner>
      <div className="my-6 bg-[#F3F3F3] w-5/6 mx-auto">
        <form className="p-4 m-3" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4 justify-items-center">
            {/* DaisyUI input field with level. DaisyUI doesn't provide any form layout */}
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                value={user?.displayName}
                placeholder="Type here"
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                name="email"
                value={user?.email}
                placeholder="Type here"
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-bold">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-bold">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control col-span-full w-full mb-6">
              <label className="label">
                <span className="label-text font-bold">Any Message</span>
              </label>
              <textarea
                rows="5"
                name="message"
                placeholder="Type here"
                className=" input-bordered w-full "
              />
            </div>
            <div className="form-control col-span-full w-full mb-6">
              <input
                type="submit"
                value={"Confirm Order"}
                className="btn bg-[#FF3811] font-bold w-full"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
