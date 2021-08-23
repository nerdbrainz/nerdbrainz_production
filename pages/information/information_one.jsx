import Meta from "../components/partials/Meta";
const information = () => {
  return (
    <>
      <Meta
        title="Information_One"
        desc="Information one description
        "
      />
      <section
        className=" body-font bg-custom-color-one min-h-full opacity-90
    "
      >
        <div className="container mx-auto flex px-5 pt-24  md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
            <img
              className="object-cover object-center rounded opacity-75"
              alt="hero"
              src="/static/images/21.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-custom-color-ten">
              What you need to know when buying a custom website
            </h1>
            <p className="mb-8 leading-relaxed text-custom-color-ten">
              With more and more of the traditional consumers moving away from
              the high st. The trend of purchasing goods and services online is
              well established. This for many business and service providers
              make their website the most important asset.
              <br />
              <br />
              Your website is a reflection of what your business represents and
              a showcase for what you stand for in the marketplace. With ever
              more tech savvy consumers a unique and well functioning site is
              essential. But why chose a custom built website over a prebuilt
              template?
              <br />
              <br />A custom website has greater future proofing capabilities.
              Working with a strong web designer you get to share your
              aspirations and future plans for your business. Then in
              collaboration your team the websites designers can build a
              platform that will perfectly reflect your concept and expand with
              your growing business. adding pages blogs new products and market
              strategies when needed
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-1 overflow-hidden mx-5 pb-10 sm:-mx-1 md:-mx-2 lg:-mx-1 xl:-mx-1 lg:px-12 md:items-start md:text-left items-center text-center">
          <div className="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 md:my-2 md:px-2 lg:my-1 lg:px-1 xl:my-1 xl:px-1 sm:px-10 text-custom-color-ten  ">
            <p>
              Though the initial time and investment is greater with a custom
              site the return on investment (ROI) can be experiential. Consumers
              are becoming intuitively better able to spot websites that have
              been made on a drag and drop website and just like a poorly
              constructed shopfront this does not induce confidence in the
              products or services being sold. Savvy consumers expect and
              recognise quality, and tired old templates are a definite red
              flag.
              <br />
              <br />
              To sum up, your business is unique and your love and belief in
              your product must be conveyed to the consumer for your business to
              realise its potential. br A prebuilt template may well be able to
              do this but all restrictions will come at a cost. For the growing
              business that cost is often greater that the the added expense of
              a totally unique custom website built just for you.
            </p>
          </div>
        </div>

        {/* Start of button Section */}
        <div className="flex justify-center pb-28">
          <a href="/portfolio_page" target="_blank">
            <button className="inline-flex text-white bg-custom-color-six border-0 py-2 px-6 focus:outline-none hover:custom-color-eleven rounded text-lg">
              Portfolio
            </button>
          </a>
          <a href="/contact" target="_blank">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-custom-color-six rounded text-lg">
              Say Hello
            </button>
          </a>
        </div>
        {/* End of button Section */}

        {/*Start of Moving Background */}
        <div className="ml-44">
          <div className="absolute w-3/5 h-32 top-3/5 left-1/3   bg-custom-color-four rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000 z-0 "></div>

          <div className="absolute w-2/5 h-24 top-1/2 left-4  bg-custom-color-six rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

          <div className="absolute w-2/5 h-24 top-1/2 left-1/3   bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="absolute w-2/5 h-24 bottom-44 left-1/3  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* End of Moving Background  */}
      </section>
    </>
  );
};

export default information;
