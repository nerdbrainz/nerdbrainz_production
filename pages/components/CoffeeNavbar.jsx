import Link from "next/link";
import { useState } from "react";

const CoffeeNavbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      {/* <a href="/portfolio_page">
        <img
          className="m-6 width-full z-50 sticky top-0"
          src="/static/images/nerdbrainz_logo_back_to_vault_small.png"
          alt=""
        />
      </a> */}
      <nav className="flex items-center flex-wrap bg-custom-black-light p-3 border-b-2 border-white ">
        <Link href="/portfolio_page">
          <a className="inline-flex items-center p-2 mr-4">
            <img
              className="h-14 w-14 mr-6 filter invert "
              src="/static/images/nb_logo.png"
              alt=""
            />{" "}
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              NerdBrainz Coffee{" "}
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-custom-tan rounded lg:hidden text-white ml-auto hover:text-black outline-none"
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
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/nerdbrainz_coffee/">
              <a className="uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-tan hover:text-black">
                <i className="fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3"></i>
                Home
              </a>
            </Link>
            <Link href="/nerdbrainz_coffee/menu">
              <a className="uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-tan hover:text-black">
                <i className="fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3"></i>
                Our Menu
              </a>
            </Link>
            <Link href="/nerdbrainz_coffee/news">
              <a className="uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-tan hover:text-black">
                <i className="fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3"></i>
                News & Events
              </a>
            </Link>
            <Link href="/nerdbrainz_coffee/about">
              <a className="uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-tan hover:text-black">
                <i className="fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3"></i>
                ABOUT
              </a>
            </Link>
            <Link href="/nerdbrainz_coffee/contact">
              <a className="uppercase lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-custom-tan hover:text-black">
                <i className="fas fa-mug-hot text-white text-lg mr-3 hidden md:block mb-3"></i>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default CoffeeNavbar;
