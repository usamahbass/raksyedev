import React, { useEffect } from "react"
import { FaMoon, FaSun, FaHome, FaTags, FaPhoneAlt } from "react-icons/fa"
import { useStaticQuery, graphql, Link } from "gatsby"
import Avatar from "../../assets/avatar.svg"
import Context from "../context"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    Context()
  }, [])

  return (
    <React.Fragment>
      <header>
        <nav className="navbar-content">
          <div className="navbar-one">
            <img src={Avatar} alt="me" />
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <div className="navbar-two ">
            <ul className="d-mobile-none">
              <li>
                <Link
                  className="nav-link"
                  activeClassName="nav-actived"
                  to="/kategori"
                >
                  Kategori
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  activeClassName="nav-actived"
                  to="/kontak"
                >
                  Kontak
                </Link>
              </li>
              <li id="icons" className="icons">
                <button id="btn-theme">
                  <FaMoon id="moon" />
                  <FaSun id="sun" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <header className="header d-desktop-none">
        <div className="container-header">
          <nav className="bottom-nav">
            <div className="bottom-nav-item">
              <Link to="/" className="bottom-nav-link" activeClassName="active">
                <i>
                  <FaHome />
                </i>
                <span>Awal</span>
              </Link>
            </div>
            <div className="bottom-nav-item">
              <Link
                to="/kategori"
                className="bottom-nav-link"
                activeClassName="active"
              >
                <i>
                  <FaTags />
                </i>
                <span>Kategori</span>
              </Link>
            </div>
            <div className="bottom-nav-item">
              <Link
                to="/kontak"
                className="bottom-nav-link"
                activeClassName="active"
              >
                <i>
                  <FaPhoneAlt />
                </i>
                <span>Kontak</span>
              </Link>
            </div>
            <div className="bottom-nav-item">
              <div className="bottom-nav-link icons">
                <div id="btn-theme-mobile">
                  <FaMoon id="moon-mobile" />
                  <FaSun id="sun-mobile" />
                </div>
                <span>Tema</span>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
