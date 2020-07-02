import React from "react"

const Columns = props => {
  return <div className={`columns ${props.className}`}>{props.children}</div>
}

export default Columns
