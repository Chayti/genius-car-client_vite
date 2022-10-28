import React from "react";
import { FaCut } from "react-icons/fa";

const SingleItem = ({order}) => {
  const {_id, userName, userEmail, phone,proudctName, proudctImage,proudctPrice, status } = order
  return (
    // table body for single item. daisyUI
    <tr>
      <th>
        <button
          className="btn btn-circle bg-red-500 hover:bg-red-800"
          onClick={() => console.log(_id)}
        >
          <FaCut color="white" size={20} />
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img
                src={proudctImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{proudctName}</div>
            <div className="text-sm opacity-50">United States</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">$ {proudctPrice}</div>
      </td>
      <td>
        <div className="font-bold">{userEmail}</div>
      </td>
      <td>
        <div className="w-1/2 text-center py-3 rounded-lg bg-[#FF3811] font-bold text-white">
          {status}
        </div>
      </td>
    </tr>
  );
};

export default SingleItem;
