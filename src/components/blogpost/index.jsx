import React from "react"
import { MdDateRange } from "react-icons/md";

const BlogPost = props => {
  return (
    <article className="content is-medium" style={{ padding: "2rem" }}>
      <section className="content-author">
        <div>
          <img className="author-image" src={props.image} alt="author" />
          <small> {props.author}</small>{" "}
          <small className="tag css-primary">FrontEnd Developer</small>
        </div>
        <div>
          <small className="has-text-grey">
            <MdDateRange />
            &nbsp;
            {props.date}
          </small>
        </div>
      </section>

      <section className="bd-header mb-10">
        <div className="bd-header-title">
          <h1 className="title">{props.title}</h1>
          <hr />
          <div className="d-flex">{props.children}</div>
        </div>
      </section>
      <section
        className="content-article"
        dangerouslySetInnerHTML={{ __html: props.post }}
      ></section>
    </article>
  )
}

export default BlogPost
