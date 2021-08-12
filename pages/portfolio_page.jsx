import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PortfolioPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <section>
      {/* Start first row of cards */}
      <section class="text-gray-600 body-font bg-custom-color-one">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-custom-color-ten opacity-75">
              Portfolio Projects And Designs
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-custom-color-ten">
              We know that your business is not just one thing. To compete on
              the online stage we need to be so much more than purely what we
              sell. Our online presence needs to inform, inspire and reassure
              our prospective clientele. So NERDBRAiNZ offers multiple options
              with near endless ways to customize and make your website as
              unique as your product.
            </p>
          </div>

          <div class="flex flex-wrap -m-4 pb-24">
            <div class="lg:w-1/3 sm:w-1/2 p-4 pb-44" data-aos="fade-right">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/5.png"
                />

                <a target="_blank" href="http://localhost:3000/">
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-custom-color-six mb-1">
                      Classic Static
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Simple Business Builder
                    </h1>
                    <p class="leading-relaxed">
                      Our starter options offer websites that will grow with
                      you. They come as standard with up to five information
                      pages, contact and about us pages and primed for SEO
                      optimization. With added options like blogs.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div
              class="lg:w-1/3 sm:w-1/2 p-4"
              data-aos="fade-down"
              data-aos-anchor-placement="top-bottom"
            >
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/24.png"
                />
                <a target="_blank" href="http://localhost:3000/">
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-custom-color-six mb-1">
                      E-Commerce
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      Traders Platform
                    </h1>
                    <p class="leading-relaxed">
                      Our e-commerce solutions are perfect for selling unique
                      hand made products, design and artwork, food products or
                      whatever you can imagine and of course mass market goods
                      drop-shipping and much more.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/26.png"
                />
                <a target="_blank" href="http://localhost:3000/">
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 class="tracking-widest text-sm title-font font-medium text-custom-color-six mb-1">
                      Service Provider
                    </h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      The Hybrid
                    </h1>
                    <p class="leading-relaxed">
                      Our service focused sites are ideal for course providers
                      and educators, event management, financial and legal
                      industries and real estate. For companies that sell both
                      information and time we have.
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4 " data-aos="fade-up">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/25.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-custom-color-six mb-1">
                    Shopify
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    E-Commerce
                  </h1>
                  <p class="leading-relaxed">
                    We are a specialist shopify websites builder. We can build
                    totally unique front end scalable sites with integrated
                    shopify back ends
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-in">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/27.jpeg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-custom-color-six b-1">
                    Blogs
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    We can create your blog
                  </h1>
                  <p class="leading-relaxed">
                    We will work with you so you end up with an easy integrable
                    website blog that can be access by all devices.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-out-left">
              <div class="flex relative">
                <img
                  alt="gallery"
                  class="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/28.jpeg"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-custom-color-six mb-1">
                    Service industries
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    Reaching more people
                  </h1>
                  <p class="leading-relaxed">
                    We can create a website that will allow for you to offer
                    your services online with automated client billing. For one
                    off sales and recurring billing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End first row of cards */}

      {/* Start second row of cards */}
      <section class="text-gray-600 body-font bg-custom-color-one">
        <div class="container px-5 py-24 mx-auto pb-64">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/3" data-aos="fade-down-right">
              <div class="h-full bg-custom-color-nine bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2> */}
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Why might I need a custom website
                </h1>
                <p class="leading-relaxed mb-3">
                  Wat is the difference between a custom website and an off the
                  shelf template?
                </p>
                <a
                  href="/information"
                  target="_blank"
                  class="text-custom-color-six inline-flex items-center"
                >
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                {/* <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div> */}
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div
                class="h-full bg-custom-color-nine bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                data-aos="fade-up"
              >
                {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2> */}
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  What is UX & UI Design
                </h1>
                <p class="leading-relaxed mb-3">
                  what is the difference between User Experience and User
                  Interface and do I need to think about it?
                </p>
                <a
                  href="/information-two"
                  target="_blank"
                  class="text-custom-color-six inline-flex items-center"
                >
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  {/* <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span> */}
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/3">
              <div
                class="h-full bg-custom-color-nine bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                data-aos="fade-down-left"
              >
                {/* <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  CATEGORY
                </h2> */}
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  What Website is right for me
                </h1>
                <p class="leading-relaxed mb-3">
                  How do I know what website I need and will those criteria
                  still be relevant for me in the future
                </p>
                <a class="text-custom-color-six inline-flex items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                {/* <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                    6
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End second row of cards */}

      {/*Start of Moving Background */}
      <section>
        <div className="ml-44">
          <div className="absolute w-3/5 h-32 top-1/3 left-1/4  bg-custom-color-four rounded-full mix-blend-multiply filter blur-3xl opacity-20  animate-blob animation-delay-2000 z-0 "></div>

          <div className="absolute w-3/5 h-24 top-2/3 left-80  bg-custom-color-six rounded-full mix-blend-multiply filter blur-3xl opacity-30  animate-blob animation-delay-6000"></div>

          <div className="absolute w-3/5 h-24 top-1/2 left-80  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="absolute w-3/5 h-24 bottom-1/4 left-80  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* End of Moving Background  */}
      </section>
    </section>
  );
};

export default PortfolioPage;
