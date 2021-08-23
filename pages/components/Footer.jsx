const Footer = () => {
  return (
    <>
      <footer
        className=" flex items-center justify-center w-full h-36 border-t bg-custom-color-one pb-8
      "
      >
        <div className="flex flex-wrap -mx-1 mt-8 overflow-hidden">
          <div className="w-full overflow-hidden">
            <a
              className="flex items-center justify-center"
              href="https://www.nerdbrainz.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <img
                src="/static/images/nb_logo.png"
                alt="NERDBRAiNZ"
                className="h-16 ml-2"
              />
            </a>
          </div>

          <div className="mt-1 mb-4 ml-36 w-full overflow-hidden opacity-50">
            <div className="inline-flex">
              <a
                className="text-custom-color-five"
                href="https://www.facebook.com/Nerd-Brainz-102671178793220"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                className="ml-4 text-custom-color-five"
                href="https://twitter.com/BrainzNerd"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                className="ml-4 text-custom-color-five"
                href="https://www.instagram.com/nerd_brainz/"
                target="_blank"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                className="ml-3 text-custom-color-five cursor-pointer"
                href="https://www.linkedin.com/company/nerd-brainz/about/?viewAsMember=true"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>
            <p className="text-sm">
              {" "}
              <span>&#169;NerdBrainz 2021</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
