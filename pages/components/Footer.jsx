const Footer = () => {
  return (
    <>
      <footer
        className="flex items-center justify-center w-full h-24 border-t bg-custom-color-one 
      "
      >
        <a
          className="flex items-center justify-center"
          href="https://www.nerdbrainz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/images/logo.png" alt="NERDBRAiNZ" className="h-16 ml-2" />
        </a>
      </footer>
    </>
  );
};

export default Footer;
