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
import FB from "../components/share/fb"
import Twitter from "../components/share/twitter"
import Google from "../components/share/google"
import Linkedin from "../components/share/linkedin"
import Pinterest from "../components/share/pinterest"

const Blog = props => {
  const [search, setSearch] = useState("")

  const prev = props.pageContext.prev
    ? {
        url: `${props.pageContext.prev.fields.slug}`,
        title: props.pageContext.prev.frontmatter.title,
      }
    : null

  const next = props.pageContext.next
    ? {
        url: `${props.pageContext.next.fields.slug}`,
        title: props.pageContext.next.frontmatter.title,
      }
    : null

  const searchHandle = e => {
    setSearch(e.target.value)
  }

  const data = {
    title: props.data.markdownRemark.frontmatter.title,
    image: props.data.markdownRemark.frontmatter.avatar.publicURL,
    date: props.data.markdownRemark.frontmatter.date,
    author: props.data.markdownRemark.frontmatter.author,
    tokategori: props.data.markdownRemark.frontmatter.tags,
    post: props.data.markdownRemark.html,
  }

  const baseUrl = props.data.site.siteMetadata.siteUrl
  const url = props.data.site.siteMetadata.siteUrl + props.path
  const images = props.data.markdownRemark.frontmatter.thumbnails.publicURL
  const descSite = props.data.markdownRemark.excerpt
  const key = data.tokategori.map(item => item)

  let filterTag = props.data.allMarkdownRemark.group.filter(
    item => item.fieldValue.toLowerCase().indexOf(search.toLowerCase()) !== -1
  )

  return (
    <React.Fragment>
      <Head
        title={data.title}
        desccontent={descSite}
        image={images}
        keycontent={key}
        ogurl={url}
        ogtype="article"
        ogtitle={data.title}
        ogdescription={descSite}
        ogimage={images}
        twitterurl={url}
        twittertitle={data.title}
        twitterdescription={descSite}
        twitterimage={images}
      />
      <Layout>
        <article className="container">
          <section className="blog-post">
            <div className="blog-post left">
              <BlogPost
                titlehead={data.title}
                title={data.title}
                image={data.image}
                date={data.date}
                author={data.author}
                tokategori={data.tokategori}
                post={data.post}
              >
                {data.tokategori.map((item, index) => (
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

              <div id="share">
                <FB title={data.title} url={`${baseUrl}${props.path}`} />
                <Twitter title={data.title} url={`${baseUrl}${props.path}`} />
                <Google title={data.title} url={`${baseUrl}${props.path}`} />
                <Linkedin
                  title={data.title}
                  url={`${baseUrl}${props.path}`}
                  source={baseUrl}
                />
                <Pinterest
                  title={data.title}
                  url={`${baseUrl}${props.path}`}
                  media={data.image}
                />
              </div>
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
