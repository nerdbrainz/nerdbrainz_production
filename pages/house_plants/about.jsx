import HousePlantNavbar from "../components/HousePlantNavbar";
import HousePlantFooter from "../components/HousePlantFooter";
import Meta from "../components/partials/Meta";
const about = () => {
  return (
    <>
      <Meta
        title="About | Nerd Brainz House Plants About is an example page that displays how a company should tell their story to their customers. An about page allows a web site owner to give a truly personal and unique explanation of who they are to their customers."
        description="Nerd Brainz House Plants About page is simple but effective at displaying a message to a customer that visits your companies website. It allows for a custom and thorough explanation of a companies ethos and mission statement while displaying a beautiful background image to warm your customers up to your brand. This allows small and medium sized companies to interact with their customers in a way that emphasizes who they are. With a custom or e-commerce website from Nerd Brainz web development team you can easily tell your customers what you are all about as a company."
      />
      <HousePlantNavbar />
      <section
        className="text-black body-font bg-plants-custom-color-one min-h-full opacity-90
    "
      >
        <div className=" absolute lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0  -mt-8 pl-2 h-4/6 opacity-50">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/static/images/about4.png"
          />
          {/* <img
                className="object-cover object-center rounded"
                alt="hero"
                src="/static/images/about2.png"
              /> */}
        </div>
        <div className="container mx-auto flex px-5   md:flex-row flex-col items-center -h-2/3">
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 -ml-52 -mt-8 pl-2 h-4/6 opacity-50">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="/static/images/about4.png"
              /> */}
          {/* <img
                className="object-cover object-center rounded"
                alt="hero"
                src="/static/images/about2.png"
              /> */}
          {/* </div> */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mt-44">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-plants-custom-color-ten">
              About NerdBrainz
            </h1>
            <p className="sm:text-sm lg:text-md mb-8 leading-relaxed text-plants-custom-color-ten">
              NerdBrainz is a concept that has been in the making for several
              years and across three continents. The brain child of best friends
              Jared and Alexander. The Idea was first conceived when they met as
              neighbours living and working in SE Asia, has now grown into a
              fully realised reality.
              <br />
              <br />
              With Jared and Alexander firmly at the helm. NerdBrainz’s has been
              a global company from day one. Taking full advantage of the latest
              communication software. They are able to cherry pick the best
              talent from across North America and Europe bringing together a
              cosmopolitan team of international players.
              <br />
              <br />
              At Nerdbrainz our driving ethos is, if it can be imagined we can
              build it. It is this motivation that is why we are seeing the
              company grow so fast.
              <br />
              <br />
              With a firm footing in developing static and E-commerce websites
              we take great pride in creating platforms that allow people to
              increase the size and earning potential of their current business,
              or realise their financial freedom from a new business venture.
              Because of this passion we offer so much more than just a website,
              we offer full professional and holistic services form graphic
              design, website marketing campaign, SEO optimization and business
              development.
              <br />
              <br />
              We listen to your proposals for the future direction of your
              company and we design custom websites that actually grow with your
              business, and can even facilitate and speed up that growth.
              <br />
              <br />
              If you are thinking of building a website or upgrading your
              current site. Just drop us a message and we will be happy to get
              right back to you.
            </p>
          </div>
        </div>

        {/* Start of button Section */}
        <div className="flex justify-center my-16">
          <a href="/" target="_blank">
            <button className="flex mx-auto text-white bg-plants-custom-color-Three border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Portfolio
            </button>
          </a>
          <a href="/contact" target="_blank">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-plants-custom-color-six rounded text-lg">
              Say Hello
            </button>
          </a>
        </div>
        {/* End of button Section */}
      </section>
      <HousePlantFooter />
    </>
  );
};

export default about;
