import { Link } from "next/link";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
  faTwitter,
  FaLinkedin,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
library.add(faYoutube, faInstagram, faFacebook, faTwitter);

const SocialIcons = () => {
  return (
    <ul className="social-icons flex items-baseline justify-center text-custom-color-1">
      <li>
        <a
          className="text-custom-color-1 "
          href="https://www.facebook.com/Nerd-Brainz-102671178793220"
          rel="noopener"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            className="text-custom-color-two mr-3 h-10 w-10 text-custom-color-1 hover:scale-125"
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/BrainzNerd"
          rel="noopener"
          target="_blank"
          className="text-custom-color-two"
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
          rel="noopener"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className="custom-color-1
             mr-3 h-10 w-10 text-custom-color-two hover:scale-125"
          />
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/nerd_brainz/"
          rel="noopener"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className="text-custom-color-three mr-3 h-10 w-10 text-custom-color-three hover:scale-125"
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
