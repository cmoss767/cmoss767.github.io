import TabWrapper from "../TabWrapper"

const Skills = () => {
  return (
    <div className="h-[400px]">
      <TabWrapper>
        <div className="space-y-4">
          <h2 className="text-center font-semibold text-xl">Skills</h2>
          <div>
            <h3 className="font-bold mb-2">Technical Languages:</h3>
            <p className="text-base">
              Typescript, Python, Java, SQL, R, HTML, CSS, Git, Bash
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Development Skills:</h3>
            <p className="text-base">
              React.js, React Query, Node.js, Express.js, MongoDB, MySQL, Git Version Control, Jest, Prisma
            </p>
          </div>
        </div>
      </TabWrapper>
    </div>
  )
}

export default Skills
