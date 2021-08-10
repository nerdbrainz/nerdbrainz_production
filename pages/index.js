import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="App bg-custom-color-one ">
      {/* START OF with SECTION call-to-action-button  */}
      <section className="text-gray-600 body-font sm:pt-8 lg:pt-8 mx-12 z-50">
        <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center  lg:-mr-8 z-50">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl   text-3xl mb-4 font-medium text-custom-color-ten opacity-75 lg:-ml-24 ">
              What will
              <br className="hidden lg:inline-block" /> a custom website
              actually look like
            </h1>
            <p className="mb-8 leading-relaxed lg:-ml-24">
              How to navigate the world of web development and know what you are
              buying is actually what your project needs.
            </p>

            <div className="flex justify-center">
              <button
                className="inline-flex text-white bg-green-300 border-0 py-2 px-6 focus:outline-none hover:bg-black-600 rounded text-lg
              "
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative lg:max-w-5xl lg:w-full lg: md:w-1/2 w-5/6 z-50">
            <img
              className="object-cover object-center rounded shadow-2xl "
              alt="hero"
              src="/images/14.png"
            />
          </div>
        </div>
      </section>

      {/* END OF with SECTION call-to-action-button  */}

      {/* Start of UI Examples */}
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex  sm:p20 lg:pt-32 md:flex-row flex-col items-center "
          data-aos="fade-up"
        >
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded opacity-75 -rotate-1"
              alt="hero"
              src="/images/13.png"
            />
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center
          opacity-25"
          >
            <h1 className="title-font  sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              UN-muddling UX and UI Design
            </h1>
            <p className="mb-8 leading-relaxed px-5 md:px-0 lg:px-0">
              Understanding User Experience and User Interface is a daunting
              process. Read our guide to successful mastery of this science and
              learn why it is essential to the future of your business. and find
              out how Nerdbrainz will make it easier for you.
            </p>
          </div>
        </div>
      </section>

      {/* End of UI Examples */}

      {/* Start of pricing section */}
      <section
        id="pricing"
        className="text-black body-font overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="4000"
      >
        <div className="container px-5 lg:py-24 mx-auto opacity-25 mt-24 lg:mt-44">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-3xl font-medium title-font mb-2 text-custom-ivory">
              How much will a professionally built website cost me
            </h1>
            <p className="lg:w-2/3 text-xl mx-auto leading-relaxed text-base text-custom-ivory">
              Simple landing pages, personal blogs, and E-commerce. Our easy
              step by step approach will help you navigate through the choosing
              process.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-custom-color-one flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Simple Marketing
                </h2>
                <h1 className="text-5xl text-custom-ivory leading-none flex items-center pb-4 mb-4 border-b border-custom-color-one">
                  <span>$1500 +</span>
                </h1>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Domain Name
                </p>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Fully responsive mobile design
                </p>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Multiple Pages
                </p>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Optional Additional Blog
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-custom-color-three flex flex-col relative overflow-hidden">
                <span className="bg-red-500 text-black px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Small Business E-commerce
                </h2>
                <h1 className="text-5xl text-custom-ivory leading-none flex items-center pb-4 mb-4 border-b border-custom-color-one">
                  <span>$5000 +</span>
                </h1>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Domain Name
                </p>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Multiple Hosting Options
                </p>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Blogs Option As Standard
                </p>
                <p className="flex items-center text-black mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Higher SEO Potential
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-custom-color-one flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Mid-Size Business E-Commerce
                </h2>
                <h1 className="text-5xl text-custom-ivory leading-none flex items-center pb-4 mb-4 border-b border-white">
                  <span>$10,000 +</span>
                </h1>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Domain Name
                </p>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Blog Options As Standard
                </p>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Sales System Integration
                </p>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Graphic Design
                </p>
                <p className="flex items-center text-black mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Greater SEO & Web Presence
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-custom-color-one flex flex-col relative overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  Enterprise Level E-Commerce
                </h2>
                <h1 className="text-5xl text-custom-ivory leading-none flex items-center pb-4 mb-4 border-b border-white">
                  <span>$20,000 +</span>
                </h1>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Sales System Integration
                </p>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Business Analytics
                </p>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Greater SEO & Web Presence
                </p>
                <p className="flex items-center text-black mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Market Driven Software
                </p>
                <p className="flex items-center text-black mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-black rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Real Time Customer Statistics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of pricing Section */}

      {/*Start of Moving Background */}
      <div className="mt-24 ml-44">
        <div className="absolute w-2/5 h-32 top-10 left-4 top-2/3 bg-custom-color-four rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 z-0"></div>

        {/* <div className="absolute w-2/5 min-h-screen top-10 left-4  bg-custom-color-six rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000"></div> */}

        {/* <div className="absolute w-2/5 min-h-screen top-0 left-24 bg-custom-color-four rounded-full mix-blend-multiply filter blur-2xl opacity-5 animate-blob animation-delay-4000"></div> */}

        {/* <div className="absolute w-2/5 min-h-screen top-0 left-24 bg-custom-color-four rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000"></div> */}

        <div className="absolute w-2/5 h-32 top-80 left-14 bg-custom-color-eight rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000"></div>

        {/* <div className="absolute w-2/5 min-h-screen top-8  left-14 bg-custom-color-seven rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div> */}

        <div className="absolute w-2/5 h-32 bottom-12 right-4 bg-custom-color-six rounded-full mix-blend-multiply filter  opacity-10 blur-2xl  animate-blob animation-delay-2000"></div>

        {/* <div className="absolute w-2/5 min-h-screen top-18 right-4 bg-custom-color-five rounded-full mix-blend-multiply filter  opacity-25 blur-2xl  animate-blob animation-delay-4000"></div> */}

        {/* <div className="absolute w-2/5 min-h-screen top-18 bg-custom-color-four rounded-full mix-blend-multiply filter  opacity-10  animate-blob blur-3xl animation-delay-6000"></div> */}

        <div className="absolute w-2/5 min-h-screen top-18 bg-custom-color-eight rounded-full mix-blend-multiply filter  opacity-5  animate-blob blur-3xl animation-delay-2000"></div>

        <div className="absolute w-2/5 min-h-screen top-18 right-12 w-96 h-96  bg-custom-color-six rounded-full mix-blend-multiply filter  opacity-10 blur-2xl  animate-blob animation-delay-6000"></div>
      </div>

      {/* End of Moving Background  */}

      {/* start of picture and copy Section */}

      <section
        id="about-feature"
        className="text-gray-600 body-font bg-custom-color-Three lg:pb-96"
      >
        <div className="container mt-24  px-5 lg:mt-44 lg:pt-24 mx-auto flex flex-wrap ">
          <div className="lg:w-1/2 w-full lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              id="about-img"
              className="object-cover object-center w-full pt-20 opacity-75 -rotate-1"
              src="/images/19.png"
            />
          </div>

          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2  lg:pl-12 lg:text-left text-center ">
            <div className="flex flex-col  lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-2xl text-custom-color-ten text-center lg:text-7xl title-font font-medium pt-12 mb-5">
                  Business Development
                </h2>
                <p className="leading-relaxed text-base text-2xl">
                  We build bespoke websites that help our clients streamline
                  their businesses and reach more people. We have extensive
                  experience building SEO optimised web presences that range
                  from the simplest static websites to large E commerce
                  platforms.
                </p>
              </div>
              <div className="flex pt-5">
                <button
                  className="inline-flex text-white bg-green-300 border-0 py-2 px-6 focus:outline-none hover:bg-black-600 rounded text-lg 
              "
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* End of picture and copy Section  */}

        {/* Start of testimonials */}
        <section className="text-gray-600 body-font lg:pt-44">
          <div className="container px-5 pt-24 mx-auto">
            <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              Testimonials
            </h1>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    My e-commerce site was up and running in no time. I am
                    making sales within two weeks of talking to Alex about the
                    site. These guys are professional, fast and amazing at what
                    they do!
                  </p>
                  <a className="inline-flex items-center" href="/">
                    <img
                      href="/"
                      alt="testimonial"
                      src="https://images.unsplash.com/photo-1601581975053-7c899da7347e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3N3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Kim
                      </span>
                      <span className="text-gray-500 text-sm">
                        E-Commerce Shop Owner and Entrepreneur
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    I initially wanted a simple page for my coffee shop. What I
                    ended up with was a site and a blog that I can share my
                    experience with the world. I have expanded my business into
                    consulting other coffee shop owners to help them find
                    success and doubled my income in the process.
                  </p>
                  <a className="inline-flex items-center" href="/">
                    <img
                      alt="testimonial"
                      src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3NtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        James
                      </span>
                      <span className="text-gray-500 text-sm">
                        Coffee Shop Owner
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    Literally the best work you could ever ask for! The prices
                    cannot be beat, especially considering the design skill that
                    they bring to the table. These guys are the best!
                  </p>
                  <a className="inline-flex items-center" href="/">
                    <img
                      alt="testimonial"
                      src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Ron
                      </span>
                      <span className="text-gray-500 text-sm">
                        Small Business Owner
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6">
                    Delivered a project much better than expected. The website
                    site is perfect and the experience could not have been
                    better. From logo and color scheme to delivery and
                    deployment these guys were amazing to deal with. I love my
                    new site.
                  </p>
                  <a className="inline-flex items-center" href="/">
                    <img
                      alt="testimonial"
                      src="https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3N3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        Tami
                      </span>
                      <span className="text-gray-500 text-sm">
                        Clothing Store Owner
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End of testimonials */}
      </section>
    </div>
  );
};

export default Home;
