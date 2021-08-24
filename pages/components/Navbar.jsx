import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap p-3 w-screen bg-custom-color-one sm:pt-8 sm:pr-8 md:pr-8 lg:pt-24">
        <Link href="/">
          <Image
            src="/static/images/Logo.png"
            className="h-20 w-auto ml-10 mt-1 cursor-pointer"
            alt=""
            width={80}
            height={80}
          />
        </Link>{" "}
        <button
          className=" inline-flex p-3  rounded lg:hidden text-custom-color-1 ml-auto hover:text-custom-color-1 outline-none"
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
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto md:mr-12 ">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-ten font-bold items-center justify-center text-xl opacity-90">
                Home
              </a>
            </Link>

            <Link href="/portfolio_page">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-ten font-bold items-center justify-center text-xl opacity-90">
                Portfolio
              </a>
            </Link>

            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-ten font-bold items-center justify-center text-xl opacity-90">
                About
              </a>
            </Link>

            <Link href="/contact">
              <a
                href="/contact"
                className="lg:inline-flex lg:w-auto w-full pl-3 py-2 rounded text-custom-color-ten font-bold items-center justify-center text-xl opacity-90"
              >
                Contact
              </a>
            </Link>
          </div>
          <SocialIcons />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
