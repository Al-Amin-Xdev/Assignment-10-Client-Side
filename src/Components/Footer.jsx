import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <footer className="bg-green-900 text-white mt-16">
      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold mb-4 text-green-200">
            🌾 KrishiLink
          </h2>
          <p className="text-gray-300 leading-relaxed">
            A social agro network connecting farmers, traders, and consumers
            to grow, sell, and collaborate directly — empowering agriculture
            in the digital era.
          </p>
        </div>

        {/* Column 2 */}
        <div className="border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold mb-4 text-green-200">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-green-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/allcrops" className="hover:text-green-400 transition">
                All Crops
              </a>
            </li>
            <li>
              <a href="/addcrop" className="hover:text-green-400 transition">
                Add Crop
              </a>
            </li>
            <li>
              <a href="/myposts" className="hover:text-green-400 transition">
                My Posts
              </a>
            </li>
            <li>
              <a
                href="/myinterests"
                className="hover:text-green-400 transition"
              >
                My Interests
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold mb-4 text-green-200">
            Contact Us
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              Email:{" "}
              <a
                href="mailto:support@krishilink.com"
                className="text-green-400 hover:underline"
              >
                support@krishilink.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <span className="text-green-400">+880 1234 567 890</span>
            </li>
            <li>
              Location:{" "}
              <span className="text-green-400">Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="border border-white/20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold mb-4 text-green-200">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition transform hover:scale-110 shadow-md hover:shadow-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition transform hover:scale-110 shadow-md hover:shadow-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition transform hover:scale-110 shadow-md hover:shadow-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-green-700 hover:bg-green-600 p-3 rounded-full transition transform hover:scale-110 shadow-md hover:shadow-lg"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-700"></div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 text-sm py-4">
        © {new Date().getFullYear()}{" "}
        <span className="text-green-300 font-semibold">KrishiLink</span>. All
        rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Footer;
