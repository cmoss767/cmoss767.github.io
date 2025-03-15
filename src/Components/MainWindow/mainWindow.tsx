import { useEffect } from "react"
import About from "../Windows/About"
import Skills from "../Windows/Skills/Skills"
import Projects from "../Windows/Projects/Projects"
import LoadingTerminal from "./LoadingTerminal"
import NewsFooter from "../NewsFooter"
import { useWindowContext } from "../../Context/WindowContext"
import Radio from "../Windows/Radio/Radio"
import TaskBar from "./TaskBar"
import Resume from "../Windows/Resume/Resume"

export enum TABS {
  HOME = "HOME",
  ABOUT = "ABOUT",
  SKILLS = "SKILLS",
  PROJECTS = "PROJECTS",
  RADIO = "RADIO",
  RESUME = "RESUME",
}

export interface ShowTextType {
  text1: boolean
  text2: boolean
  text3: boolean
  greetingText: boolean
  terminal: boolean
}

export interface ShowDotsType {
  dots1: boolean
  dots2: boolean
  dots3: boolean
}

const MainWindow = () => {
  const { showDots, setShowDots, showText, setShowText, tabs } = useWindowContext()

  useEffect(() => {
    if (showDots?.dots1 || showDots?.dots2 || showDots?.dots3) {
      setTimeout(() => {
        if (showDots?.dots1) {
          setShowDots({ ...showDots, dots1: false, dots2: true })
          setShowText({ ...showText, text2: true })
        } else if (showDots?.dots2) {
          setShowDots({ ...showDots, dots2: false, dots3: true })
          setShowText({ ...showText, text3: true })
        } else if (showDots?.dots3) {
          setShowDots({ ...showDots, dots3: false })
          setShowText({
            ...showText,
            text1: false,
            text2: false,
            text3: false,
            greetingText: true,
          })
        }
      }, 2000)
    } else if (showText.greetingText && !showText.terminal) {
      setTimeout(() => {
        setShowText({
          ...showText,
          terminal: true,
        })
      }, 1000)
    }
  }, [showDots])

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className=" max-w-md bg-[#ffc9c9] rounded-lg border-3 border-black shadow-xl flex flex-col">
        {/* Window Title Bar */}
        <div className="flex items-center gap-2 p-2 border-b-3 border-black">
          <div className="w-3 h-3 rounded-full bg-black" />
          <div className="w-3 h-3 rounded-full bg-black" />
          <div className="w-3 h-3 rounded-full bg-black" />
        </div>
        
        {/* Main Content Area */}
        <div className="flex-grow overflow-hidden p-4">
          {tabs === TABS.HOME && <LoadingTerminal />}
          {tabs === TABS.ABOUT && <About />}
          {tabs === TABS.PROJECTS && <Projects />}
          {tabs === TABS.SKILLS && <Skills />}
          {tabs === TABS.RADIO && <Radio />}
          {tabs === TABS.RESUME && <Resume />}
        </div>

        {/* Footer Elements */}
        <div className="mt-auto">
          <TaskBar />
          <NewsFooter />
        </div>
      </div>
    </div>
  )
}

export default MainWindow
