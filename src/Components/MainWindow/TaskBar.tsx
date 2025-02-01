import {
  AiOutlineFileText,
  AiOutlineSmile,
  AiOutlineTool,
} from "react-icons/ai"
import { FiRadio } from "react-icons/fi"
import { FaSkiing } from "react-icons/fa"
import Pdf from "../../Resources/chrisMossResume.pdf"
import { Dispatch, SetStateAction } from "react"
import { TABS } from "./mainWindow"
import { useWindowContext } from "../../Context/WindowContext"

const TaskBar = () => {
  const { setTabs } = useWindowContext()
  return (
    <div className="flex flex-row mt-2 fixed md:relative bottom-0 md:bottom-auto left-0 w-full bg-[#ffc9c9] md:bg-transparent p-2 md:p-0">
      <button
        className="border-3 border-black h-20 md:h-28 flex-1 md:w-24 flex flex-col items-center justify-center"
        onClick={() => setTabs(TABS.ABOUT)}
      >
        <AiOutlineSmile className="text-4xl md:text-5xl" />
        <div className="text-sm md:text-base mt-1">About Me</div>
      </button>
      <button
        onClick={() => setTabs(TABS.SKILLS)}
        className="border-3 border-l-0 border-black h-20 md:h-28 flex-1 md:w-24 flex flex-col items-center justify-center"
      >
        <FaSkiing className="text-4xl md:text-5xl" />
        <div className="text-sm md:text-base mt-1">Skills</div>
      </button>
      <button
        onClick={() => setTabs(TABS.PROJECTS)}
        className="border-3 border-l-0 border-black h-20 md:h-28 flex-1 md:w-24 flex flex-col items-center justify-center"
      >
        <AiOutlineTool className="text-4xl md:text-5xl" />
        <div className="text-sm md:text-base mt-1">Projects</div>
      </button>
      <button
        className="border-3 border-l-0 border-black h-20 md:h-28 flex-1 md:w-24 flex flex-col items-center justify-center"
        onClick={() => setTabs(TABS.RADIO)}
      >
        <FiRadio className="text-4xl md:text-5xl" />
        <div className="text-sm md:text-base mt-1">Radio</div>
      </button>
      <a
        href={Pdf}
        rel="noopener noreferrer"
        target="_blank"
        className="border-3 border-l-0 border-black h-20 md:h-28 flex-1 md:w-24 flex flex-col items-center justify-center"
      >
        <AiOutlineFileText className="text-4xl md:text-5xl" />
        <div className="text-sm md:text-base mt-1">Resume</div>
      </a>
    </div>
  )
}

export default TaskBar
