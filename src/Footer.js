import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-2">
              <li>Tshirts</li>
              <li>Laptops</li>
              <li>Mobile Phone</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="mt-2">
              <li>FAQs</li>
              <li>Shipping &amp; Returns</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex items-center mt-2 space-x-2">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-square text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-twitter-square text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram-square text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Your eCommerce Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
