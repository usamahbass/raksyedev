const Context = () => {
  const btnTheme = document.querySelector("#btn-theme")
  const uiTheme = document.querySelector(".ui-light")
  const sunIcons = document.getElementById("sun")
  const moonIcons = document.getElementById("moon")

  const btnThemeMobile = document.querySelector("#btn-theme-mobile")
  const sunIconsMobile = document.getElementById("sun-mobile")
  const moonIconsMobile = document.getElementById("moon-mobile")

  let dark = JSON.parse(localStorage.getItem("darkmode")) || false
  if (dark) {
    uiTheme.classList.add("ui-dark")
  }

  btnTheme.addEventListener("click", () => {
    uiTheme.classList.toggle("ui-dark")

    dark = !dark

    if (dark) {
      sunIcons.style.display = "inline-block"
      moonIcons.style.display = "none"
    } else {
      sunIcons.style.display = "none"
      moonIcons.style.display = "inline-block"
    }

    localStorage.setItem("darkmode", JSON.stringify(dark))
  })

  btnThemeMobile.addEventListener("click", () => {
    uiTheme.classList.toggle("ui-dark")

    dark = !dark

    if (dark) {
      sunIconsMobile.style.display = "inline-block"
      moonIconsMobile.style.display = "none"
    } else {
      sunIconsMobile.style.display = "none"
      moonIconsMobile.style.display = "inline-block"
    }

    localStorage.setItem("darkmode", JSON.stringify(dark))
  })
}

export default Context
