import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  let activeClassName =
    "hover:bg-orange-500 hover:text-white w-100 h-12 rounded-lg bg-white flex justify-around items-center";
  return (
    <div className="bg-slate-100 rounded-lg" style={{ height: "500px" }}>
      <div className="w-72 h-80 mx-auto pt-5">
        <h1 className="text-2xl font-bold mb-5">Services</h1>
        <div className="grid grid-cols-1 gap-y-3">
          {categories.map((category) => (
            <NavLink
              to={`/single-service/${category._id}`}
              className={({ isActive }) =>
                isActive
                  ? activeClassName
                  : "w-100 h-12 rounded-lg bg-white flex justify-around items-center"
              }
            >
              {category?.title}
              <HiArrowRight />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
