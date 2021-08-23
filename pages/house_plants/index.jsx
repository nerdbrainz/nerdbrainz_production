import HousePlantNavbar from "../components/HousePlantNavbar";
import HousePlantFooter from "../components/HousePlantFooter";

export default function HousePlantsHome() {
  return (
    <>
      <HousePlantNavbar />
      <section className="bg-plants-custom-color-one min-w-full lg:mr-0">
        {/* Start of hero 1 */}
        <section className="text-gray-600 body-font ">
          <div className="  flex  pt-8 pb-24 md:flex-row flex-col items-center   overflow-hidden ">
            <div className="md:absolute lg:absolute z-10 lg:flex-grow md:w-1/2 lg:mr-12 lg:ml-12 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 ml-4 font-medium text-plants-custom-color-Two">
                Plants Sale Largest collection
                <br className="hidden lg:inline-block" />
                of home grown tropicals
              </h1>
              <p className="mb-8 ml-4 leading-relaxed">
                NERDBRAiNZ offers a full range of web development and design
                services
              </p>

              <div className="flex justify-center ">
                <button className="inline-flex text-white bg-plants-custom-color-Three border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ml-4">
                  Button
                </button>
              </div>
            </div>
            <div className="bg-green-500 w-full lg:-mr-4">
              <img className="" src="/static/images/hero4.png" alt="" />
            </div>
          </div>
        </section>

        {/* End of hero 1  */}

        {/* Start 4 Image Set  */}

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto min-w-full">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl md:text-6xl font-medium title-font mb-2 text-gray-900">
                  From Our Own Nurseries
                </h1>
                <div className="h-1 w-20 bg-plants-custom-color-Three rounded"></div>
              </div>
              {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag. 
              </p>*/}
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/static/images/product1.png"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {/* SUBTITLE */}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Graphic Design
                  </h2>
                  <p className="leading-relaxed text-base">
                    Nerdbrainz is perfectly positioned to fulfil your design
                    needs and build you a highly customized unique site.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/static/images/product4.png"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {/* SUBTITLE */}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Website Development
                  </h2>
                  <p className="leading-relaxed text-base">
                    We can work with you to custom build a website that can grow
                    and evolve with your companies future needs.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/static/images/product3.png"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {/* SUBTITLE */}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    SEO and Brand Awareness
                  </h2>
                  <p className="leading-relaxed text-base">
                    We will help you unify your branding and build a
                    recognizable web presents with SEO optimization. So as to
                    reach more people.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/static/images/product2.png"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {/* SUBTITLE */}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Web & App Management
                  </h2>
                  <p className="leading-relaxed text-base">
                    We offer a range of management options for your website to
                    ensure optimum speeds and less down time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End 4 Image Set  */}

        {/* Start of banner Section  */}
        <div className="min-w-full md:py-24">
          <img className="min-w-full" src="/static/images/hero5.png" alt="" />
        </div>
        {/* End of banner Section */}

        {/* Start of two window */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto min-w-full">
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-2/4 md:w-1/2 p-4">
                <div className="bg-plants-custom-color-one p-6 rounded-lg">
                  <a href="/" className="cursor">
                    <img
                      className="h-100 rounded w-full object-cover object-center mb-6"
                      src="/static/images/product12.png"
                      alt="content"
                    />
                  </a>

                  {/* <h2 className=" text-lg text-gray-900 font-medium title-font mb-4 center">
                    NERDBRAiNZ is a customizable service because we know that
                    you business is one of a kind.
                  </h2> */}
                </div>
              </div>
              <div className="xl:w-2/4 md:w-1/2 p-4">
                <div className="bg-plants-custom-color-one p-6 rounded-lg">
                  <a href="/" className="cursor">
                    <img
                      className="h-100 rounded w-full object-cover object-center mb-6"
                      src="/static/images/product13.png"
                      alt="content"
                    />
                  </a>

                  {/* <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Find out how we can help you grow your brand from the
                    website up and lear what other services we offer.
                  </h2> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End of two window  */}

        {/* Start of 2 window  */}
        {/* 
        <section className="text-gray-600 body-font overflow-hidden sm:h-14 ">
          <div className="container px-5  mx-auto flex flex-wrap ">
            <div className="lg:w-full lg:h-full mx-auto ">
              <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/2 ">
                  <div className="flex flex-wrap w-full bg-gray-100 mb-24 py-24 py-16 sm:px-10 px-6 relative bg-white">
                    <img
                      alt="gallery"
                      className="w-full	 object-cover h-auto object-center block  md:absolute inset-0 opacity-40"
                      src="/static/images/product9.png
                      "
                    />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-base  md:text-2xl lg:text-6xl text-plants-custom-color-Two font-medium title-font mb-2 ">
                        NERDBRAiNZ is a customizable service because we know
                        that you business is one of a kind.
                      </h2>
                      <p className="leading-relaxed text-plants-custom-color-Two md:text-xl lg:text-4xl">
                        We are so much more than just a website builder
                        <br />
                      </p>
                      <a className="mt-3 md:text-xl lg:text-4xl text-red-500 inline-flex items-center">
                        Find Out More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="px-2 w-1/2 ">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative mb-24 bg-white ">
                    <img
                      alt="gallery"
                      className="w-full object-cover h-auto object-center block   md:absolute inset-0  opacity-40  "
                      src="/static/images/product11.png"
                    />
                    <div className="text-center relative z-10 w-full pb-64">
                      <h2 className="text-base  md:text-2xl lg:text-4xl xl:text-6xl text-plants-custom-color-Two font-medium title-font mb-2 ">
                        Find out how we can help you grow your brand from the
                        website up and lear what other services we offer.
                      </h2>
                      <p className="leading-relaxed text-plants-custom-color-Two md:text-xl lg:text-4xl">
                        Get in contact and see how we can help your company.
                      </p>
                      <a className="mt-3 md:text-xl lg:text-4xl text-red-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* end of 2 window */}

        {/* Start of Contact */}

        <section id="test" className="text-gray-600 body-font relative pb-44">
          <div className=" py-24 mx-auto pl-5 pr-5">
            {/* <img
              className=" absolute z-0 w-min-full mb-24"
              src="/static/images/hero9.png"
              alt=""
            /> */}
            <div className="flex flex-col text-center w-full mb-12 ">
              {/* <h1 className="z-10 sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact Us
              </h1>
              <p className="z-10 lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p> */}
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto mt-24">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-xl text-plants-custom-color-Two"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-25 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-xl text-plants-custom-color-Two"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-25 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-xl text-plants-custom-color-Two"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-25 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="z-10 flex mx-auto text-white bg-plants-custom-color-Three border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Contact */}
      </section>
      <HousePlantFooter />
    </>
  );
}
