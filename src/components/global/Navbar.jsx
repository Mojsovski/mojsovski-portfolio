import React from "react";

function Navbar() {
  return (
    <>
      <header className="fixed inset-x-0 my-7 mx-32 px-20 py-4 bg-opacity-70 border-gray-200 shadow-md z-50 rounded-full ">
        <div className="flex justify-around items-center relative">
          <a className="text-xl text-white hover:text-red-400">Home</a>
          <a className="text-xl text-white hover:text-red-400">About</a>
          <a className="text-xl text-white hover:text-red-400">Education</a>
          <a className="text-xl text-white hover:text-red-400">Experience</a>
          <a className="text-xl text-white hover:text-red-400">Project</a>
          <a className="text-xl text-white hover:text-red-400">Certificate</a>
          <a className="text-xl text-white hover:text-red-400">Contact</a>
        </div>
      </header>
    </>
  );
}

export default Navbar;
