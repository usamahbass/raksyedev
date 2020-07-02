import React, { Component } from "react"
import { FaLinkedin } from "react-icons/fa"

class Linkedin extends Component {
  render() {
    return (
      <a
        className="linkedin"
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${this.props.url}&title=${this.props.title}&source=${this.props.source}`}
        target="blank"
      >
        <FaLinkedin />
      </a>
    )
  }
}

export default Linkedin
