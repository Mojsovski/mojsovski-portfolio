import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <>
      <nav className="fixed inset-x-0 my-7 mx-4 md:mx-20 px-10 md:px-20 py-4 border-gray-200 z-50">
        {/* desktop */}
        <ul className="hidden lg:flex justify-around items-center w-full">
          <li>
            <Link className="text-xl text-white hover:text-red-400" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-xl text-white hover:text-red-400" to="/about">
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
            <RxHamburgerMenu className="size-8 text-white" />
          </li>
        </ul>
      </nav>
    </>
    // <div className="lg:hidden fixed inset-x-0 inset-y-0 px-10 py-4 bg-slate-950 z-50 opacity-90 flex flex-col">
    //   <div className=""></div>
    //   <div className=""></div>
    // </div>
  );
}

export default Navbar;
