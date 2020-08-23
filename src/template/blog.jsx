import React, { useState } from "react"
import { graphql } from "gatsby"
import { AiOutlineTag } from "react-icons/ai"
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import { Link } from "gatsby"

import Layout from "../components/layout"
import BlogPost from "../components/blogpost"
import Head from "../components/head"
import BackTop from "../components/backtop"
import BlogPanel from "../components/blogpanel"

const Blog = ({ data, pageContext }) => {
  const [search, setSearch] = useState("")

  const prev = pageContext.prev
    ? {
        url: `/read/${pageContext.prev.fields.slug}`,
        title: pageContext.prev.frontmatter.title,
      }
    : null

  const next = pageContext.next
    ? {
        url: `/read/${pageContext.next.fields.slug}`,
        title: pageContext.next.frontmatter.title,
      }
    : null

  const searchHandle = e => {
    setSearch(e.target.value)
  }

  const dataPost = {
    title: data.markdownRemark.frontmatter.title,
    image: data.markdownRemark.frontmatter.avatar.publicURL,
    date: data.markdownRemark.frontmatter.date,
    author: data.markdownRemark.frontmatter.author,
    authorNick: data.site.siteMetadata.author,
    tokategori: data.markdownRemark.frontmatter.tags,
    post: data.markdownRemark.html,
    baseUrl: data.site.siteMetadata.siteUrl,
    spoiler: data.markdownRemark.excerpt.substr(0, 60),
    thumbnails: data.markdownRemark.frontmatter.thumbnails.publicURL,
    keywords: data.allMarkdownRemark.group.map(item => item["fieldValue"]),
  }

  let filterTag = data.allMarkdownRemark.group.filter(
    item => item.fieldValue.toLowerCase().indexOf(search.toLowerCase()) !== -1
  )

  const {
    title,
    date,
    image,
    author,
    tokategori,
    post,
    baseUrl,
    spoiler,
    thumbnails,
    authorNick,
    keywords,
  } = dataPost

  return (
    <React.Fragment>
      <Head
        title={`${title} - ${authorNick}`}
        description={`${spoiler}...`}
        slug={`/read/${pageContext.slug}`}
        keywords={keywords.toString()}
        image={`${baseUrl}${thumbnails}`}
        type="article"
        meta={[
          // -- twitter meta tag additional --
          {
            name: `twitter:imageAlt`,
            content: title,
          },
          {
            name: `twitter:label1`,
            content: "Written by",
          },
          {
            name: `twitter:data1`,
            content: authorNick,
          },
        ]}
      />
      <Layout>
        <article className="container">
          <section className="blog-post">
            <div className="blog-post left">
              <BlogPost
                titlehead={title}
                title={title}
                image={image}
                date={date}
                author={author}
                tokategori={tokategori}
                post={post}
              >
                {tokategori.map((item, index) => (
                  <Link
                    key={index}
                    to={`/kategori/${item}`}
                    className="blog-tags mr-3 text-decoration-none"
                    style={{ marginBottom: 30 }}
                  >
                    {item}
                  </Link>
                ))}
              </BlogPost>
              <section className="content-page">
                <nav className="nav-page">
                  {prev && (
                    <div className="previous-page">
                      <Link to={prev.url}>
                        <p>Kembali</p>
                        <span>
                          <MdNavigateBefore /> {prev.title}
                        </span>
                      </Link>
                    </div>
                  )}

                  {next && (
                    <div className="next-page">
                      <Link to={next.url}>
                        <p>Selanjutnya</p>
                        <span>
                          <MdNavigateNext /> {next.title}
                        </span>
                      </Link>
                    </div>
                  )}
                </nav>
              </section>
            </div>

            <div className="blog-post right">
              <BlogPanel onChange={searchHandle}>
                {filterTag.map(tag => (
                  <div key={tag.fieldValue}>
                    <Link
                      to={`/kategori/${tag.fieldValue}`}
                      className="panel-block"
                    >
                      <span className="panel-icon">
                        <AiOutlineTag aria-hidden="true" />
                      </span>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </div>
                ))}
              </BlogPanel>
            </div>

            <BackTop />
          </section>
        </article>
      </Layout>
    </React.Fragment>
  )
}

export default Blog

export const data = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        name
        author
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        thumbnails {
          publicURL
        }
        author
        tags
        avatar {
          publicURL
        }
      }
      html
      excerpt
    }
  }
`
