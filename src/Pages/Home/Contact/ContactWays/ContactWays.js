import React from 'react';

const ContactWays = ({ contact }) => {
    const { message, way, icon } = contact
    return (
        <div className="rounded-lg">
            <div className="mx-4 block md:flex items-center justify-around">
                <div>
                    {icon}
                </div>
                <div className="text-white">
                    <p className="mt-2">{message}</p>
                    <h2 className="text-xl font-bold">{way}</h2>
                </div>
            </div>
        </div>
    );
};

export default ContactWays;