import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1E4A86] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* --- Company Info --- */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Aurevik <span className="text-[#E3B04B]">Capital</span>
            </h3>
            <p className="text-gray-200/90 mb-6 leading-relaxed">
              Building global pathways for Indian MSMEs to achieve financial freedom 
              through compliant UAE business structures.
            </p>
            <div className="flex items-center space-x-5">
              <a href="#" className="hover:text-[#E3B04B] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-[#E3B04B] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#E3B04B] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-[#E3B04B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E3B04B] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/bootcamp" className="hover:text-[#E3B04B] transition-colors">
                  Bootcamp
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-[#E3B04B] transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* --- Services --- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-[#E3B04B] transition-colors cursor-pointer">
                UAE Business Setup
              </li>
              <li className="hover:text-[#E3B04B] transition-colors cursor-pointer">
                Tax Planning
              </li>
              <li className="hover:text-[#E3B04B] transition-colors cursor-pointer">
                Financial Consulting
              </li>
              <li className="hover:text-[#E3B04B] transition-colors cursor-pointer">
                Wealth Management
              </li>
            </ul>
          </div>

          {/* --- Contact --- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-200/90">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-[#E3B04B]" />
                <span>Dubai, UAE | Mumbai, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-[#E3B04B]" />
                <a
                  href="mailto:info@aurevikcapital.com"
                  className="hover:text-[#E3B04B] transition-colors"
                >
                  info@aurevikcapital.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-[#E3B04B]" />
                <span>+971 XXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-200/90 text-sm">
          <p>© {new Date().getFullYear()} Aurevik Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
