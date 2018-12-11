import React from 'react'
import EDucationItem from '../components/education-item'
import EducationItem from '../components/education-item';

const Education = ({items}) => (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>
            {
                items.data.map(item=>(
                    <EducationItem 
                        institution={item.institution}
                        course={item.course}
                        description={item.description}
                        start={item.start}
                        finish={item.finish}
                    />
                ))
            }
        </div>
      </section>
)

export default Education