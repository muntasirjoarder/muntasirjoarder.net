import React from 'react'
import { Link } from 'gatsby'
import { FaLinkedinIn, FaGithub, FaTwitter, FaGooglePlusG, FaHtml5, FaCss3Alt, FaTrophy, FaJsSquare, FaCheck, FaReact, FaNodeJs, FaSass, FaLess, FaWordpress, FaNpm } from 'react-icons/fa';


import Layout from '../components/layout'

const profileImg = require('../dist/img/myphoto.jpg')
const IndexPage = () => (
  <Layout>
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Muntasir Joarder</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profileImg} alt="" />
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className="my-auto">
              <h1 className="mb-0">Muntasir
                <span className="text-primary">Joarder</span>
              </h1>
              <div className="subheading mb-5">Kuraby, QLD-4112, Australia · (+61) 4250 49459 ·
                <a href="mailto:contact@muntasirjoarder.net">admin@muntasirjoarder.net</a>
              </div>
              <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/muntasir/" target="_blank">
                  <FaLinkedinIn />
                </a>
                <a href="http://github.com/muntasirjoarder" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/muntasirJoarder" target="_blank">
                  <FaTwitter />
                </a>
                <a href="https://plus.google.com/u/0/+MdMuntasirMamunJoarderKU" target="_blank">
                  <FaGooglePlusG />
                </a>
              </div>
            </div>
          </section>

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Senior Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2013 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">Intelitec Solutions</div>
              <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2011 - March 2013</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Junior Web Designer</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2010 - December 2011</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Web Design Intern</h3>
              <div className="subheading mb-3">Shout! Media Productions</div>
              <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2008 - June 2010</span>
            </div>
          </div>

        </div>

      </section>

      <hr className="m-0" />

       <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">University of Colorado Boulder</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science - Web Development Track</div>
              <p>GPA: 3.23</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2006 - May 2010</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">James Buchanan High School</h3>
              <div className="subheading mb-3">Technology Magnet Program</div>
              <p>GPA: 3.56</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2002 - May 2006</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div className="my-auto">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <FaHtml5 />
          </li>
          <li className="list-inline-item">
            <FaCss3Alt />
          </li>
          <li className="list-inline-item">
            <FaJsSquare />
          </li>
          
          <li className="list-inline-item">
            <FaReact />
          </li>
          <li className="list-inline-item">
            <FaNodeJs />
          </li>
          <li className="list-inline-item">
          <FaSass />
          </li>
          <li className="list-inline-item">
            <FaLess />
          </li>
          <li className="list-inline-item">
            <FaWordpress />
          </li>

          <li className="list-inline-item">
            <FaNpm />
          </li>
        </ul>
        <div className="subheading mb-3">Workflow</div>

        <ul className="fa-ul mb-0">
            <li>
              <FaCheck />
              Mobile-First, Responsive Design</li>
            <li>
            <FaCheck />
              Cross Browser Testing &amp; Debugging</li>
            <li>
            <FaCheck />
              Cross Functional Teams</li>
            <li>
            <FaCheck />
              Agile Development &amp; Scrum</li>
          </ul>


        </div>
      </section>
      <hr className="m-0" />

  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div className="my-auto">
          <h2 className="mb-5">Interests</h2>
          <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
          <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
        </div>
      </section>

      <hr className="m-0" />

       <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div className="my-auto">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <FaTrophy />
              Google Analytics Certified Developer</li>
            <li>
            <FaTrophy />
              Mobile Web Specialist - Google Certification</li>
            <li>
            <FaTrophy />
              1<sup>st</sup>
              Place - University of Colorado Boulder - Emerging Tech Competition 2009</li>
          </ul>
        </div>
      </section>


    </div>
  </Layout>
)

export default IndexPage
