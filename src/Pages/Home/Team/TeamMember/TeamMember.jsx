import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const TeamMember = ({ teamMember }) => {
    const { team, expertize, img } = teamMember
    return (
        <div className="card glass rounded-lg">
            <div className="card-body mx-4 text-center">
                <figure><img className="rounded-lg h-56" src={img} alt="car!" /></figure>
                <h2 className="text-xl mt-2 font-bold">{team}</h2>
                <p>{expertize}</p>
                <div className="flex mx-auto">
                    <div className="mr-2 rounded-full p-1 bg-blue-900">
                        <FaFacebook className="text-white" />
                    </div>
                    <div className="mr-2 rounded-full p-1 bg-blue-300">
                        <FaTwitter className="text-white" />
                    </div>
                    <div className="mr-2 rounded-full p-1 bg-blue-700">
                        <FaLinkedin className="text-white" />
                    </div>
                    <div className="mr-2 rounded-full p-1 bg-red-400">
                        <FaInstagram className="text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;