import React from "react"
import { FaArrowRight } from "react-icons/fa"
import { MdDateRange, MdPerson } from "react-icons/md"
import { Link } from "gatsby"

const Box = props => {
  return (
    <li className="card-item">
      <Link to={props.to} className="card-link">
        <div className="card-image-out">
          <div className="card-image-wrapper">
            <div style={{ width: "100%", paddingBottom: "37.5%" }}></div>
            <img
              className="card-image-opacity"
              src={props.thumbnails}
              alt="card"
            />
            <img
              className="card-image-display"
              srcSet={props.thumbnails}
              alt="cardimage"
            />
          </div>
        </div>

        <h1 className="card-title">
          {props.title} <FaArrowRight className="card-icons" />{" "}
        </h1>

        <div className="card-create semi-colon">
          <span>
            <MdDateRange color="#1d72aa" fontSize="1.5em" /> {props.date}
          </span>
          <span>
            <MdPerson color="#1d71aa" fontSize="1.5em" /> {props.author}
          </span>
          {props.children}
        </div>

        {/* optional */}

        <p
          className="card-description"
          dangerouslySetInnerHTML={{ __html: props.desc }}
        ></p>
      </Link>
    </li>
  )
}

export default Box
