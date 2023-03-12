import Draggable from "react-draggable"
import {
  AiOutlineCloseSquare,
  AiOutlineMail,
  AiOutlineFileText,
  AiOutlineSmile,
  AiOutlineTool,
} from "react-icons/ai"
import { IoIosArrowUp } from "react-icons/io"
import { FaSkiing } from "react-icons/fa"
import { useState } from "react"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import { TiMessageTyping } from "react-icons/ti"

const MainWindow = () => {
  const [openAbout, setOpenAbout] = useState(false)
  const [openSkills, setOpenSkills] = useState(false)
  const [openProjects, setOpenProjects] = useState(false)
  return (
    <>
      <div className="container absolute left-1/2 top-1/2 ">
        <Draggable handle="strong" positionOffset={{ x: "-50%", y: "-50%" }}>
          <div className="box no-cursor bg-[#ffc9c9] h-100 w-96 px-2 pb-2">
            <div className="flex flex-row mb-1.5 pt-1">
              <AiOutlineCloseSquare />
              <IoIosArrowUp className="ml-1" />
              <strong className="cursor ml-2 w-5/6 border-b-2 border-t-2 mb-0.5 mt-1 h-2 border-black"></strong>
            </div>
            <div className="bg-[#f9efe4] h-80 w-full border-2 border-black"></div>
            <div className="flex flex-row mt-2">
              <button
                className="border-2  border-black h-20 w-24"
                onClick={() => setOpenAbout(true)}
              >
                <AiOutlineSmile className="text-3xl mx-auto mt-2.5" />
                <div className="mt-4 text-xs text-center">About Me</div>
              </button>
              <button
                onClick={() => setOpenSkills(true)}
                className="border-2 border-l-0 border-black h-20 w-24"
              >
                <FaSkiing className="text-3xl mx-auto mt-2.5" />
                <div className="mt-4 text-xs text-center">Skills</div>
              </button>
              <button
                onClick={() => setOpenProjects(true)}
                className="border-2 border-l-0 border-black h-20 w-24"
              >
                <AiOutlineTool className="text-3xl mx-auto mt-2.5" />
                <div className="mt-4 text-xs text-center">Projects</div>
              </button>
              <div className="border-2 border-l-0 border-black h-20 w-24">
                <TiMessageTyping className="text-3xl mx-auto mt-2.5" />
                <div className="mt-4 text-xs text-center">Blog</div>
              </div>
              <div className="border-2 border-l-0 border-black h-20 w-24">
                <AiOutlineMail className="text-3xl mx-auto mt-2.5" />
                <div className="mt-4 text-xs text-center">Email</div>
              </div>
            </div>
          </div>
        </Draggable>
      </div>
      <About openAbout={openAbout} setOpenAbout={setOpenAbout} />
      <Skills openSkills={openSkills} setOpenSkills={setOpenSkills} />
      <Projects openProjects={openProjects} setOpenProjects={setOpenProjects} />
    </>
  )
}

export default MainWindow
