import React from "react"
import { graphql } from "gatsby"
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"
import Contact from "../assets/agreement.svg"
import Layout from "../components/layout"
import Head from "../components/head"

const Kontak = props => {
  return (
    <Layout>
      <Head title={`Kontak - ${props.data.site.siteMetadata.title}`} />
      <section>
        <div class="row-contact">
          <div class="column-contact">
            <img src={Contact} alt="contact" />

            <div className="icons-contact">
              <a
                href="https://github.com/usamahbass"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:basalamahusamah7@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/usamah-basalamah-1b88a71a3"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div class="column-contact">
            <div class="contact-form">
              <h3>
                Tertarik untuk Membangun Situs Web Keren untuk Merek Anda ?{" "}
                <br /> Kontak Sekarang !
              </h3>
              <form>
                <div class="clearfix">
                  <input
                    class="col2 first"
                    type="text"
                    placeholder="Nama Depan"
                  />
                  <input
                    class="col2 last"
                    type="text"
                    placeholder="Nama Belakang"
                  />
                </div>
                <div class="clearfix">
                  <input class="col2 first" type="Email" placeholder="Email" />
                  <input class="col2 last" type="text" placeholder="Subjek" />
                </div>
                <div class="clearfix">
                  <textarea
                    name="textarea"
                    id=""
                    cols="30"
                    rows="7"
                    placeholder="Tulis pesan mu disini..."
                  ></textarea>
                </div>
                <div class="clearfix">
                  <input type="submit" value="Kirim" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Kontak

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
