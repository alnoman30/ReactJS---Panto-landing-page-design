import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] text-black dark:bg-gray-800 dark:text-white pt-20 mt-5">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-between gap-8 px-8">
        {/* logo & details */}
        <div>
          <h2 className="text-secondary font-bold text-3xl mb-6 cursor-pointer dark:text-white">
            <Link to="/"></Link>Panto
          </h2>
          <p className="text-sm font-light w-[295px]">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
        </div>
        {/* services */}
        <div className="">
          <h2 className="text-primary font-normal text-lg mb-6">Services</h2>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-primary transition">
              <Link to="">Email Marketing</Link>
            </li>
            <li className="hover:text-primary transition">
              <Link to="">Campaigns</Link>
            </li>
            <li className="hover:text-primary transition">
              <Link to="">Branding</Link>
            </li>
          </ul>
        </div>
        {/* Furniture */}
        <div>
          <h2 className="text-primary font-normal text-lg mb-6">Furniture</h2>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-primary transition">
              <Link to="">Beds</Link>
            </li>
            <li className="hover:text-primary transition">
              <Link to="">Chair</Link>
            </li>
            <li className="hover:text-primary transition">
              <Link to="">All</Link>
            </li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <h2 className="text-primary font-normal text-lg mb-6">Follow Us</h2>
          <ul className="space-y-3 text-sm ">
            <li>
              <Link
                to=""
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <FaFacebookF /> Facebook
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <FaTwitter /> Twitter
              </Link>
            </li>
            <li>
              <Link
                to=""
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <FaInstagram /> Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* footer bottom */}
      <div className="mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4">
        <div>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex justify-between gap-3">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <ThemeToggle/>
    </footer>
  );
};

export default Footer;
