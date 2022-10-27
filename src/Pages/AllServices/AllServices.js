import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleService from '../Home/ServiceArea/SingleService/SingleService';

const AllServices = () => {
    const services = useLoaderData();

    return (
        <div className="mt-10 mb-20 w-5/6 mx-auto">
            <div className="mx-7 ml-3 px-5 text-center">
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

        </div>
    );
};

export default AllServices;