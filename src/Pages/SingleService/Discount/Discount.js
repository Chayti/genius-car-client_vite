import React from "react";

const Discount = () => {
  return (
    <div>
      {/* DaisyUI link: https://daisyui.com/components/card/}
        {/* Component name: Card with centered content and paddings*/}
      <div className="card lg:w-96 bg-black shadow-lg mt-8">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/t3bkCMd/Wrench.png"
            alt="Car Doctor"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-white card-title">Car Doctor</h2>
          <p className="text-white">Need help? We are here to help you.</p>
          <div className="bg-white w-60 h-24 mb-5 rounded-lg py-2 relative">
            <h5 className="font-bold">
              <span className="text-orange-500">Car Doctor</span> Special
            </h5>
            <p className="font-bold">
              <span className="text-slate-500">Save up to</span>
              <span className="text-orange-500"> 60%</span>
            </p>
          </div>

          <div className="card-actions absolute top-64 z-0">
            <button className="btn btn-primary">Get A Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
