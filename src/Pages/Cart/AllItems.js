import React from "react";
import SingleItem from "./SingleItem";

const AllItems = () => {
  return (
    // Used a table from daisyUI. 
    // Table starting
    <div className="overflow-x-auto my-10 w-full">
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
          {/* Show single item of cart by using map */}
          {
            <SingleItem />
          }
        </tbody>
      </table>
    </div>
    // Table ends here
  );
};

export default AllItems;
