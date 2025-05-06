import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                  
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-sky-400">YourBrand</h3>
                        <p className="text-gray-300">
                            Creating innovative solutions for modern businesses.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-sky-400 transition">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-sky-400 transition">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-sky-400 transition">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-sky-400 transition">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                   
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Products</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Contact</a></li>
                        </ul>
                    </div>

                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Products</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Product One</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Product Two</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">Product Three</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-sky-400 transition">All Products</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
                        <address className="not-italic text-gray-300 space-y-2">
                            <p>123 Business Ave, Suite 100</p>
                            <p>New York, NY 10001</p>
                            <p>Email: info@yourbrand.com</p>
                            <p>Phone: (123) 456-7890</p>
                        </address>
                    </div>
                </div>

                
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;