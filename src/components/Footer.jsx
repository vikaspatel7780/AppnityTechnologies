import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-blue-100 to-blue-50 border-t border-gray-200"
    >
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold text-blue-700">
              Appnity Technologies
            </Link>
            <p className="text-sm text-gray-600 mt-2">
              Building scalable digital solutions for your business needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-blue-600 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4 text-blue-700 text-xl">
              <a
                href="https://github.com/ratneshsigh98"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/ratneshsingh98"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaDiscord />
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="#" className="hover:text-blue-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-600 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-blue-600 transition">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Appnity Technologies. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
