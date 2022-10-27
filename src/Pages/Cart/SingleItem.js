import React from "react";
import { FaCut } from "react-icons/fa";

const SingleItem = () => {
  return (
    // table body for single item. daisyUI
    <tr>
      <th>
        <button
          className="btn btn-circle bg-red-500 hover:bg-red-800"
          onClick={() => console.log("clicked")}
        >
          <FaCut color="white" size={20} />
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img
                src="https://placeimg.com/192/192/people"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Service Name</div>
            <div className="text-sm opacity-50">United States</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">$00.00</div>
      </td>
      <td>
        <div className="font-bold">info@info.com</div>
      </td>
      <td>
        <div className="w-1/2 text-center py-3 rounded-lg bg-[#FF3811] font-bold text-white">
          Pending
        </div>
      </td>
    </tr>
  );
};

export default SingleItem;
