import React from 'react'
import { FaMediumM,  FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaCheck, FaReact, FaNodeJs, FaSass, FaLess, FaWordpress, FaNpm } from 'react-icons/fa';
import Skills from '../components/skills'
import Education from '../components/education'
import { Element } from 'react-scroll'
import Layout from '../components/layout'
import portFolioPDF from '../dist/data-portfolio.pdf'

const portfolio={
  "data": [
    {
      "image": require('../../static/project-react.png').default,
      "title": "Gatsby Course Website",
      "description":"Gatsby, ReactJS, Netlify, CSS3, Animation, Stripe",
      "url": "https://reactcourse.netlify.com"
    },
   
    {
      "image": require('../../static/project-sunnahway.webp').default,
      "title": "sunnahway.com.au",
      "description":"Wordpress, Woocommerce, MailChimp, Hosting, Emails, Product configuration, Shop coupon",
      "url": "https://sunnahway.com.au"
    },
    {
      "image": require('../../static/project-drik.webp').default,
      "title": "DRIK.CO",
      "description":"Wordpress, Divi, MailChimp, Hosting, Emails",
      "url": "https://drik.co"
    },
    
    {
      "image": require('../../static/project-coming.webp').default,
      "title": "Gatsby Coming Soon",
      "description":"Gatsby, ReactJS, Bootstrap4, Netlify, MailChimp",
      "url": "https://gatsby-comingsoon.netlify.com/"
    },
    {
      "image": require('../../static/project-rbi.webp').default,
      "title": "Real Estate Blockchain",
      "description":"Gatsby, ReactJS, Bootstrap4, Netlify, MailChimp, Carousel",
      "url": "https://rbi-bootstrap.netlify.com"
    },
    {
      "image": require('../../static/project-mjoarder.webp').default,
      "title": "My Personal Website",
      "description":"Gatsby, ReactJS, Bootstrap4, Netlify, Carousel, Helmet, Schema",
      "url": "https://muntasirjoarder.net"
    }
  ]
}

const education={
  "data": [
    {
      "institution": "Chalmers University of Technology, Sweden",
      "course": "Masters in Computer Engineering",
      "start": "September 2003",
      "finish": "August 2005"
    },
    {
      "institution": "Khulna University, Bangladesh",
      "course": "Bachelor in Computer Science and Engineering",
      "start": "September 1997",
      "finish": "December 2001"
    },
    {
      "institution": "Pabna Cadet College, Bangladesh",
      "course": "SSC and HSC",
      "start": "1990",
      "finish": "1996"
    }
  ]
}
const experience = {
  "data": [
    {
      "title": "Senior Data Engineer",
      "company": "Queensland University of Technology",
      "description": "Playing key role in evolving our data management strategies in QUT’s cloud data and analytics environment.",
      "startDate": "2023",
      "endDate": "Present",
      "orderid": 26
    },
    {
      "title": "Data Engineer",
      "company": "Anglicare Southern Queensland",
      "description": "Planning, architecting, and implementing Modern Data Warehouse in Microsoft Azure Cloud for Anglicare Southern Queensland.",
      "startDate": "2021",
      "endDate": "2023",
      "orderid": 27
    },
    {
      "title": "IoT Solutions Architect",
      "company": "Brisbane City Council",
      "description": "Building overarching IoT Architecture, IoT Data Modelling, IoT Technology Decision Matrix, IoT Feasibility Analysis.",
      "startDate": "2019",
      "endDate": "2021",
      "orderid": 28
    },
    
    {
      "title": "IoT Solutions Developer",
      "company": "Ipswich City Council",
      "description": "Working as Technical Expert in Council SmartCity project. Providing technical expertise in data consolidation, analysis and visualisation from IoT sensors and various smart devices transferred over LoraWan and SigFox network.",
      "startDate": "2017",
      "endDate": "2019",
      "orderid": 29
    },
    {
      "title": "Web Developer",
      "company": "Ipswich City Council",
      "description": "Define, develop, implement and support Web and Self Service solutions for Council's internal and external web/online presence ensuring design and coding standards and procedures are defined, maintained and complied with.",
      "startDate": "2011",
      "endDate": "2017",
      "orderid": 30
    },
    {
      "title": "Blockchain Enthusiast",
      "company": "Chainledger",
      "description": "Researching, Planning, solution architecting and developing Blockchain based DAPPs for Ethereum, Hyperledger, Steller Blockchain networks.",
      "startDate": "2017",
      "endDate": "2019",
      "orderid": 31
    },
    {
      "title": "Web Developer",
      "company": "Designate Group",
      "description": "Working collaboratively with the creative team to develop web front end as per design specification.",
      "startDate": "2010",
      "endDate": "2011",
      "orderid": 32
    },
    {
      "title": "Technology Specialist",
      "company": "Grameenphone Ltd",
      "description": "Take high level of marketing/business requirements and translate them into cost effective technical and functional design specification and work with solutions all the way through into post GO-LIVE.",
      "startDate": "2009",
      "endDate": "2010",
      "orderid": 33
    },
    {
      "title": "Sr Systems Analyst",
      "company": "Robi Axiata Ltd",
      "description": "Preparing end to end solution plan for new Value Added Services and applications.",
      "startDate": "2005",
      "endDate": "2009",
      "orderid": 34
    },
    {
      "title": "Software Engineer",
      "company": "Dohatec",
      "description": "Developing fullstack web based solutions.",
      "startDate": "2002",
      "endDate": "2003",
      "orderid": 35
    }
  ]
}


const IndexPage = () => (

  <Layout>
       <div className="container-fluid p-0">
       <Element name="about" className="about">
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                  <h1 className="mb-0">Muntasir
                    <span className="text-primary">Joarder</span>
                  </h1>
                  <div className="subheading mb-5">Senior Data Engineer . Australia · 
                    <a href="mailto:muntasir.official@gmail.com">muntasir.official@gmail.com</a>
                  </div>
                  <p className="lead mb-5">Microsoft Certified: Azure Data Engineer Associate with over 15 years of professional experience in IT industry. Expertise in building and enhancing modern data warehouse with medalion architecture using Microsoft Fabric, Azure Synapse Analytics, Azure Data Factory, Data Lake Gen2, Databricks, data build tool (dbt) and Power BI developing metadata-driven pipelines.</p>
                  <div class="row justify-content-center">
                    <a href={portFolioPDF} target='_blank' rel='noreferrer'><button type="button" class="btn btn-primary">Portfolio of Works</button></a>
                  </div>
                  

                  <div className="social-icons">
                   
                    <a href="http://github.com/muntasirjoarder" target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                    
                    <a href="https://medium.com/@muntasirjoarder" target="_blank" rel="noreferrer">
                      <FaMediumM />
                    </a>
                 
                    
                  </div>
                </div>
              </section>

              <hr className="m-0" />
          </Element>

       
          <Element name="skills" className="skills">
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
      </Element>
      <Element name="experience" className="experience">
          <Skills items={experience} />
          <hr className="m-0" />
      </Element>
      <Element name="education" className="education">
          <Education items={education} />
          <hr className="m-0" />
      </Element>
     
      <Element name="interests" className="interests">
  <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div className="my-auto">
          <h2 className="mb-5">Interests</h2>
          <p>Apart from being a web developer, I enjoy Archery, Horse Riding and swimming. I also like playing Cricket, Long Tennis and Table Tennis. </p>
          <p className="mb-0">When forced indoors, I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
        </div>
      </section>

      <hr className="m-0" />
</Element>
    </div>
  </Layout>
)

export default IndexPage


