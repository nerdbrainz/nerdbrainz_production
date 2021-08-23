import Head from "next/head";
const Meta = (props) => (
  <Head>
    <title>Nerd Brainz | {props.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="UTF-8" />
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta
      name="og:title"
      property="og:title"
      content="Nerd Brainz Web development | Web Design | SEO | E-Commerce | Social Media Marketing & Optimization. Everything you need for Web Development for your small and medium size business."
    />
    <meta
      name="og:description"
      property="og:description"
      content={props.desc}
    />
    <meta property="og:site_name" content="Nerd Brainz" />
    <meta property="og:url" content="https://www.nerdbrainz.com" />
    <meta
      name="twitter:card"
      content="Nerd Brainz Web development | Web Design | SEO | E-Commerce | Social Media Marketing & Optimization. Everything you need for Web Development for your small and medium size business."
    />
    <meta
      name="og:image:alt"
      content="NerdBrainz logo for nerdbrainz.com web development and web design company."
    />
    <meta name="twitter:title" content="NerdBrainz LLC" />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="@nerd_brainz" />
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
    <link rel="icon" type="image/x-icon" href="/static/images/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
    <meta property="og:image" content="/static/images/nb_logo.png" />
    <meta name="twitter:image" content="/static/images/nb_logo.png" />
    <link rel="canonical" href="https://www.nerdbrainz.com" />
    <meta name="robots" content="index" follow />
  </Head>
);
export default Meta;
