import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const TagsPage = props => (
  <React.Fragment>
    <Head title="Kategori" keycontent={props.data.allMarkdownRemark.group[0]} />
    <Layout>
      <div className="container mt-10">
        <h1 className="title has-text-centered">Kategori</h1>
        <hr />
        <article className="article">
          <h2>Populer Kategori</h2>
          <section>
            {props.data.allMarkdownRemark.group.map(tag => (
              <Link
                key={tag.fieldValue}
                className="blog-tags is-medium text-decoration-none"
                to={`/kategori/${kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            ))}
          </section>
        </article>
      </div>
    </Layout>
  </React.Fragment>
)
TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`
