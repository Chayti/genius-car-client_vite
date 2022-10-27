import React, { useEffect, useState } from "react";
import Banner from "../SingleService/Banner/Banner";
import ServicesTable from "./ServicesTable";

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [refetch, setRefetch] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/services`)
          .then((res) => res.json())
          .then((data) => setServices(data));
      }, [refetch]);
  return (
    <section className="container mx-auto px-6 md:w-5/6">
      {/* Banner using Hero */}
      <Banner title={"Manage Services"} />
      {/* This component shows all the orders of a specific email. */}
      <ServicesTable services={services} setRefetch={setRefetch}/>

      {/* This contains  Clear Shopping Cart and Continue Shopping button*/}
      
    </section>
  );
};

export default ManageServices;
