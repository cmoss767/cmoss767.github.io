import Draggable from "react-draggable"
import { AiOutlineCloseSquare, AiFillFolder } from "react-icons/ai"
import { IoIosArrowUp } from "react-icons/io"
import { Dispatch, SetStateAction, useState } from "react"
import Pokedex from "./Pokedex"

interface ProjectsProps {
  openProjects: boolean
  setOpenProjects: Dispatch<SetStateAction<boolean>>
}

const Projects = ({ openProjects, setOpenProjects }: ProjectsProps) => {
  const [openPokedex, setOpenPokedex] = useState(false)
  return (
    <>
      {openProjects && (
        <div className="container absolute left-1/2 top-1/2  ">
          <Draggable handle="strong" positionOffset={{ x: "0%", y: "-50%" }}>
            <div className="box no-cursor bg-[#ffc9c9] h-auto w-96 px-2 pb-2">
              <div className="flex flex-row mb-1 pt-1">
                <button onClick={() => setOpenProjects(false)}>
                  <AiOutlineCloseSquare />
                </button>

                <strong className="cursor ml-2 w-5/6 border-b-2 border-t-2 mb-0.5 mt-2 h-2 border-black"></strong>
                <h2 className="text-s ml-2">Projects</h2>
              </div>
              <div className="bg-[#f9efe4] h-48 w-full border-2 border-black p-2">
                <button className="  text-center w-24 h-24 items-center">
                  <AiFillFolder className="text-5xl  mx-auto my-0" />
                  <span className="text-xs mb-2 ">Recipe Index</span>
                </button>
                <button className="  text-center w-24 h-24 items-center">
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
          </Draggable>
        </div>
      )}
      <Pokedex openPokedex={openPokedex} setOpenPokedex={setOpenPokedex} />
    </>
  )
}

export default Projects
