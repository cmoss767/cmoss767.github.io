import Draggable from "react-draggable"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { IoIosArrowUp } from "react-icons/io"
import { Dispatch, SetStateAction } from "react"
import { TABS } from "../MainWindow/mainWindow"

interface AboutProps {
  setTabs: Dispatch<SetStateAction<TABS>>
}

const About = ({ setTabs }: AboutProps) => {
  return (
    <div>
      <div className="box no-cursor bg-[#ffc9c9] h-auto w-96 px-2 pb-2">
        <div className="flex flex-row">
          <button
            className="border-2"
            onClick={() => {
              setTabs(TABS.HOME)
            }}
          >
            Back
          </button>
        </div>
        <div className="bg-[#f9efe4] h-80 w-full border-2 border-black p-2">
          I'm Chris Moss, a software developer with a background in vaccine
          research. I've coded on and off since 2018 but I finally decided to
          take the plunge into programming as a career in 2022. I currently work
          at Code and Trust and I love learning about new technologies and
          building out cool projects.
          <br />
          <br />
          In my free time I enjoy hiking, cycling, cooking, and playing tennis.
        </div>
      </div>
    </div>
  )
}

export default About
