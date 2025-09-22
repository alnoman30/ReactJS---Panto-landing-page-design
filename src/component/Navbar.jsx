import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll=()=>{
      if(window.scrollY > 50){
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    }
  }, [])
  
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const navItems = [
    { path: "/", label: "Furniture" },
    { path: "/shop", label: "Shop" },
    { path: "/about-us", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const NavItems = () => {
    return (
      <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) => {
                return isActive ? "text-primary font-bold" : "hover:text-primary";
              }}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50  ${isScrolled ? "bg-white shadow-md transition-all duration-300 ease-in-out" : "bg-transparent text-white transition-all duration-300 ease-in-out "}`}>
      <nav className="section-container flex justify-between items-center">
        {/* logo */}
        <div className="font-bold text-2xl">
          <Link to="/">Panto</Link>
        </div>

        {/* Hamburger mobile menu */}
        <div
          onClick={toggleMenu}
          className="md:hidden text-xl cursor-pointer hover:text-primary"
        >
          {isMenuOpen ? null : <FaBars />}
        </div>
        {/* menu list for desktop view */}
        <div className="hidden md:block">
          <NavItems />
        </div>
        {/* Mobile menu list */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/80 text-white md:hidden flex flex-col items-center justify-center space-y-8 z-50 transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
        >
          {/* Close button */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-5 text-xl hover:text-primary"
          >
            <FaTimes />
          </button>

          {/* Nav links */}
          <NavItems />
        </div>
        {/* Cart icon */}
        <div className="hidden md:block cursor-pointer relative">
          <FaBagShopping size={20} />
          <sup className="absolute top-1 -right-3 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
