import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>

              <br />
              I want to improve every day life by coding simple solutions.
            </h2>
          </header>
          <p>

          I am a passionate people person, a life-long learner, and somebody who is constantly in pursuit of the "why".
          <br/>
          <br/>
          I approach everything I do with enthusiasm, and have built strong stakeholder engagement, communication and problem solving skills over my professional career.
          <br/>
          <br/>
          While I'm quickly making up ground in terms of my engineering skills, I can hit the ground running when it comes to delivering projects, managing stakeholders, and working in outcome based team environments.
          <br/>
          <br/>
          So, if you're looking for a Junior Software Engineer who can bring all the right "soft skills", I might just be your guy.
          <br/>
          <br/>
          "The best way to increase your success rate is to double your failure rate"
          </p>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                See Projects
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Let's chat!</h2>
          <p>
            Whether you are looking to hire a Junior Developer, or you're looking for a volunteer/contributor for a project, I'm always keen to speak with you.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  North Melbourne
                  <br />
                  Victoria
                  <br />
                  Australia
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  0400 756 455
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">blake_davis@outlook.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
