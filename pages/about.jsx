import Meta from "../components/partials/Meta";
const about = () => {
  return (
    <>
      <Meta
        title="About | Nerd Brainz is all about the customer and making your website purchasing journey as simple as possible. We live and breath web development, web design, SEO and everything to do with bringing your small or medium sized business online with a Nerd Brainz website"
        desc="Nerd Brainz is a web development agency that combines web development, ux / ui design, SEO and marketing and advertising into a well oiled maching that we package as a website for you. We can help you get your small or medium sized business online wether it be a simple static web site or an e-commerce site for a thriving medium sized business. We are a partnership with owners from the USA and the UK that perfectly blends a insight into the US and UK economies and how to bring companies, people and products on to the global stage."
      />
      <section
        className=" body-font bg-custom-color-one min-h-full opacity-90
    "
      >
        {/* Start of text section */}
        <div className="container mx-auto flex px-5 pt-24  md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
            <img
              className="object-cover object-center rounded opacity-50"
              alt="hero"
              src="/static/images/47.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-custom-color-ten">
              Who We Are
            </h1>
            <p className="mb-8 leading-relaxed text-custom-color-ten">
              NerdBrainz is a concept that has been in the making for several
              years and across three continents. The brain child of best friends
              Jared and Alexander. The Idea was first conceived when they met as
              neighbours living and working in SE Asia, has now grown into a
              fully realised reality.
              <br />
              With Jared and Alexander firmly at the helm. NerdBrainz’s has been
              a global company from day one. Taking full advantage of the latest
              communication software. They are able to cherry pick the best
              talent from across North America and Europe bringing together a
              cosmopolitan team of international players.
              <br />
              At Nerdbrainz our driving ethos is, if it can be imagined we can
              build it. It is this motivation that is why we are seeing the
              company grow so fast.
              <br />
            </p>
            <br />
            <p className="mb-8 leading-relaxed text-custom-color-ten">
              With a firm footing in developing static and E-commerce websites
              we take great pride in creating platforms that allow people to
              increase the size and earning potential of their current business,
              or realise their financial freedom from a new business venture.
              <br />
              Because of this passion we offer so much more than just a website,
              we offer full professional and holistic services form graphic
              design, website marketing campaign, SEO optimization and business
              development.
            </p>
            <br />

            <p className="mb-8 leading-relaxed text-custom-color-ten">
              We listen to your proposals for the future direction of your
              company and we design custom websites that actually grow with your
              business, and can even facilitate and speed up that growth.
              <br />
              If you are thinking of building a website or upgrading your
              current site. Just drop us a message and we will be happy to get
              right back to you.
            </p>
          </div>
        </div>

        {/* End of text section */}

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
          <div className="absolute w-2/5 h-32 top-1/3 left-4  bg-custom-color-four rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 z-0 "></div>

          <div className="absolute w-2/5 h-24 top-2/3 left-4  bg-custom-color-six rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

          <div className="absolute w-2/5 h-24 top-1/2 left-4  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

          <div className="absolute w-2/5 h-24 bottom-44 left-4  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* End of Moving Background  */}
      </section>
    </>
  );
};

export default about;
