/*  ./components/Navbar.jsx     */
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap p-3 mt-8">
        <a href="/" className="inline-flex items-center p-2 mr-4 ">
          <span className="text-xl text-custom-color-Two font-bold uppercase tracking-wide">
            NERDBRAiNZ
          </span>
        </a>

        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-black ml-auto hover:text-blue-500 outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <a
              href="/house_plants"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-Two font-bold items-center justify-center hover:bg-custom-color-Three hover:text-blue-500 "
            >
              Home
            </a>

            {/* <a
              href="/house_plants/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-Two  font-bold items-center justify-center hover:bg-custom-color-Three hover:text-blue-500"
            >
              Services
            </a> */}

            <a
              href="/house_plants/about"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-Two font-bold items-center justify-center hover:bg-custom-color-Three hover:text-blue-500"
            >
              About us
            </a>

            <a
              href="/house_plants/contact"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-Two  font-bold items-center justify-center hover:bg-custom-color-Three hover:text-blue-500"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
