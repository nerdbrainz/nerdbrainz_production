import { Link } from "next/link";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
library.add(faYoutube, faInstagram, faFacebook, faTwitter, faLinkedin);

const SocialIcons = () => {
  return (
    <ul className="social-icons flex items-baseline justify-center text-custom-color-1">
      <li>
        <a
          className="text-custom-color-1 facebook-link"
          href="https://www.facebook.com/Nerd-Brainz-102671178793220"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            className="text-blue-300 mr-3 h-10 w-10 text-custom-color-1 hover:scale-125"
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/nerd_brainz"
          rel="noreferrer"
          target="_blank"
          className="text-blue-500 twitter-link"
        >
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            className="text-custom-color-1 mr-3 h-10 w-10 text-custom-color-1 hover:scale-125"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/nerd-brainz/about/?viewAsMember=true"
          rel="noreferrer"
          target="_blank"
          className="linkedin-link"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="custom-color-1 mr-3 h-10 w-10 text-blue-800 hover:scale-125"
          />
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/nerd_brainz/"
          rel="noreferrer"
          target="_blank"
          className="instagram-link"
        >
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className="text-red-600 mr-3 h-10 w-10 hover:scale-125"
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
