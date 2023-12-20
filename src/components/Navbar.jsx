// Navbar.js

import React, { useState } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" container mx-auto  sticky top-0 z-50 px-6 max-sm:px-2">
      <div className='p-2'>
      </div>
      <div className="glass px-8  h-[4rem] flex items-center justify-between rounded-full ">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-white text-lg font-bold">Your Logo</NavLink>
        </div>

        {/* Navigation Items */}
        <div className="lg:flex lg:items-center lg:justify-center flex-grow hidden">
          <div className="text-slate-300 lg:flex space-x-10">
            <NavLink to="/" className="nav-item" activeClassName="text-gray-300">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item" activeClassName="text-gray-300">
              About
            </NavLink>
            <NavLink to="/skills" className="nav-item" activeClassName="text-gray-300">
              Skills
            </NavLink>
            <NavLink to="/portfolio" className="nav-item" activeClassName="text-gray-300">
              Portfolio
            </NavLink>
            <NavLink to="/contact" className="nav-item" activeClassName="text-gray-300">
              Contact
            </NavLink>
          </div>
        </div>
        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden relative">
          <button
            type="button"
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Responsive Navigation for Small Screens */}
          {isOpen && (
            <div className="absolute top-12 right-0 bg-gray-800 bg-opacity-75 rounded-lg p-4 shadow-md">
              <button
                type="button"
                onClick={toggleNavbar}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <div className="mt-4">
                <NavLink to="/" className="block py-2 rounded-lg border-2 border-gradient text-white hover:bg-gradient hover:border-transparent px-4">
                  Home
                </NavLink>
                <NavLink to="/about" className="block py-2 rounded-lg border-2 border-gradient text-white hover:bg-gradient hover:border-transparent px-4 mt-2">
                  About
                </NavLink>
                <NavLink to="/contact" className="block py-2 rounded-lg border-2 border-gradient text-white hover:bg-gradient hover:border-transparent px-4 mt-2">
                  Contact
                </NavLink>
                <NavLink to="/contact" className="block py-2 rounded-lg border-2 border-gradient text-white hover:bg-gradient hover:border-transparent px-4 mt-2">
                  Contact
                </NavLink>
                <NavLink to="/contact" className="block py-2 rounded-lg border-2 border-gradient text-white hover:bg-gradient hover:border-transparent px-4 mt-2">
                  Contact
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
