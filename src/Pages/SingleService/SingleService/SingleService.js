import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import ExtraInfo from "../ExtraInfo/ExtraInfo";
import Sidebar from "../Sidebar/Sidebar";

const SingleService = () => {
  const data = useLoaderData();
  const singleService = JSON.parse(data)?.services.find(
    (d) => d.service_id === "03"
  );

  return (
    <div>
      <Banner title={"Service Details"}></Banner>

      {/* service details */}
      <div class="grid grid-cols-1 lg:grid-cols-10 mt-16 mx-4 gap-10 lg:m-16">
        <div className="lg:col-span-7">
          {/* service image */}
          <div className="">
            <img className="w-full h-full" src={singleService.img} alt="" />
          </div>
          {/* service title */}
          <div className="my-5">
            <h1 className="text-3xl font-bold">{singleService.title}</h1>
          </div>
          {/* service description */}
          <div>
            <p className="text-justify my-10">{singleService.description}</p>
          </div>
          {/* service facility */}
          {/* DaisyUI link: https://daisyui.com/components/card/ */}
          {/* Component name:Card with no image */}
          <div className="grid lg:grid-cols-2 gap-5 my-5">
            {singleService.facility.map((service) => (
              <div className="card lg:w-96 border-4 border-t-orange-500 bg-slate-100 shadow-lg">
                <div className="card-body">
                  <h2 className="card-title">{service.name}</h2>
                  <p>{service.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fixed for all single services */}
          <div>
            <ExtraInfo></ExtraInfo>
          </div>
        </div>

        <div className="lg:col-span-3">
          {/* sidebar */}
          <div>
            <Sidebar></Sidebar>
          </div>

          <div>
            {/* 60% off */}
            <Discount></Discount>

            {/* Checkout */}
            <div className="flex justify-center lg:justify-start my-10">
              <div>
                <h1 className="text-3xl font-bold my-5">
                  Price: ${singleService.price}
                </h1>
                {/* DaisyUI link: https://daisyui.com/components/button/ */}
                {/* Component name:Wide button*/}
                <Link to="/checkout">
                  <button className="btn btn-wide border-0 bg-orange-500 text-white">
                    Proceed Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
