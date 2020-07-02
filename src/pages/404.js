import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import NotFoundSvg from "../assets/notfound.svg"

const NotFound = () => {
  return (
    <>
      <Head title="Halaman Tidak Ditemukan" />
      <Layout>
        <div className="container mt-10">
          <h1 className="title has-text-centered">Halaman Tidak Ditemukan</h1>
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
