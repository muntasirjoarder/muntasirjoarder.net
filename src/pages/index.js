import React from 'react'
import { FaMediumM,  FaGithub } from 'react-icons/fa';
import Skills from '../components/skills'
import Education from '../components/education'
import { Element } from 'react-scroll'
import Layout from '../components/layout'
import portFolioPDF from '../dist/data-portfolio.pdf'
import expertises from '../dist/img/expertiseswhite.png'

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
      "company": "Technical University of Australia",
      "description": "Playing key role in evolving our data management strategies in QUT’s cloud data and analytics environment.",
      "techstack": "Microsoft Fabric, Azure Synapse Dedicated SQL, Datalake Gen2, Databricks, dbt, Azure Data Factory, SQLServer, Oracle, REST API, Power BI",
      "startDate": "2023",
      "endDate": "Present",
      "orderid": 26
    },
    {
      "title": "Data Engineer",
      "company": "Healthcare Service Provider",
      "description": "Planning, architecting, and implementing Modern Data Warehouse in Microsoft Azure Cloud for Anglicare Southern Queensland.",
      "techstack": "Azure Data Factory, Datalake Gen2, Databricks, Synapse Analytics, Synapse Serverless SQL, SQLServer, Oracle, REST API, Power BI",
      "startDate": "2021",
      "endDate": "2023",
      "orderid": 27
    },
    {
      "title": "IoT Solutions Architect",
      "company": "Largest City Council",
      "description": "Building overarching IoT Architecture, IoT Data Modelling, IoT Technology Decision Matrix, IoT Feasibility Analysis.",
      "techstack": "Azure Data Factory, Datalake Gen2, Azure Logic Apps, REST API, Power BI",
      "startDate": "2019",
      "endDate": "2021",
      "orderid": 28
    },
    
    {
      "title": "IoT Solutions Developer",
      "company": "Local City Council",
      "description": "Working as Technical Expert in Council SmartCity project. Providing technical expertise in data consolidation, analysis and visualisation from IoT sensors and various smart devices transferred over LoraWan and SigFox network.",
      "techstack": "Azure Data Factory, Datalake Gen2, Azure Logic Apps, Azure Function App, REST API, Power BI",
      "startDate": "2017",
      "endDate": "2019",
      "orderid": 29
    },
    {
      "title": "Web Developer",
      "company": "Local City Council",
      "description": "Define, develop, implement and support Web and Self Service solutions for Council's internal and external web/online presence ensuring design and coding standards and procedures are defined, maintained and complied with.",
      "techstack": "PHP, Squiz CMS, SQL Server, HTML, CSS, JQuery",
      "startDate": "2011",
      "endDate": "2017",
      "orderid": 30
    },
    {
      "title": "Blockchain Enthusiast",
      "company": "Chainledger",
      "description": "Researching, Planning, solution architecting and developing Blockchain based DAPPs for Ethereum, Hyperledger, Steller Blockchain networks.",
      "techstack": "Hyperledger Fabric",
      "startDate": "2017",
      "endDate": "2019",
      "orderid": 31
    },
    {
      "title": "Web Developer",
      "company": "Media Company",
      "description": "Working collaboratively with the creative team to develop web front end as per design specification.",
      "techstack": "PHP, HTML, CSS, JQuery",
      "startDate": "2010",
      "endDate": "2011",
      "orderid": 32
    },
    {
      "title": "Technology Specialist",
      "company": "Mobile Service Provider",
      "description": "Take high level of marketing/business requirements and translate them into cost effective technical and functional design specification and work with solutions all the way through into post GO-LIVE.",
      "techstack": "SMSC, MMSC, Mobile Data Services",
      "startDate": "2009",
      "endDate": "2010",
      "orderid": 33
    },
    {
      "title": "Sr Systems Analyst",
      "company": "Mobile Service Provider",
      "description": "Preparing end to end solution plan for new Value Added Services and applications.",
      "techstack": "SMSC, MMSC, Mobile Data Services",
      "startDate": "2005",
      "endDate": "2009",
      "orderid": 34
    },
    {
      "title": "Software Engineer",
      "company": "US Based Software Company",
      "description": "Developing fullstack web based solutions.",
      "techstack": "ASP, SQL Server, PHP, HTML, CSS, JQuery",
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
                  <div className="subheading mb-5">Senior Data Engineer .  Australia  · 
                    <a href="mailto:mjoarder.official@gmail.com">mjoarder.official@gmail.com</a>
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

         
            <img src={expertises} className="rounded img-fluid" alt="Microsoft Fabric, Azure Synapse Dedicated SQL, Datalake Gen2, Databricks, dbt, Azure Data Factory, SQLServer, Oracle, REST API, Power BI"></img>
           


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


