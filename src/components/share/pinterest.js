import React, { Component } from "react"
import { FaPinterest } from "react-icons/fa"

class Pinterest extends Component {
  render() {
    return (
      <a
        className="pinterest"
        href={`https://pinterest.com/pin/create/bookmarklet/?media=${this.props.media}&url=${this.props.url}&is_video=false&description=${this.props.title}`}
        target="blank"
      >
        <FaPinterest />
      </a>
    )
  }
}

export default Pinterest
