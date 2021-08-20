import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { useRouter } from "next/dist/client/router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }) {
  const urlPath = useRouter().pathname;
  console.log(urlPath);
  return (
    <>
      {!urlPath.includes("nerdbrainz_coffee") && <Navbar />}
      <Component {...pageProps} />
      {!urlPath.includes("nerdbrainz_coffee") && <Footer />}
    </>
  );
}

export default MyApp;
