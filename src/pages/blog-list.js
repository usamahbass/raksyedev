import React, { useEffect, Suspense } from "react"
import { graphql, Link } from "gatsby"
import loadable from "@loadable/component"

import Head from "../components/head"
import FilterSearch from "../components/filter"
import NoResult from "../assets/noresult.svg"
import Loading from "../components/loading/loading"
import Box from "../components/box"

const Layout = loadable(() => import("../components/layout"))

export const blogListQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        descSite
        description
        descSite
        siteUrl
        siteImage
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
      }
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
          excerpt
        }
      }
    }
  }
`

const BlogList = props => {
  const { numPages, currentPage } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  useEffect(() => {
    FilterSearch()
  })

  const posts = props.data.allMarkdownRemark.edges
  const title = props.data.site.siteMetadata.title

  return (
    <React.Fragment>
      <Head title={`${title} | Learn and Try !`} type="blog" />
      <Layout fallback={<Loading />}>
        <main className="blog-wrapper">
          <input
            className="blog-search"
            type="search"
            placeholder="&#xF002; Cari"
          />
          <p className="counter"></p>

          <ul className="cards-blog">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const date = node.frontmatter.date || node.fields.slug
              const author = node.frontmatter.author || node.fields.slug
              const tags = node.frontmatter.tags || node.fields.slug
              const thumbnails =
                node.frontmatter.thumbnails.publicURL || node.fields.slug
              const description = node.excerpt
              return (
                <article key={node.fields.slug}>
                  <Box
                    title={title}
                    date={date}
                    author={author}
                    thumbnails={thumbnails}
                    desc={description}
                    to={`${node.fields.slug}`}
                  >
                    {tags.map((item, index) => {
                      return (
                        <Link key={index} to={`/kategori/${item}`}>
                          {" "}
                          <span className="blog-tags">{item}</span>
                        </Link>
                      )
                    })}
                  </Box>
                </article>
              )
            })}
            <img src={NoResult} alt="noresult" className="no-result" />

            <nav
              className="pagination is-centered"
              role="navigation"
              aria-label="pagination"
            >
              {!isFirst && (
                <Link to={prevPage} className="pagination-previous" rel="prev">
                  ← Halaman Sebelumnya
                </Link>
              )}

              {!isLast && (
                <Link to={nextPage} className="pagination-next" rel="next">
                  Halaman Selanjutnya →
                </Link>
              )}

              <ul className="pagination-list">
                {Array.from({ length: numPages }, (_, i) => (
                  <li key={`${i + 1}`}>
                    <Link
                      to={`/${i === 0 ? "" : i + 1}`}
                      className="pagination-link"
                      activeClassName="is-current"
                    >
                      {i + 1}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </ul>
        </main>
      </Layout>
    </React.Fragment>
  )
}

export default BlogList
