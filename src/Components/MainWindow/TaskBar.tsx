import {
  AiOutlineFileText,
  AiOutlineSmile,
  AiOutlineTool,
} from "react-icons/ai"
import { FiRadio } from "react-icons/fi"
import { FaSkiing } from "react-icons/fa"
import { TABS } from "./mainWindow"
import { useWindowContext } from "../../Context/WindowContext"

const TaskBar = () => {
  const { setTabs } = useWindowContext()
  
  const buttons = [
    { icon: AiOutlineSmile, label: "About Me", tab: TABS.ABOUT },
    { icon: FaSkiing, label: "Skills", tab: TABS.SKILLS },
    { icon: AiOutlineTool, label: "Projects", tab: TABS.PROJECTS },
    { icon: FiRadio, label: "Radio", tab: TABS.RADIO },
    { icon: AiOutlineFileText, label: "Resume", tab: TABS.RESUME },
  ]

  return (
    <div className="grid grid-cols-5 gap-px  border-black bg-black">
      {buttons.map(({ icon: Icon, label, tab }, index) => (
        <button
          key={label}
          onClick={() => setTabs(tab)}
          className="bg-[#ffc9c9] hover:bg-[#ffc9c9]/80 p-2 flex flex-col items-center justify-center transition-colors border-black border-y-2 border-x-1"
        >
          <Icon className="text-2xl sm:text-3xl" />
          <span className="text-xs sm:text-sm mt-1">{label}</span>
        </button>
      ))}
    </div>
  )
}

export default TaskBar
