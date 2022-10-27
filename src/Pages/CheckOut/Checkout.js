import React from "react";
import BannerImage from "../../assets/asset/Checkout/CheckoutBanner.png";
const Checkout = () => {
  return (
    <section className="container mx-auto lg:px-12">
      <div
        className="relative flex items-center justify-center h-[300px] before:content-[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[rgba(0,0,0,0.25)]"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-white text-6xl font-extrabold">Checkout</h1>
      </div>

      <div className="my-6 bg-[#F3F3F3]">
        <form className="p-4">
          <div className="grid md:grid-cols-2 gap-4 justify-items-center">
            
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full"
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
