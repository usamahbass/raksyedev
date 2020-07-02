import React, { Component } from "react"
import { FaFacebook } from "react-icons/fa"

class FB extends Component {
  render() {
    return (
      <a
        className="facebook"
        href={`https://www.facebook.com/share.php?u=${this.props.url}&title=${this.props.title}`}
        target="blank"
      >
        <FaFacebook />
      </a>
    )
  }
}

export default FB
