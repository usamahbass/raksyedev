import React from "react"
import { graphql, Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import NotFoundSvg from "../assets/not.svg"

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
          <div
            className="columns is-align-items-center"
            style={{ alignItems: "center" }}
          >
            <div className="column">
              <img
                src={NotFoundSvg}
                alt="notfound"
                style={{ marginTop: 50, marginBottom: 50 }}
              />
            </div>
            <div className="column">
              <h1 className="title">Halaman Tidak Ditemukan !</h1>
              <p>Halaman yang anda cari gaada nih, coba cari halaman lain :)</p>

              <Link to="/">
                <button className="button is-link is-light is-medium" style={{ marginTop: 30 }} >Kembali ke Beranda</button>
              </Link>
            </div>
            <hr />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default NotFound
