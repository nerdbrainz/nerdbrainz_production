import Link from "next/link";
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
      <Head>
        <title>NERDBRAiNZ</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="" />
        {/* Raleway fonts.google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="flex items-center flex-wrap p-3 w-screen bg-custom-color-one sm:pt-8 sm:pr-8 md:pr-8 lg:pt-24">
        <Link href="/">
          <img
            src="/images/Logo.png"
            className="h-20 w-auto ml-10 mt-1"
            alt=""
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
                The Vault
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
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-color-ten font-bold items-center justify-center text-xl opacity-90"
              >
                Say Hello
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
