import React from "react";

function Navbar() {
  return (
    <>
      <header className="fixed h-15 inset-x-0 my-6 mx-14 px-7 py-5 bg-black border-gray-200 shadow-md z-50 rounded-full ">
        <button className="text-xl text-white hover:text-red-400">Halo</button>
      </header>
    </>
  );
}

export default Navbar;
