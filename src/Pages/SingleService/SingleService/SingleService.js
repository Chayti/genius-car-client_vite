import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

const SingleService = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div class="grid grid-cols-1 md:auto-cols-{min}  gap-2">
        <div>01</div>

        <div>09</div>
      </div>
    </div>
  );
};

export default SingleService;
