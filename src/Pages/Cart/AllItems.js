import React from "react";
import SingleItem from "./SingleItem";

const AllItems = ({orders}) => {
  return (
    // Used a table from daisyUI. 
    // Table starting
<<<<<<< HEAD
    <div className="overflow-x-auto my-10 w-full">
=======
    <div className=" my-10 overflow-x-auto w-full">
>>>>>>> e1b6fd4c02d18556c6f6eafc4a1ae8c2e25aa7f1
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
            orders?.map(order=> <SingleItem order={order}/>)
          }
        </tbody>
      </table>
    </div>
    // Table ends here
  );
};

export default AllItems;
