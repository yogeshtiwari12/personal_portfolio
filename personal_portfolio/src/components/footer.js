import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer footer-center bg-gray-200  p-10">
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a href="https://facebook.com" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
        </div>
      </nav>
      <div className="my-2  w-1/5 border-t border-gray-600"></div>
            <aside className="text-center text-sm ">
        <p>&copy; {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
        <p>Designed by Yogesh Tiwari</p>
      </aside>
    </footer>
  )
}

export default Footer;
