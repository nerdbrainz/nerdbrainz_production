import Link from "next/link";
import Meta from "./components/partials/Meta";
const Contact = () => {
  return (
    <>
      <Meta
        title="Contact | Get in touch with Nerd Brainz today to handle all your web development, design, SEO and online marketing needs. We specialize in bringing your small and medium business online with custom static and e-commerce solutions."
        desc="Nerd Brainz is here to help you with all your web development, web design and SEO needs. We can help you create a brilliant marketing and advertising strategy online and through social media that will give your company a leg up in the ever increasing online market place. Get in touch with us today."
      />
      <section className=" bg-custom-color-one lg:pb-12 opacity-90 min-h-screen">
        {/* Start of contact section */}
        <section className="text-gray-600 body-font relative min-h-screen">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative min-h-screen">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameborder="0"
                title="map"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10749.818454155744!2d-117.4215296!3d47.6561642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a5d54b1404420f8!2sRegus%20-%20Washington%2C%20Spokane%20-%20Wells%20Fargo%20Center!5e0!3m2!1sen!2sus!4v1630080508636!5m2!1sen!2sus"
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    601 W 1st Ave Suite 1400, Spokane, WA 99201
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    email@nerdbrainz.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+1 (509) 217-2823</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2   flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <h2 className="text-3xl mb-5 capitalize">
                We would love to bring your business online.
              </h2>
              <p className="text-xl">
                Please get in touch with us by text, phone or email and we will
                get back to you ASAP. While our Agency is new, our skills are
                not. We can develop anything you need to bring your company to
                the global market.
              </p>
            </div>
          </div>
        </section>

        {/* End of contact section */}

        {/*Start of Moving Background */}
        {/* <div className="ml-44">
          <div className="absolute w-2/5 h-32 top-1/3 left-1/3  bg-custom-color-four rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 z-0 "></div>

          <div className="absolute w-2/5 h-24 top-2/3 left-1/3  bg-custom-color-six rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

          <div className="absolute w-2/5 h-24 top-1/2 left-1/3  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

          <div className="absolute w-2/5 h-24 bottom-44 left-1/3 bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div> */}

        {/* End of Moving Background  */}
      </section>
    </>
  );
};

export default Contact;
