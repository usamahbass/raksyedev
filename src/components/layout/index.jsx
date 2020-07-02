import React from "react"
import Header from "../header/index"
import Footer from "../footer"
import "../../styles/index.scss"

const Layout = props => {
  return (
    <div className="ui-light">
      <Header />
      <main className="blog-content">{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout
