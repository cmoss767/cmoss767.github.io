import Draggable from "react-draggable"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { IoIosArrowUp } from "react-icons/io"
import { Dispatch, SetStateAction } from "react"

interface SkillsProps {
  openSkills: boolean
  setOpenSkills: Dispatch<SetStateAction<boolean>>
}

const Skills = ({ openSkills, setOpenSkills }: SkillsProps) => {
  return (
    <>
      {openSkills && (
        <div className="container absolute ">
          <Draggable handle="strong" positionOffset={{ x: "80%", y: "10%" }}>
            <div className="box no-cursor bg-[#ffc9c9] h-auto w-96 px-2 pb-2">
              <div className="flex flex-row mb-1 pt-1">
                <button onClick={() => setOpenSkills(false)}>
                  <AiOutlineCloseSquare />
                </button>

                <strong className="cursor ml-2 w-5/6 border-b-2 border-t-2 mb-0.5 mt-2 h-2 border-black"></strong>
                <h2 className="text-s ml-2">Skills</h2>
              </div>
              <div className="bg-[#f9efe4] h-48 w-full border-2 border-black p-2">
                <h2 className="font-bold text-center">Technical Languages:</h2>{" "}
                Typescript, Python, Java, SQL, R, HTML, CSS, Git, Bash
                <h2 className="font-bold text-center">
                  Development Skills:
                </h2>{" "}
                React.js, React Query, Node.js, Express.js, MongoDB, MySQL, Git
                Version Control, Jest, Prisma
              </div>
            </div>
          </Draggable>
        </div>
      )}
    </>
  )
}

export default Skills