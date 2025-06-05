import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail,  Facebook, Twitter, Instagram, Github as GitHub } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">ReMaps</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Helping you navigate campus life with ease and confidence.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/BITMesraRanchi/" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/bit_mesra?lang=en" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/bitmesra_ranchi/?hl=en" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com/Sumit-72/ReMaps" className="text-gray-400 hover:text-blue-400">
                <GitHub className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="#about-us" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <a href="#map-section" className="text-gray-400 hover:text-blue-400 transition-colors">Campus Map</a>
              </li>
              <li>
                <a href="#locations" className="text-gray-400 hover:text-blue-400 transition-colors">Locations</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Campus Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://bitmesra.ac.in/view/files/58454254372B78485163617735654C413541534853413D3D" className="text-gray-400 hover:text-blue-400 transition-colors">Academic Calendar</a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Student Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Campus Safety</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Event Calendar</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Dining Options</a>
              </li> */}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">Birla Institute of Technology Mesra,<br />Ranchi, Jharkhand 835215</span>
              </div>
              {/* <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">(123) 456-7890</span>
              </div> */}
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <a
                  href="mailto:remaps.bit@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  remaps.bit@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center dark:border-gray-800">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Campus Navigator. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <a href="#" className="text-xs text-gray-400 hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-400 hover:text-blue-400">Terms of Service</a>
            <a href="#" className="text-xs text-gray-400 hover:text-blue-400">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;