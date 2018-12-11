import React from 'react'


const EducationItem = ({institution, course, description, start, finish})=> (
    <div className="resume-item d-flex flex-column flex-md-row mb-5">
    <div className="resume-content mr-auto">
      <h3 className="mb-0">{institution}</h3>
      <div className="subheading mb-3">{course}</div>
      <div>{description?description:null}</div>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{start} - {finish}</span>
    </div>
  </div>
)
export default EducationItem