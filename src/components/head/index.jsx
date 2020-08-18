import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

export const myPhoto =
  "https://avatars3.githubusercontent.com/u/56109283?s=460&u=f7a5ff506e10005704cc9e3ec490b5b936a8ace5&v=4"

const dataQuery = graphql`
  query SEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        name
        descSite
        twitterUsername
        siteUrl
      }
    }
  }
`

const Head = ({
  description,
  lang = "id",
  meta = [],
  title,
  slug = "",
  image = myPhoto,
  type = "blog",
}) => {
  return (
    <StaticQuery
      query={dataQuery}
      render={data => {
        const { siteMetadata } = data.site
        const desc = description || siteMetadata.descSite
        const url = `${siteMetadata.siteUrl}${slug}/`

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            meta={[
              // -- general tag --
              {
                name: "referrer",
                content: "no-referrer-when-downgrade",
              },
              // -- primary tags --
              {
                name: "title",
                content: title,
              },
              {
                name: "description",
                content: desc,
              },
              // -- OG / facebook TAG --
              {
                name: "og:description",
                content: desc,
              },
              {
                property: "og:url",
                content: url,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:type`,
                content: type,
              },
              {
                property: "og:image",
                content: image,
              },
              // -- Twitter TAG --
              {
                property: `twitter:card`,
                content: "summary_large_image",
              },
              {
                property: "twitter:url",
                content: url,
              },
              {
                property: `twitter:image`,
                content: image,
              },
              {
                property: `twitter:creator`,
                content: siteMetadata.twitterUsername,
              },
              {
                property: `twitter:site`,
                content: siteMetadata.twitterUsername,
              },
              {
                property: `twitter:title`,
                content: title,
              },
              {
                property: `twitter:description`,
                content: desc,
              },
            ].concat(meta)}
          />
        )
      }}
    />
  )
}

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default Head
