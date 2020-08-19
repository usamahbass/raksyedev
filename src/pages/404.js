import React from "react"
import { graphql } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import NotFoundSvg from "../assets/notfound.svg"

export const blogListQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const NotFound = props => {
  const title = props.data.site.siteMetadata.title
  return (
    <>
      <Head title={`Halaman Tidak Ditemukan ! - ${title}`} type="blog" />
      <Layout>
        <div className="container mt-10">
          <h1 className="title has-text-centered">Halaman Tidak Ditemukan !</h1>
          <img
            src={NotFoundSvg}
            alt="notfound"
            style={{ marginTop: 50, marginBottom: 50 }}
          />
          <hr />
        </div>
      </Layout>
    </>
  )
}

export default NotFound
