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
    <div className="flex flex-row mt-2">
      <button
        className="border-2  border-black h-20 w-24"
        onClick={() => setTabs(TABS.ABOUT)}
      >
        <AiOutlineSmile className="text-3xl mx-auto mt-2.5" />
        <div className="mt-4 text-xs text-center">About Me</div>
      </button>
      <button
        onClick={() => {
          setTabs(TABS.SKILLS)
        }}
        className="border-2 border-l-0 border-black h-20 w-24"
      >
        <FaSkiing className="text-3xl mx-auto mt-2.5" />
        <div className="mt-4 text-xs text-center">Skills</div>
      </button>
      <button
        onClick={() => setTabs(TABS.PROJECTS)}
        className="border-2 border-l-0 border-black h-20 w-24"
      >
        <AiOutlineTool className="text-3xl mx-auto mt-2.5" />
        <div className="mt-4 text-xs text-center">Projects</div>
      </button>
      <button
        className="border-2 border-l-0 border-black h-20 w-24"
        onClick={() => setTabs(TABS.RADIO)}
      >
        <FiRadio className="text-3xl mx-auto mt-2.5" />
        <div className="mt-4 text-xs text-center">Radio</div>
      </button>
      <a
        href={Pdf}
        rel="noopener noreferrer"
        target="_blank"
        className="border-2 border-l-0 border-black h-20 w-24"
      >
        <AiOutlineFileText className="text-3xl mx-auto mt-2.5" />
        <div className="mt-4 text-xs text-center">Resume</div>
      </a>
    </div>
  )
}

export default TaskBar
