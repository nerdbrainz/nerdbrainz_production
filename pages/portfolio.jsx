const portfolio = () => {
  return (
    <section className="text-custom-color-ten body-font bg-custom-color-one  opacity-90 md:pb-20">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-custom-color-ten">
            The NERDBRAiNZ Vault
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our ethos is simple websites should be beautiful. If you want
            something some special we want to hear about it, if you can think of
            it we want to build it for you. The more creative or out there the
            bigger the challenge and the more fun for all of use it is going to
            be.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/images/41.png"
              />
              {/* <iframe
                classNameName="absolute inset-0 w-full h-full object-cover object-center"
                src="https://www.theyardbarber509.com"
              ></iframe> */}
              <a href="https://www.theyardbarber509.com" target="_blank">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    The Yard Barber
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Static Website
                  </h1>
                  <p className="leading-relaxed">
                    This example of a static website comes with options for
                    backend capabilities and blogs to manipulate and edit the
                    website yourself.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/images/1.png"
              />
              <a href="/" target="_blank">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Kids Clothes Shop
                  </h2>

                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    E-commerce
                  </h1>
                  <p className="leading-relaxed">
                    Our E-commerce sites act as fully functioning retail
                    business with endless addon and integrations and up to the
                    minute business solutions.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="/images/26.png"
              />
              <a href="/" target="_blank">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Engage Online
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Client Services
                  </h1>
                  <p className="leading-relaxed">
                    Our serviced focused web solutions allow companies to sell
                    their intellectual services, schedule and bill clients,
                    create course content and so much more.
                  </p>
                </div>
              </a>
            </div>
          </div>
          {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/602x362"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Neptune
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/605x365"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Holden Caulfield
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div> */}
          {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/606x366"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Alper Kamu
                </h1>
                <p className="leading-relaxed">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/*Start of Moving Background */}
      <div classNameName="ml-44">
        <div classNameName="absolute w-2/5 h-32 top-1/3 left-1/3  bg-custom-color-four rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000 z-0 "></div>

        <div classNameName="absolute w-2/5 h-24 top-2/3 left-1/3  bg-custom-color-six rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

        <div classNameName="absolute w-2/5 h-24 top-1/2 left-1/3  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>

        <div classNameName="absolute w-2/5 h-24 bottom-44 left-1/3 bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* End of Moving Background  */}
    </section>
  );
};

export default portfolio;
