import React, { Component } from "react"
import { FaGooglePlus } from "react-icons/fa"

class Google extends Component {
  render() {
    return (
      <a
        className="googleplus"
        href={`https://plus.google.com/share?url=${this.props.url}`}
        target="blank"
      >
        <FaGooglePlus />
      </a>
    )
  }
}

export default Google
