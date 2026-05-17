// SEO.jsx — Reusable SEO component using react-helmet-async
// Install: npm install react-helmet-async

import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords=[], canonical,image }) => {
  const siteName = "DG Stream Blog";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  
  // Clean HTML and limit length
  const cleanDesc = description?.replace(/<[^>]+>/g, '').substring(0, 160);
  
  // Make sure keywords is a string
  const keywordString = Array.isArray(keywords) ? keywords.join(', ') : keywords;

  // Make image URL absolute - change to your domain
  const absoluteImage = image?.startsWith('http') 
    ? image 
    : image ? `https://dgstream.in/${image}` : null;
    console.log('SEO props:', { title, description, keywords, canonical, image });
  return (
    <Helmet>
       {/* Basic SEO */}
       <title>{fullTitle}</title>
      <meta name="description" content={cleanDesc} />
      {keywordString && <meta name="keywords" content={keywordString} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="robots" content="index, follow" />

      {/* Open Graph - for WhatsApp, Facebook, LinkedIn */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={cleanDesc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      {absoluteImage && <meta property="og:image" content={absoluteImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={cleanDesc} />
      {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}
    </Helmet>
  );
};

export default SEO;
