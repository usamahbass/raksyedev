import React, { useEffect } from "react"
import $ from "jquery"

const BackTop = () => {
  useEffect(() => {
    $(document).ready(function () {
      const progressPath = document.querySelector(".progress-wrap path")
      const pathLength = progressPath.getTotalLength()
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "none"
      progressPath.style.strokeDasharray = pathLength + " " + pathLength
      progressPath.style.strokeDashoffset = pathLength
      progressPath.getBoundingClientRect()
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 10ms linear"
      const updateProgress = function () {
        const scroll = $(window).scrollTop()
        const height = $(document).height() - $(window).height()
        const progress = pathLength - (scroll * pathLength) / height
        progressPath.style.strokeDashoffset = progress
      }
      updateProgress()
      $(window).scroll(updateProgress)
      const offset = 50
      const duration = 550
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > offset) {
          $(".progress-wrap").addClass("active-progress")
        } else {
          $(".progress-wrap").removeClass("active-progress")
        }
      })
      $(".progress-wrap").on("click", function (event) {
        event.preventDefault()
        $("html, body").animate({ scrollTop: 0 }, duration)
        return false
      })
    })
  }, [])

  return (
    <div className="progress-wrap">
      <svg
        className="progress-circle svg-content"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z" />
      </svg>
    </div>
  )
}

export default BackTop
