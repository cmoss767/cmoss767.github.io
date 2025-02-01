import TabWrapper from "../TabWrapper"
import aboutData from "../../Resources/aboutData.json"

const About = () => {
  return (
    <div>
      <TabWrapper>
        <div className="space-y-6 p-4">
          <h2 className="text-center font-semibold text-xl mb-6">{aboutData.title}</h2>
          
          <p className="text-base leading-relaxed">
            {aboutData.intro}
          </p>

          <div className="space-y-2">
            <p className="text-base leading-relaxed">
              {aboutData.education.text}
            </p>
            <div className="pl-4 space-y-1">
              {aboutData.education.publications.map((pub, index) => (
                <a 
                  key={index}
                  href={pub.url}
                  className="text-blue-600 hover:underline block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  • {pub.title}
                </a>
              ))}
            </div>
          </div>

          <p className="text-base leading-relaxed">
            {aboutData.passion}
          </p>

          <p className="text-base leading-relaxed">
            {aboutData.personal}
          </p>

          <p className="text-base leading-relaxed">
            {aboutData.website}
          </p>
        </div>
      </TabWrapper>
    </div>
  )
}

export default About
