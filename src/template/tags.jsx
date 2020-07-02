import React from "react"
import PropTypes from "prop-types"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Box from "../components/box"
import Head from "../components/head"

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            tags
            thumbnails {
              publicURL
            }
          }
        }
      }
    }
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} postingan 
  ${totalCount === 1 ? "" : ""} berkategori `
  const tagValue = `"${tag}"`

  return (
    <Layout>
      <main className="blog-wrapper">
        <h1 className="title has-text-centered mb-5">
          {tagHeader} <span style={{ color: "#1d72aa" }}>{tagValue}</span>
        </h1>
        <ul className="cards-blog">
          {edges.map(({ node }) => {
            const { slug } = node.fields
            const { title, author, date, tags, thumbnails } = node.frontmatter
            return (
              <React.Fragment>
                <Head title={tags} />
                <Box
                  title={title}
                  date={date}
                  author={author}
                  tags={tags}
                  thumbnails={thumbnails.publicURL}
                  to={`${slug}`}
                />
              </React.Fragment>
            )
          })}
          <Link className="blog-btn btn-center mt-10" to="/kategori">
            Semua kategori
          </Link>
        </ul>
      </main>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags
