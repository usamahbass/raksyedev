import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({
  title,
  desccontent,
  image,
  keycontent,
  ogtitle,
  ogtype,
  ogurl,
  ogdescription,
  ogimage,
  twitterurl,
  twitterimage,
  twittertitle,
  twitterdescription,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet title={`${title} || ${data.site.siteMetadata.title} `}>
      <html lang="id" prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#" />

      {/* Primary */}

      <meta
        name="title"
        content={`${title} || ${data.site.siteMetadata.title} `}
      />
      <meta name="description" content={desccontent} />
      <meta name="image" content={image} />
      <meta name="keyword" content={keycontent} />
      <meta name="referrer" content="no-referrer-when-downgrade" />

      <meta property="og:url" content={ogurl} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={ogtitle} />
      <meta property="og:description" content={ogdescription} />
      <meta property="og:image" content={ogimage} />

      {/* Twitter Tag */}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={twitterurl} />
      <meta property="twitter:title" content={twittertitle} />
      <meta property="twitter:description" content={twitterdescription} />
      <meta property="twitter:image" content={twitterimage} />
    </Helmet>
  )
}

export default Head
