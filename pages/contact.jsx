import Link from "next/link";
import Meta from "./components/partials/Meta";
const Contact = () => {
  return (
    <>
      <Meta
        title="Contact | Get in touch with Nerd Brainz today to handle all your web development, design, SEO and online marketing needs. We specialize in bringing your small and medium business online with custom static and e-commerce solutions."
        desc="Nerd Brainz is here to help you with all your web development, web design and SEO needs. We can help you create a brilliant marketing and advertising strategy online and through social media that will give your company a leg up in the ever increasing online market place. Get in touch with us today."
      />
      <section className=" bg-custom-color-one lg:pb-12 opacity-90">
        {/* Start of contact section */}
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-custom-color-ten">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
                Get in touch we at NERDBRAiNZ will be happy to help you with any
                of questions you may have.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      className="leading-7 text-sm text-gray-600"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <Link href="/contact">
                    <button className="flex mx-auto text-white bg-custom-color-six border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Button
                    </button>
                  </Link>
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <a className="text-custom-color-five opacity-75">
                    nerdbrainz@nerdbrainz.com
                  </a>
                  <p className="leading-normal my-5">USA UK</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* End of contact section */}

        {/*Start of Moving Background */}
        <div className="ml-44">
          <div className="absolute w-2/5 h-32 top-1/3 left-1/3  bg-custom-color-four rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 z-0 "></div>

          <div className="absolute w-2/5 h-24 top-2/3 left-1/3  bg-custom-color-six rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

          <div className="absolute w-2/5 h-24 top-1/2 left-1/3  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

          <div className="absolute w-2/5 h-24 bottom-44 left-1/3 bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* End of Moving Background  */}
      </section>
    </>
  );
};

export default Contact;
