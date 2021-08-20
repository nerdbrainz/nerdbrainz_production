import Head from "next/head";
const Meta = (props) => (
  <Head>
    <title>Nerd Brainz | {props.title}</title>
    <meta name="description" content="" />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content="" />
    <meta name="og:description" property="og:description" content="" />
    <meta property="og:site_name" content="" />
    <meta property="og:url" content="" />
    <meta
      name="twitter:card"
      content="Come get a cup of coffee with your fellow geeks at Nerd Brainz coffee"
    />
    <meta name="twitter:title" content="NerdBrainz Coffee" />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" />
    {/* Raleway fonts.google */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;900&display=swap"
      rel="stylesheet"
    />
    <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    <meta property="og:image" content="" />
    <meta name="twitter:image" content="" />
    <link rel="canonical" href="" />
  </Head>
);
export default Meta;
