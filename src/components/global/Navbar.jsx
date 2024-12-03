import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="fixed inset-x-0 my-7 mx-4 md:mx-20 px-10 md:px-20 py-4 border-gray-200 z-50 ">
        <nav>
          {/* desktop */}
          <ul className="hidden lg:flex justify-around items-center w-full">
            <li>
              <Link className="text-xl text-white hover:text-red-400" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-xl text-white hover:text-red-400"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-xl text-white hover:text-red-400"
                to="/project"
              >
                Project
              </Link>
            </li>
            {/* <li>
              <a className="text-xl text-white hover:text-red-400">Education</a>
            </li> */}
            <li>
              <Link
                className="text-xl text-white hover:text-red-400"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* mobile */}
          <ul className="lg:hidden flex justify-between items-center w-full">
            <li>
              <Link className="text-xl text-white hover:text-red-400" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-xl text-white hover:text-red-400"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
