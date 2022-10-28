import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleService from './SingleService/SingleService';

/***
 * daisy ui component -> https://i.ibb.co/hB9tH1Q/service-Area.jpg
 * */


const ServiceArea = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="section-2 mt-20">
            <div className="mx-7 ml-3 px-5 mt-7 lg:mt-0 text-center">
                <p className="text-orange-700 font-bold">Service</p>
                <h2 className="md:text-3xl md:font-bold mt-3">Our Service Area</h2><br />
                <p className="w-3/4 mx-auto mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sunt cupiditate repellat natus vero nemo quos, voluptate, dolorem molestias voluptas consequuntur fuga.</p><br />
            </div>
            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services?.map(service => <SingleService
                        key={service.service_id}
                        service={service}
                    ></SingleService>)
                }
            </div>
            <div className="text-center">
                <Link to="/services"><button className="mt-7 text-orange-600 btn border-solid border-2 border-orange-600" >More Services</button></Link>
            </div>
        </div>
    );
};

export default ServiceArea;