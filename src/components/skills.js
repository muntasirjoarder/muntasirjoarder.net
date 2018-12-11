import React from 'react'
import SkillItem from '../components/skill-item'

const Skills = ({items}) => (
    <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>
            {
                items.data.map(item=>(
                    <SkillItem 
                        title={item.title}
                        company={item.company}
                        description={item.description}
                        join={item.startDate}
                        finish={item.endDate}
                    />
                ))
            }
          
        </div>

    </section>
)
export default Skills