import { useEffect, useState } from 'react'
import TabWrapper from "../../TabWrapper"
import resumeData from '../../../Resources/resumeData.json'

const Resume = () => {
  return (
    <div className="h-[400px] overflow-y-auto">
      <TabWrapper>
        <div className="space-y-4">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-xl font-bold">{resumeData.header.name}</h1>
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
            <h2 className="text-lg font-semibold border-b-2 border-black mb-2">Skills</h2>
            <div className="space-y-2">
              <div>
                <p className="font-medium">Technical Languages:</p>
                <p className="text-sm">{resumeData.skills.technicalLanguages.join(', ')}</p>
              </div>
              <div>
                <p className="font-medium">Development Skills:</p>
                <p className="text-sm">{resumeData.skills.developmentSkills.join(', ')}</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-lg font-semibold border-b-2 border-black mb-2">Work Experience</h2>
            <div className="space-y-4">
              {resumeData.experience.map((exp, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{exp.company}</h3>
                      <p className="text-sm italic">{exp.position}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{exp.period}</p>
                      <p className="text-xs">{exp.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside mt-1 space-y-1">
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
            <h2 className="text-lg font-semibold border-b-2 border-black mb-2">Projects</h2>
            <div className="space-y-4">
              {resumeData.projects.map((project, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{project.name}</h3>
                      <p className="text-sm italic">{project.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{project.period}</p>
                      <p className="text-xs">{project.location}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside mt-1">
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
            <h2 className="text-lg font-semibold border-b-2 border-black mb-2">Education</h2>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{edu.school}</h3>
                      <p className="text-sm italic">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{edu.period}</p>
                      <p className="text-xs">{edu.location}</p>
                    </div>
                  </div>
                  {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                  {edu.achievements && (
                    <ul className="list-disc list-inside mt-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  )}
                  {edu.awards && (
                    <div className="mt-1">
                      <p className="text-sm font-medium">Awards:</p>
                      <p className="text-sm">{edu.awards.join(', ')}</p>
                    </div>
                  )}
                  {edu.relevantCourses && (
                    <div className="mt-1">
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
    </div>
  )
}

export default Resume 