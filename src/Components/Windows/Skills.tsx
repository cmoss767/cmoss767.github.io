import TabWrapper from "../TabWrapper"

const Skills = () => {
  return (
    <>
      <div>
        <TabWrapper>
          <h2 className="font-bold text-center">Technical Languages:</h2>{" "}
          Typescript, Python, Java, SQL, R, HTML, CSS, Git, Bash
          <h2 className="font-bold text-center">Development Skills:</h2>{" "}
          React.js, React Query, Node.js, Express.js, MongoDB, MySQL, Git
          Version Control, Jest, Prisma
        </TabWrapper>
      </div>
    </>
  )
}

export default Skills
