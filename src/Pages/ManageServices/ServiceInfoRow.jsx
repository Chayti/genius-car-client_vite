import React from "react";
import { FaCut, FaEdit } from "react-icons/fa";

const ServiceInfoRow = ({ service, setRefetch }) => {
  const { _id, title, img, price, facility, description } = service;
  const handleDelete = id =>{
    fetch(`http://localhost:5000/service/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        
      })
        .then((res) => res.json())
        .then((data) => {
        //   alert("Deleted successfully");
        console.log(data);
          setRefetch(true)
        });
  }
  const handleUpdate = id =>{
    fetch(`http://localhost:5000/service/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        
      })
        .then((res) => res.json())
        .then((data) => {
        //   alert("Deleted successfully");
        console.log(data);
          setRefetch(true)
        });
  }
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <p className="font-bold">{title}</p>
            <p className="text-sm opacity-50">{price}</p>
            <p className="text-sm opacity-50">{`${description.slice(
              0,
              20
            )}...`}</p>
          </div>
        </div>
      </td>

      <td>
        <button
          className="btn btn-circle bg-green-500 hover:bg-red-800"
          onClick={() => handleUpdate(`${_id}`)}
        >
          <FaEdit color="white" size={20} />
        </button>
      </td>
      <td>
        <button
          className="btn btn-circle bg-red-500 hover:bg-red-800"
          onClick={() => handleDelete(`${_id}`)}
        >
          <FaCut color="white" size={20} />
        </button>
      </td>
    </tr>
  );
};

export default ServiceInfoRow;
