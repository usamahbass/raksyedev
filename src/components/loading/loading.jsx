import React from "react"
import Logo from "../../assets/raksyedev.png"

const Loading = () => {
  return (
    <div className="content-load text-center">
      <div className="loading-load">
        <img style={{ width: "80px", height: "80px" }} src={Logo} alt="logo" />
        <span className="title-load">Memuat halaman...</span>
        <div className="loading-bar-load">
          <span className="bar-animation-load"></span>
        </div>
      </div>
    </div>
  )
}
export default Loading
