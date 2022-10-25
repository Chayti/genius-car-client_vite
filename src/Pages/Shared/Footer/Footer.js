import React from "react";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logo from "../../../assets/others/Logo.svg"

/***
 * Footer component from daisy ui - documentation
 * used component ==>>> https://i.ibb.co/9yYMGXK/footer.jpg
 * Changes in default footer 
 * svg is changed, social icons added, p text added, a tags are replaced with link
 */

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div>
                <img src={logo} alt="" />
                <p className="w-64 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, voluptatibus!</p>

                <div className="flex">
                    <div className="mr-2 rounded-full p-2 bg-gray-700">
                        <FaGoogle />
                    </div>
                    <div className="mr-2 rounded-full p-2 bg-gray-700">
                        <FaTwitter />
                    </div>
                    <div className="mr-2 rounded-full p-2 bg-gray-700">
                        <FaInstagram />
                    </div>
                    <div className="mr-2 rounded-full p-2 bg-gray-700">
                        <FaLinkedin />
                    </div>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Branding</Link>
                <Link className="link link-hover">Design</Link>
                <Link className="link link-hover">Marketing</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
}

export default Footer;