import React, { Component } from "react"
import { FaTwitter } from "react-icons/fa"

class Twitter extends Component {
  render() {
    return (
      <a
        className="twitter"
        href={`https://twitter.com/intent/tweet?status=${this.props.title}+${this.props.url}`}
        target="blank"
      >
        <FaTwitter />
      </a>
    )
  }
}

export default Twitter
