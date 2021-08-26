import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Meta from "./components/partials/Meta";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      disable: "mobile",
      disable: "tablet",
    });
  }, []);

  return (
    <>
      <Meta
        title="Home | Web development company specializing in Shopify E-commerce and marketing and advertising for small and medium size businesses."
        desc="Nerd Brainz is a web development company employing developers and designers that specialize in helping small and medium size businesses. Nerd Brainz specializes in helping small to medium size businesses improve their marketing and advertising by giving them access to the global economy. Nerd Brainz are e-commerce specialists and have a knack for social media management, marketing and advertising. Nerd Brainz can handle all things to do with building your website, maintaining it and  bringing your products to the web with a brilliant marketing and advertising strategy. We build with Wordpress, magento, shopify, react, and nextjs and are able to help with all your web development needs."
      />
      <div className="App bg-custom-color-one ">
        {/* START OF with SECTION call-to-action-button  */}
        <section className="text-custom-color-eleven body-font sm:pt-8 lg:pt-8 mx-12 z-50 ">
          <div
            className="container mx-auto flex  py-8 lg:pt-24 lg:pb-0 md:flex-row flex-col items-center  lg:-mr-8 z-50 md:pl-12"
            data-aos="zoom-in"
          >
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:py-44 md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl   text-3xl mb-4 font-medium text-custom-color-ten lg:-ml-24">
                What will
                <br className="hidden lg:inline-block" /> a custom website
                actually look like
              </h1>
              <p className="mb-8 leading-relaxed lg:-ml-24 text-custom-color-eleven">
                How to navigate the world of web development and know what you
                are buying is actually what your project needs.
              </p>

              <div className="flex justify-center">
                <Link href="/information/buying_custom_website">
                  <a>
                    <button className="inline-flex text-white bg-custom-color-six border-0 py-2 px-6 focus:outline-none hover:bg-black-600 rounded text-lg">
                      Custom Websites
                    </button>
                  </a>
                </Link>
              </div>
            </div>

            <div className="relative lg:max-w-5xl lg:w-full lg: md:w-1/2 w-5/6 z-50">
              <Image
                className="object-cover object-center rounded shadow-2xl hidden md:block"
                alt="Link to honest information about choosing a website. what should you expect when buying a custom website professionally built with you and your company in mind and what website would best suit your needs. How should you choose a website and where do you find the most up to date information for free"
                src="/static/images/14.png"
                width={970}
                height={485}
              />
            </div>
          </div>
        </section>

        {/* END OF with SECTION call-to-action-button  */}

        {/* start of what website Section */}

        <section
          id="about-feature"
          className="text-custom-color-eleven body-font bg-custom-color-Three lg:pb-44"
          data-aos="fade-up"
        >
          <Link href="/information/what_website_is_right_for_me">
            <a>
              <div className="container mt-24  px-5 lg:mt-44 lg:pt-24 mx-auto flex flex-wrap ">
                <div className="lg:w-1/2 w-full lg:mb-0 rounded-lg overflow-hidden">
                  <Image
                    alt="Link to page that will help buy a custom website. How to know what website is best suited to you. Should you choose a static site with a main landing page or is an E-commerce site better for selling products and services and what apps can you integrate with my website."
                    id="about-img"
                    className="object-cover object-center w-full pt-12 opacity-90 "
                    src="/static/images/35.png"
                    width={810}
                    height={422}
                  />
                </div>

                <div className="flex flex-col flex-wrap  lg:py-6 -mb-10 lg:w-1/2  lg:pl-20 lg:text-left text-center md:pb-24   ">
                  <div className="flex flex-col  lg:items-start items-center ">
                    <div className="flex-grow">
                      <h1 className="title-font  sm:text-4xl text-3xl mb-4 font-medium pt-12  text-custom-color-ten  ">
                        What website choices are there
                      </h1>
                      <p className="leading-relaxed text-base  text-custom-color-ten text-2xl pb-12">
                        What are my options and what kind of websites can I
                        choose from? What are the benefits for my business with
                        a custom website.
                      </p>
                    </div>

                    <div className="flex pt-5"></div>
                  </div>
                </div>
              </div>
            </a>
          </Link>

          <div class="p-2 w-full mt-12">
            <Link href="/information/what_website_is_right_for_me">
              <a>
                <button class="flex mx-auto text-white  border-0 py-2 px-8   rounded text-lg bg-custom-color-six focus:outline-none hover:bg-black-600">
                  What Website
                </button>
              </a>
            </Link>
          </div>
        </section>
        {/* End of What website Section  */}

        {/* Start of E-commerce/static/service provider */}

        <section className="text-custom-color-eleven body-font lg:pt-24  lg:pb-24">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/3 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden hover">
                  <motion.div
                    whileHover={{
                      position: "relative",
                      zIndex: 1,
                      scale: 1.2,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <Link href="/information/what_is_a_static_site">
                      <a>
                        <Image
                          alt="Link to information about buying a static website. How to know if a static website with a landing page is the correct option for you. What is the best way of building a website that can grow with my company. Is a custom built website better than a template website"
                          className="object-cover object-center h-full w-full"
                          src="/static/images/38.png"
                          width={392}
                          height={256}
                        />
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="sm:w-1/3 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <Link href="/information/information_six">
                      <a>
                        <Image
                          alt="Link to information about selling services online. As a service provider what is the best way to sell my services and collect payments online. How to create online booking systems and who can I get to build these sites for me. Nerdbrainz can build you any website you need"
                          className="object-cover object-center h-full w-full"
                          src="/static/images/36.png"
                          width={392}
                          height={256}
                        />
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="sm:w-1/3 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <Link href="/information/what_is_a_ecommerce_site">
                      <a>
                        <Image
                          alt="Link to find out about E-commerce websites.What is an E-commerce website and how do I choose the right one for me. Nerdbrainz can build you an E-commerce site. Where do I host the site. Who can arrange for my site to hosted and maintained. What is an E-commerce back-end."
                          className="object-cover object-center h-full w-full"
                          src="/static/images/37.png"
                          width={392}
                          height={256}
                        />
                      </a>
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-2 xl:px-2  md:pb-24">
                <div
                  className="container mx-auto flex flex-col px-5  justify-center items-center text-center"
                  data-aos="fade-up"
                >
                  <p className="text-base mt-2 text-custom-color-ten mb-8 w-full text-custom-color-ten  body-font w-2/3 sm:text-4xl text-3xl font-medium lg:pt-24 md:pb-12">
                    Find out more about what each of these types of website
                    actually do and what is right for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End of E-commerce/static/service provider */}

        {/* Start of UI Examples */}
        <section
          className="text-custom-color-eleven body-font"
          data-aos="fade-up"
        >
          <div className="container mx-auto flex  sm:p20  md:py-44 pb-24 md:pt- lg:pt-32 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Link href="/information/what_is_ux_ui_design">
                <a className="cursor">
                  <Image
                    className="object-cover object-center rounded  opacity-90 -rotate-1"
                    alt="Link to information about what UI and UX actually means. Who do you ask about UI and UX and how can I improve my understanding of User Experience and User Interface. Nerdbrainz will improve your User Experience and design your User Interface"
                    src="/static/images/42.png"
                    width={515}
                    height={265}
                  />
                </a>
              </Link>
            </div>

            <div className="lg:flex-grow md:w-1/2 md:py-4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font  sm:text-4xl   md:mr-8 text-3xl mb-4 font-medium text-custom-color-ten ">
                Un-muddling UX and UI Design
              </h1>
              <p className="mb-8 leading-relaxed px-5 md:px-0 lg:px-0 text-custom-color-ten md:mr-12">
                Understanding User Experience and User Interface is a daunting
                process. Read our guide to successful mastery of this science
                and learn why it is essential to the future of your business.
                and find out how Nerdbrainz will make it easier for you.
              </p>
              <Link href="/information/what_is_ux_ui_design">
                <a>
                  <button className="inline-flex text-white bg-custom-color-six border-0 py-2 px-6 focus:outline-none hover:bg-black-600 rounded text-lg">
                    What is UX and UI Design?
                  </button>
                </a>
              </Link>
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
          <div className="container px-5 lg:py-24 mx-auto  mt-24 lg:mt-44">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-6xl text-3xl font-medium title-font mb-2 text-custom-color-ten ">
                How much will a professionally built website cost me
              </h1>
              <p className="lg:w-2/3 text-xl mx-auto leading-relaxed text-base text-custom-color-ten ">
                Simple landing pages, personal blogs, and E-commerce. Our easy
                step by step approach will help you navigate through the
                choosing process.
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
        <div className="mt-24 ml-44 hidden md:block">
          <div className="absolute w-1/6 h-32 top-10 left-4 top-2/3 bg-custom-color-four rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 z-0"></div>

          <div className="absolute w-1/6 h-32 top-80 left-14 bg-custom-color-eight rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000"></div>

          <div className="absolute w-1/6 h-32 bottom-12 left-5/6 bg-custom-color-six rounded-full mix-blend-multiply filter  opacity-10 blur-2xl  animate-blob animation-delay-4000"></div>

          <div className="absolute w-1/6 min-h-screen top-18 bg-custom-color-eight rounded-full mix-blend-multiply filter  opacity-10 animate-blob blur-3xl animation-delay-2000"></div>

          <div className="absolute w-2/6 min-h-screen top-18 left-3/6 w-96 h-96  bg-custom-color-six rounded-full mix-blend-multiply filter  opacity-20 blur-2xl  animate-blob animation-delay-6000"></div>
        </div>

        {/* End of Moving Background  */}

        {/* start of picture and copy Section */}

        <section
          id="about-feature"
          className="text-custom-color-eleven body-font bg-custom-color-Three lg:pb-96"
        >
          <div
            className="container mt-24  px-5 lg:mt-44 lg:pt-24 mx-auto flex flex-wrap "
            data-aos="fade-up"
          >
            <div className="lg:w-1/2 w-full lg:mb-0 rounded-lg overflow-hidden">
              <Image
                alt="Link to how you can improve your business by improving your website. How can good branding build you more clients. Nerdbrainz can create you amazing logos and graphic designs. What technologies will generate more sales and more traffic. How to improver SEO and Search Engine Optimization "
                id="about-img"
                className="object-cover object-center w-full pt-20 opacity-90 -rotate-1"
                src="/static/images/19.png"
                width={756}
                height={467}
              />
            </div>

            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 md:pb-32 lg:w-1/2  lg:pl-12 lg:text-left text-center ">
              <div
                className="flex flex-col  lg:items-start items-center"
                data-aos="zoom-in"
              >
                <div className="flex-grow">
                  <h2 className="text-2xl text-custom-color-ten  text-center md:text-4xl lg:text-7xl title-font font-medium pb-24 md:pb-4 pt-8 mb-5  ">
                    Business Development
                  </h2>
                  <p className="leading-relaxed text-base  text-custom-color-ten text-2xl">
                    We build bespoke websites that help our clients streamline
                    their businesses and reach more people. We have extensive
                    experience building SEO optimised web presences that range
                    from the simplest static websites to large E commerce
                    platforms.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="flex pt-5"> */}
            <div class="p-2 w-full mt-12">
              <Link href="/">
                <a>
                  <button class="flex mx-auto text-white  border-0 py-2 px-8   rounded text-lg bg-custom-color-six focus:outline-none hover:bg-black-600">
                    Business Options
                  </button>
                </a>
              </Link>
              {/* </div> */}
            </div>
          </div>

          {/* End of picture and copy Section  */}

          {/* Start of testimonials */}
          <section className="text-custom-color-eleven body-font lg:pt-44">
            <div className="container px-5 pt-24 pb-12 md:pb-24 mx-auto">
              <h1 className="text-3xl font-medium title-font text-custom-color-ten  mb-12 text-center">
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
                      site. These guys are professional, fast and amazing at
                      what they do!
                    </p>
                    <Link href="/">
                      <a className="inline-flex items-center">
                        <Image
                          href="/"
                          alt="Read the testimonials of happy customers that have had custom websites built by Nerdbrainz. Find out more about the successful  work that Nerdbrainz have been doing to improve peoples websites and optimise their web presence and drive more sales and revenue."
                          src="/static/images/testimonials2.jpg"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          width={48}
                          height={48}
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
                    </Link>
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
                      I initially wanted a simple page for my coffee shop. What
                      I ended up with was a site and a blog that I can share my
                      experience with the world. I have expanded my business
                      into consulting other coffee shop owners to help them find
                      success and doubled my income in the process.
                    </p>
                    <Link href="/">
                      <a className="inline-flex items-center">
                        <Image
                          alt="Read the testimonial of more happy customers that have their websites upgraded by Nerdbrainz. Nerdbrainz has improved speeds increased up times and reduced failure. Nerdbrainz build peoples dream websites. and improved their online companies"
                          src="/static/images/testimonials1.jpg"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          width={48}
                          height={48}
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
                    </Link>
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
                      cannot be beat, especially considering the design skill
                      that they bring to the table. These guys are the best!
                    </p>
                    <Link href="/">
                      <a className="inline-flex items-center">
                        <Image
                          alt="Read the testimonials of companies that have seen spikes in sales and revenue thanks to Nerdbrainz custom websites and branding. Find out how you can have a Nerdbrainz website custom made. Customers have had SEO improved and UX increased and have seen rapid changes to online sales"
                          src="/static/images/testimonials4.jpg"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          width={48}
                          height={48}
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
                    </Link>
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
                    <Link href="/">
                      <a className="inline-flex items-center">
                        <Image
                          alt="Read testimonial of people that have had their E-commerce site built by Nerdbrainz. With greater loading speeds and more intuitive UI and UX User Experience and User Interface. Professionally built Websites by NerdBrainz  "
                          src="/static/images/testimonials3.jpg"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          width={48}
                          height={48}
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* End of testimonials */}
        </section>
      </div>
    </>
  );
};

export default Home;
