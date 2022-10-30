import React from "react";
import ServiceInfoRow from "./ServiceInfoRow";

const ServicesTable = ({ services, setRefetch, setSorted }) => {

  return (
    // Used a table from daisyUI.
    // Table starting
    <div className=" my-10 overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Product
              <button
                className="mx-3 btn btn-warning"
                onClick={() => setSorted(true)}
              >
                Sort by price
              </button>
            </th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Show single item of cart by using map */}
          {services?.map((service) => (
            <ServiceInfoRow service={service} setRefetch={setRefetch} />
          ))}
        </tbody>
      </table>
    </div>
    // Table ends here
  );
};

export default ServicesTable;
