import Draggable from "react-draggable"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { IoIosArrowUp } from "react-icons/io"
import { Dispatch, SetStateAction } from "react"

interface AboutProps {
  openAbout: boolean
  setOpenAbout: Dispatch<SetStateAction<boolean>>
}

const About = ({ openAbout, setOpenAbout }: AboutProps) => {
  return (
    <>
      {openAbout && (
        <div className="container absolute ">
          <Draggable handle="strong" positionOffset={{ x: "20%", y: "30%" }}>
            <div className="box no-cursor bg-[#ffc9c9] h-auto w-96 px-2 pb-2">
              <div className="flex flex-row mb-1 pt-1">
                <button onClick={() => setOpenAbout(false)}>
                  <AiOutlineCloseSquare />
                </button>

                <strong className="cursor ml-2 w-2/3 border-b-2 border-t-2 mb-0.5 mt-2 h-2 border-black"></strong>
                <h2 className="text-s ml-5">About Me</h2>
              </div>
              <div className="bg-[#f9efe4] h-80 w-full border-2 border-black p-2">
                I'm Chris Moss, a software developer with a background in
                vaccine research. I've coded on and off since 2018 but I finally
                decided to take the plunge into programming as a career in 2022.
                I currently work at Code and Trust and I love learning about new
                technologies and building out cool projects.
                <br />
                <br />
                In my free time I enjoy hiking, cycling, cooking, and playing
                tennis.
              </div>
            </div>
          </Draggable>
        </div>
      )}
    </>
  )
}

export default About
