import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="text-black py-10 sm:py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Logo and Company Name */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img
                src="/assets/logo.png"
                alt="Akshaya Associate"
                className="h-8 sm:h-12 mr-3"
              />
              <span className="text-base sm:text-lg font-medium">Akshaya Associate</span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Quick Links */}
            <div className="flex flex-col">
              <span className="font-medium text-sm sm:text-base mb-3">Quick Links</span>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Company Profile</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">News & Blog</a></li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="flex flex-col">
              <span className="font-medium text-sm sm:text-base mb-3">Our Services</span>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Data Analytics</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Cyber Related</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Growth Hacking</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Strategy Development</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Business Intelligence</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col col-span-2 md:col-span-1">
              <span className="font-medium text-sm sm:text-base mb-3">Newsletter</span>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 rounded-md text-xs sm:text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button 
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-xs sm:text-sm"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-xs sm:text-sm text-gray-600">
          © 2024 Akshaya Associate. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;