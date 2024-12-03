import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [isMobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!isMobileNav);
  };

  return (
    <>
      <nav className="fixed inset-x-0 my-7 mx-4 md:mx-20 px-10 md:px-20 py-4 z-40">
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
            <button onClick={toggleMobileNav}>
              <RxHamburgerMenu className="size-8 text-white" />
            </button>
          </li>
        </ul>
      </nav>
      <AnimatePresence>
        {isMobileNav && (
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-x-0 inset-y-0 px-12 py-12 md:px-16 bg-slate-950 z-50 opacity-95 flex flex-col justify-start items-end gap-10 "
          >
            <motion.button
              initial={{ x: 0, y: 0 }}
              animate={{ rotate: 90 }}
              transition={{ delay: 0.5 }}
              onClick={toggleMobileNav}
            >
              <RiCloseLine className="text-white text-5xl" />
            </motion.button>
            <ul className="flex flex-col justify-end items-end gap-10">
              <motion.li
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ ease: "anticipate", delay: 0.2 }}
              >
                <Link className="text-2xl text-white hover:text-red-400" to="/">
                  Home
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ ease: "anticipate", delay: 0.3 }}
              >
                <Link
                  className="text-2xl text-white hover:text-red-400"
                  to="/about"
                >
                  About
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ ease: "anticipate", delay: 0.4 }}
              >
                <Link
                  className="text-2xl text-white hover:text-red-400"
                  to="/project"
                >
                  Project
                </Link>
              </motion.li>
              <motion.li
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ ease: "anticipate", delay: 0.5 }}
              >
                <Link
                  className="text-2xl text-white hover:text-red-400"
                  to="/contact"
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
