import React from "react"
import { FaSearch } from "react-icons/fa"

const BlogPanel = props => {
  return (
    <article className="panel">
      <p className="panel-heading css-primary">Kategori</p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Search"
            onChange={props.onChange}
          />
          <span className="icon is-left">
            <FaSearch aria-hidden="true" />
          </span>
        </p>
      </div>
      {props.children}
    </article>
  )
}

export default BlogPanel
