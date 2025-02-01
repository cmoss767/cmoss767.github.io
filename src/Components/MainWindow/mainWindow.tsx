import Draggable from "react-draggable"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { IoIosArrowUp } from "react-icons/io"
import { useEffect } from "react"
import About from "../Windows/About"
import Skills from "../Windows/Skills"
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
  const { showDots, setShowDots, showText, setShowText, tabs } =
    useWindowContext()

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
    <>
      <div className="container fixed inset-0 md:flex md:items-center md:justify-center z-10">
        <div className="flex flex-col h-screen w-full md:h-[750px] md:w-[650px]">
          <Draggable handle="strong" disabled={window.innerWidth < 768}>
            <div className="box no-cursor bg-[#ffc9c9] flex flex-col h-full w-full px-2 pb-2">
              <div className="flex flex-row mb-1.5 pt-1">
                <AiOutlineCloseSquare className="text-3xl" />
                <IoIosArrowUp className="ml-1 text-3xl" />
                <strong className="cursor ml-2 flex-grow border-b-3 border-t-3 mb-0.5 mt-1 h-4 border-black" />
              </div>
              
              <div className="flex-grow overflow-auto">
                {tabs === TABS.HOME && <LoadingTerminal />}
                {tabs === TABS.ABOUT && <About />}
                {tabs === TABS.PROJECTS && <Projects />}
                {tabs === TABS.SKILLS && <Skills />}
                {tabs === TABS.RADIO && <Radio />}
                {tabs === TABS.RESUME && <Resume />}
              </div>

              <div className="mt-auto">
                <TaskBar />
                <NewsFooter />
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    </>
  )
}

export default MainWindow
