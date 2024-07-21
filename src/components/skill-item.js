import React from 'react'

const SkillItem = ({title, company, description,techstack, join, finish})=> (
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">{title}</h3>
              <div className="subheading mb-3">{company}</div>
              <p>{description}</p>
              <p>Tech Stack: {techstack}</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{join} - {finish}</span>
            </div>
          </div>
)
export default SkillItem