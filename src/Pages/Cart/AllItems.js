import React from "react";
import SingleItem from "./SingleItem";

const AllItems = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Action</th>
            <th>Product</th>
            <th>Price</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <SingleItem />
        </tbody>
      </table>
    </div>
  );
};

export default AllItems;
