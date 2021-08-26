import Link from "next/link";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Meta from "./components/partials/Meta";

const PortfolioPage = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      disable: "mobile, tablet",
    });
  }, []);
  // 510x450
  return (
    <>
      <Meta
        title="Portfolio | Nerd Brainz portfolio has some of our live sites and templates that we want to share with the world. We have many more and can create any custom static website, blog or e-commerce site for our customers"
        desc="Nerd Brainz portfolio is here so cusomers can get an idea of what purchasing a site from us will get them.We have many sites coming on line every week as we continue to serve our customers and build custom websites for them, we have linked a few of them here. Browse our websites and get an idea of how you would like your online presence to look with a custom website for you business built by Nerd Brainz."
      />
      <section>
        {/* Start first row of cards */}
        <section className="text-custom-color-eleven body-font bg-custom-color-one">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-custom-color-ten ">
                Portfolio Projects And Designs
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-custom-color-ten">
                We know that your business is not just one thing. To compete on
                the online stage we need to be so much more than purely what we
                sell. Our online presence needs to inform, inspire and reassure
                our prospective clientele. So NERDBRAiNZ offers multiple options
                with near endless ways to customize and make your website as
                unique as your product.
              </p>
            </div>

            <div className="flex flex-wrap -m-4 pb-24">
              <div
                className="lg:w-1/3 sm:w-1/2 p-4 pb-44"
                data-aos="fade-right"
              >
                <div className="flex relative">
                  <Image
                    alt="Link to portfolio example website created by nerdbrainz to display the kind of work that they are known for. You can have your very own unique custom website created by Nerdbrainz. Custom websites will attract my customers and drive sales. Nerdbrainz creative website design."
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/static/images/portfolio6.png"
                    layout="fill"
                  />

                  <a target="_blank" href="https://www.theyardbarber509.com">
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
                      <h2 className="tracking-widest text-sm title-font font-medium text-custom-color-six mb-1">
                        Classic Static
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        Simple Business Builder
                      </h1>
                      <p className="leading-relaxed">
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
                className="lg:w-1/3 sm:w-1/2 p-4"
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="flex relative">
                  <Image
                    alt="Link to a Nerdbrainz portfolio example site. Nerdbrainz makes websites for small to medium sized business. Nerdbrainz is especially well known for E-commerce sites. They create full stack websites with creative design that is tailored for your business."
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/static/images/portfolio3.png"
                    layout="fill"
                  />
                  <a target="_blank" href="house_plants">
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
                      <h2 className="tracking-widest text-sm title-font font-medium text-custom-color-six mb-1">
                        E-Commerce
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        Traders Platform
                      </h1>
                      <p className="leading-relaxed">
                        Our e-commerce solutions are perfect for selling unique
                        hand made products, design and artwork, food products or
                        whatever you can imagine and of course mass market goods
                        drop-shipping and much more.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="fade-up">
                <div className="flex relative">
                  <Image
                    alt="Link to one of Nerdbrainz portfolio example websites. Nerdbrainz creates E-commerce solutions for companies like financial services, banking, insurance brokers. Nerdbrainz listens to what your company actually needs the most and creates solution focused website design. Nerdbrainz E-commerce solutions are designed by you for you."
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/static/images/portfolio2.png"
                    layout="fill"
                  />
                  <a target="_blank" href="/nerdbrainz_coffee">
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-0">
                      <h2 className="tracking-widest text-sm title-font font-medium text-custom-color-six mb-1">
                        Service Provider
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        The Hybrid
                      </h1>
                      <p className="leading-relaxed">
                        Our service focused sites are ideal for course providers
                        and educators, event management, financial and legal
                        industries and real estate. For companies that sell both
                        information and time we have.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 " data-aos="fade-up">
                <div className="flex relative">
                  <Image
                    alt="Picture of a Nerdbrainz website displaying information about E-commerce and especially Shopify. Nerdbrainz is in partnership with Shopify to bring their customers faster more reliable E-commerce solutions. Nerdbrainz understand the needs of a modern online retailer and create websites that will drive sales and reduce abandoned carts"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/static/images/portfolio5.png"
                    layout="fill"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-custom-color-six mb-1">
                      Service Industry
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Reaching more people
                    </h1>
                    <p className="leading-relaxed">
                      We can create a website that will allow for you to offer
                      your services online with automated client billing. For
                      one off sales and recurring billing
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4 " data-aos="zoom-in">
                <div className="flex relative">
                  <Image
                    alt="Example picture of an actual website created by Nerdbrainz. Nerdbrainz creates websites perfectly suited for companies and businesses that sell services online and need to take bookings. Nerdbrainz will create websites with payment systems that connect directly to accounting services. Nerdbrainz websites give you more control and help you interact with customers. "
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/static/images/portfolio1.png  "
                    layout="fill"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-custom-color-six b-1">
                      Blogs
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      We can create your blog
                    </h1>
                    <p className="leading-relaxed">
                      Together we will create an interactive website that
                      perfectly highlights what is special about your
                      organization and what you have to offer to the world.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 sm:w-1/2 p-4" data-aos="zoom-out-left">
                <div className="flex relative">
                  <Image
                    alt="Image of a website made by Nerdbrainz. That shows their unique style and skill at building beautiful websites. Nerdbrainz is perfectly situated to create you a website that has the ability to take orders, bookings and take payment."
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src="/static/images/portfolio4.png"
                    layout="fill"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-custom-color-six mb-1">
                      Shopify
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      E-Commerce
                    </h1>
                    <p className="leading-relaxed">
                      We are a specialist shopify websites builder. We can build
                      totally unique front end scalable sites with integrated
                      shopify back ends
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End first row of cards */}

        {/* Start second row of cards */}
        <section className="text-custom-color-eleven body-font bg-custom-color-one">
          <div className="container px-5 py-24 mx-auto pb-64">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/3" data-aos="fade-down-right">
                <div className="h-full bg-custom-color-nine bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Why might I need a custom website
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Wat is the difference between a custom website and an off
                    the shelf template?
                  </p>
                  <a
                    href="/information"
                    target="_blank"
                    className="text-custom-color-six inline-flex items-center"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div
                  className="h-full bg-custom-color-nine bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                  data-aos="fade-up"
                >
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    What is UX & UI Design
                  </h1>
                  <p className="leading-relaxed mb-3">
                    what is the difference between User Experience and User
                    Interface and do I need to think about it?
                  </p>
                  <a
                    href="/information-two"
                    target="_blank"
                    className="text-custom-color-six inline-flex items-center"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"></div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3">
                <div
                  className="h-full bg-custom-color-nine bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                  data-aos="fade-down-left"
                >
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    What Website is right for me
                  </h1>
                  <p className="leading-relaxed mb-3">
                    How do I know what website I need and will those criteria
                    still be relevant for me in the future
                  </p>
                  <a className="text-custom-color-six inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Start of button Section */}
          <div className="flex justify-center pb-28">
            <a href="/contact" target="_blank">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-custom-color-six rounded text-lg">
                Say Hello
              </button>
            </a>
          </div>
          {/* End of button Section */}
        </section>
        {/* End second row of cards */}

        {/*Start of Moving Background */}
        <section>
          <div className="ml-44">
            <div className="absolute sm:w-0 sm:h-0 lg:w-3/5 h-32 top-1/3 left-1/4  bg-custom-color-four rounded-full mix-blend-multiply filter blur-3xl opacity-20  animate-blob animation-delay-2000 z-0 "></div>

            <div className="absolute sm:w-0 sm:h-0 lg:w-3/5 h-24 top-2/3 left-80  bg-custom-color-six rounded-full mix-blend-multiply filter blur-3xl opacity-30  animate-blob animation-delay-6000"></div>

            <div className="absolute sm:w-0 sm:h-0 lg:w-3/5 h-24 top-1/2 left-80  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="absolute sm:w-0 sm:h-0 lg:w-3/5 h-24 bottom-1/4 left-80  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>

          {/* End of Moving Background  */}
        </section>
      </section>
    </>
  );
};

export default PortfolioPage;
