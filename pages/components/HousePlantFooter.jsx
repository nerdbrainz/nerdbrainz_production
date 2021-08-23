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
        <a
          rel="noreferrer"
          href="/"
          className="inline-flex items-center p-2 mr-4 "
        >
          <span className="text-xl text-custom-color-Two font-bold uppercase tracking-wide">
            NERDBRAiNZ
          </span>
        </a>

        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-black ml-auto hover:text-white outline-none"
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
              rel="noreferrer"
              href="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-Two font-bold items-center justify-center hover:bg-custom-color-Three hover:text-white "
            >
              Home
            </a>

            {/* <a rel="noreferrer"
              href="/"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-Two  font-bold items-center justify-center hover:bg-custom-color-Three hover:text-white"
            >
              Services
            </a> */}

            <a
              rel="noreferrer"
              href="/about"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-Two font-bold items-center justify-center hover:bg-custom-color-Three hover:text-white"
            >
              About us
            </a>

            <a
              rel="noreferrer"
              href="/contact"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-Two  font-bold items-center justify-center hover:bg-custom-color-Three hover:text-white"
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
