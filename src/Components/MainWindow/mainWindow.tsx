import Draggable from "react-draggable"
import {
  AiOutlineCloseSquare,
  AiOutlineMail,
  AiOutlineFileText,
  AiOutlineSmile,
  AiOutlineTool,
} from "react-icons/ai"
import { IoIosArrowUp } from "react-icons/io"
import { FiRadio } from "react-icons/fi"
import { FaSkiing } from "react-icons/fa"
import { useState, useEffect } from "react"
import About from "../Windows/About"
import Skills from "../Windows/Skills"
import Projects from "../Windows/Projects/Projects"
import Dots from "../Dots/Dots"
import Terminal from "./Terminal"
import Pdf from "../../Resources/chrisMossResume.pdf"
import Radio from "../Radio"
import GhostrifterOfficialCityLights from "../../Resources/Ghostrifter-Official-City-Lights.mp3"

export enum TABS {
  HOME = "HOME",
  ABOUT = "ABOUT",
  SKILLS = "SKILLS",
  PROJECTS = "PROJECTS",
  RADIO = "RADIO",
}

const MainWindow = () => {
  const [openAbout, setOpenAbout] = useState(false)
  const [openSkills, setOpenSkills] = useState(false)
  const [openProjects, setOpenProjects] = useState(false)
  const [terminal, setTerminal] = useState<string[]>([])
  const [openRadio, setOpenRadio] = useState(false)

  console.log(openSkills)
  const [showDots, setShowDots] = useState<{
    dots1: boolean
    dots2: boolean
    dots3: boolean
  }>({ dots1: true, dots2: false, dots3: false })
  const [showText, setShowText] = useState<{
    text1: boolean
    text2: boolean
    text3: boolean
    greetingText: boolean
    terminal: boolean
  }>({
    text1: true,
    text2: false,
    text3: false,
    greetingText: false,
    terminal: false,
  })
  const [tabs, setTabs] = useState(TABS.HOME)

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
      <div className="container absolute left-1/2 top-1/2 z-10">
        <Draggable handle="strong" positionOffset={{ x: "-50%", y: "-50%" }}>
          <div className="box no-cursor bg-[#ffc9c9] h-128 w-100 px-2 pb-2">
            <div className="flex flex-row mb-1.5 pt-1">
              <AiOutlineCloseSquare />
              <IoIosArrowUp className="ml-1" />
              <strong className="cursor ml-2 w-5/6 border-b-2 border-t-2 mb-0.5 mt-1 h-2 border-black"></strong>
            </div>
            {tabs === TABS.HOME && (
              <div className="bg-[#f9efe4] h-88 w-full border-2 border-black p-2 overflow-auto">
                {showText.text1 && (
                  <div className="flex row">
                    <span className="mr-1">Installing CoolFactor.exe</span>
                    {showDots?.dots1 && <Dots />}
                  </div>
                )}
                {showText.text2 && (
                  <div className="flex row">
                    <span className="mr-1">Building Life Experience</span>
                    {showDots?.dots2 && <Dots />}
                  </div>
                )}
                {showText.text3 && (
                  <div className="flex row">
                    <span className="mr-1">Rendering Professional Mode</span>
                    {showDots?.dots3 && <Dots />}
                  </div>
                )}
                {showText.greetingText && (
                  <div className="text-center">
                    <h2 className="text-3xl">Hi there, I'm Chris. 👋 </h2>
                    <span className="text-xl">Welcome to my Site</span>
                  </div>
                )}
                {showText.terminal && (
                  <>
                    <div className="mt-2">
                      <span className="text-lg">Need Help?</span>
                      <br />
                      <span className="text-sm">
                        Type help in the command line to see available options
                      </span>
                    </div>
                    {terminal.map((line: string) => (
                      <div>{line}</div>
                    ))}
                    <Terminal terminal={terminal} setTerminal={setTerminal} />
                  </>
                )}
              </div>
            )}
            {tabs === TABS.ABOUT && <About setTabs={setTabs} />}
            {tabs === TABS.PROJECTS && <Projects setTabs={setTabs} />}
            {tabs === TABS.SKILLS && (
              <Skills openSkills={openSkills} setOpenSkills={setOpenSkills} />
            )}
            {tabs === TABS.RADIO && (
              <Radio
                openRadio={openRadio}
                setOpenRadio={setOpenRadio}
                audioSrc={GhostrifterOfficialCityLights}
              />
            )}

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
            <div className="overflow-hidden bg-black shadow-xl  mt-2">
              <div className="animate-marquee whitespace-nowrap text-white text-2xl">
                BREAKING: Chris's cat, Mint, catches a beetle roaming around the
                apartment. She was rewarded with a cat treat and some extra pets
                from her owners.
              </div>
            </div>
          </div>
        </Draggable>
      </div>
    </>
  )
}

export default MainWindow
