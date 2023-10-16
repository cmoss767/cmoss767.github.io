import Draggable from "react-draggable"
import { AiOutlineCloseSquare, AiFillFolder } from "react-icons/ai"
import { IoIosArrowUp } from "react-icons/io"
import { Dispatch, SetStateAction, useState } from "react"
import Pokedex from "./Pokedex"
import TextToHtml from "./TextToHtml"
import { TABS } from "../../MainWindow/mainWindow"

interface ProjectsProps {
  setTabs: Dispatch<SetStateAction<TABS>>
}

const Projects = ({ setTabs }: ProjectsProps) => {
  const [openPokedex, setOpenPokedex] = useState(false)
  const [openTextToHtml, setOpenTextToHtml] = useState(false)
  return (
    <>
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
          <div className="bg-[#f9efe4] h-48 w-full border-2 border-black p-2">
            <button className="  text-center w-24 h-24 items-center">
              <AiFillFolder className="text-5xl  mx-auto my-0" />
              <span className="text-xs mb-2 ">Recipe Index</span>
            </button>
            <button
              className="  text-center w-24 h-24 items-center"
              onClick={() => setOpenTextToHtml(true)}
            >
              <AiFillFolder className="text-5xl  mx-auto my-0" />
              <span className="text-xs mb-2 ">Text to Html</span>
            </button>
            <button className="  text-center w-24 h-24 items-center">
              <AiFillFolder className="text-5xl  mx-auto my-0" />
              <span className="text-xs mb-2 ">Algo Visualizer</span>
            </button>
            <button
              className="  text-center w-24 h-24 items-center"
              onClick={() => setOpenPokedex(true)}
            >
              <AiFillFolder className="text-5xl  mx-auto my-0" />
              <span className="text-xs mb-2 ">Pokédex</span>
            </button>
          </div>
        </div>
      </div>

      <Pokedex openPokedex={openPokedex} setOpenPokedex={setOpenPokedex} />
      <TextToHtml
        openTextToHtml={openTextToHtml}
        setOpenTextToHtml={setOpenTextToHtml}
      />
    </>
  )
}

export default Projects
