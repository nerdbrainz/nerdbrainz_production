import { Link } from "next/link";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;
library.add(faYoutube, faInstagram, faFacebook, faTwitter);

const SocialIcons = () => {
  return (
    <ul className="social-icons flex items-baseline justify-center text-custom-color-1">
      <li>
        <a
          className="text-custom-color-1 "
          href="https://facebook.com"
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
          href="https://twitter.com"
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
        <a href="https://youtube.com" rel="noopener" target="_blank">
          <FontAwesomeIcon
            icon={["fab", "youtube"]}
            className="custom-color-two mr-3 h-10 w-10 text-custom-color-two hover:scale-125"
          />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" rel="noopener" target="_blank">
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
