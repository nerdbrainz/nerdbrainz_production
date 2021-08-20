const informationTwo = () => {
  return (
    <section
      className="text-gray-600 body-font bg-custom-color-one min-h-full opacity-90
    "
    >
      <div className="container mx-auto flex px-5   md:flex-row flex-col items-center -h-2/3">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/20.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-custom-color-ten">
            What is UI and UX design?
          </h1>
          <p className="mb-8 leading-relaxed text-custom-color-ten">
            Simply put UI or User Interface is what is on the screen and UX or
            User Experience is how the consumer interacts with that interface.
            This emerging discipline is fascinating. It is at the centre of
            where engineering, behavioural science and art and design meet. A
            way of looking at is. UI is the creation of a button on a website
            and UX is the likelihood that a customer would want to interact with
            the button..
            <br />
            <br />
            This is considered so important that large companies invest hugely
            in these two intertwined sciences Because they know that just like
            in any business that accessibility and and enjoyable experience
            translates into greater profits. With so much competition the
            likelihood for a customer to engage with your website depends more
            on that consumers enjoyable interaction with the website than their
            desire to purchase what the site has on offer.
            <br />
            <br />
            UI and UX is very much here to stay and is rapidly growing branch of
            the tech industry. So all websites need to consider this as an
            integral and exciting part of the design process.
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
      <div classNameName="ml-44">
        <div classNameName="absolute w-2/5 h-32 top-1/3 left-4  bg-custom-color-four rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 z-0 "></div>

        <div classNameName="absolute w-2/5 h-24 top-2/3 left-4  bg-custom-color-six rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>

        <div classNameName="absolute w-2/5 h-24 top-1/2 left-4  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* <div classNameName="absolute w-2/5 h-24 bottom-14 left-4  bg-custom-color-five rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>*/}
      </div>

      {/* End of Moving Background  */}
    </section>
  );
};

export default informationTwo;
