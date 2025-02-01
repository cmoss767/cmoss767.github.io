import { useEffect, useState } from 'react'
import TabWrapper from "../../TabWrapper"
import resumeData from '../../../Resources/resumeData.json'

const Resume = () => {
  return (
    <TabWrapper>
      <div className="space-y-6 p-4">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">{resumeData.header.name}</h1>
          <p className="text-sm mt-1">
            {resumeData.header.contact.phone} • {resumeData.header.contact.email} • {resumeData.header.contact.location}
          </p>
          <div className="flex justify-center gap-4 mt-2">
            {resumeData.header.links.map((link, index) => (
              <a 
                key={index}
                href={`https://${link.url}`}
                className="hover:opacity-75 text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.url}
              </a>
            ))}
          </div>
        </div>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-semibold border-b-3 border-black mb-3">Skills</h2>
          <div className="space-y-2">
            <div>
              <p className="font-medium">Technical Languages:</p>
              <p>{resumeData.skills.technicalLanguages.join(', ')}</p>
            </div>
            <div>
              <p className="font-medium">Development Skills:</p>
              <p>{resumeData.skills.developmentSkills.join(', ')}</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl font-semibold border-b-3 border-black mb-3">Work Experience</h2>
          <div className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{exp.company}</h3>
                    <p className="italic">{exp.position}</p>
                  </div>
                  <div className="text-right">
                    <p>{exp.period}</p>
                    <p className="text-sm">{exp.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold border-b-3 border-black mb-3">Projects</h2>
          <div className="space-y-4">
            {resumeData.projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{project.name}</h3>
                    <p className="italic">{project.role}</p>
                  </div>
                  <div className="text-right">
                    <p>{project.period}</p>
                    <p className="text-sm">{project.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside mt-2">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold border-b-3 border-black mb-3">Education</h2>
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{edu.school}</h3>
                    <p className="italic">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <p>{edu.period}</p>
                    <p className="text-sm">{edu.location}</p>
                  </div>
                </div>
                {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                {edu.achievements && (
                  <ul className="list-disc list-inside mt-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                )}
                {edu.awards && (
                  <div className="mt-2">
                    <p className="text-sm font-medium">Awards:</p>
                    <p className="text-sm">{edu.awards.join(', ')}</p>
                  </div>
                )}
                {edu.relevantCourses && (
                  <div className="mt-2">
                    <p className="text-sm font-medium">Relevant Courses:</p>
                    <p className="text-sm">{edu.relevantCourses.join(', ')}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </TabWrapper>
  )
}

export default Resume 