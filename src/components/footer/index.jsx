import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GoHeart } from "react-icons/go"

const Footer = () => {
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
    <footer className="mt-auto">
      <div className="content has-text-centered">
        <p>
          <strong style={{ color: "#1d72aa" }}>
            {data.site.siteMetadata.title}
          </strong>{" "}
          <span>
            dibuat dengan penuh cinta{" "}
            <GoHeart style={{ verticalAlign: "middle" }} />
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
