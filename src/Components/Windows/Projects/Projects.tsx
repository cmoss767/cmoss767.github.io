import { AiFillFolder } from "react-icons/ai"

import { useState } from "react"
import Pokedex from "./Pokedex"
import TextToHtml from "./TextToHtml"

import TabWrapper from "../../../Components/TabWrapper"

const Projects = () => {
  const [openPokedex, setOpenPokedex] = useState(false)
  const [openTextToHtml, setOpenTextToHtml] = useState(false)
  return (
    <>
      <div>
        <TabWrapper>
          <h2 className="text-center font-semibold text-lg">Projects</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <button className="text-center w-[45%] md:w-24 h-24 items-center">
              <AiFillFolder className="text-4xl md:text-5xl mx-auto my-0" />
              <span className="text-xs mb-2">Recipe Index</span>
            </button>
            <button
              className="text-center w-[45%] md:w-24 h-24 items-center"
              onClick={() => setOpenTextToHtml(true)}
            >
              <AiFillFolder className="text-4xl md:text-5xl mx-auto my-0" />
              <span className="text-xs mb-2">Text to Html</span>
            </button>
            <button className="text-center w-[45%] md:w-24 h-24 items-center">
              <AiFillFolder className="text-4xl md:text-5xl mx-auto my-0" />
              <span className="text-xs mb-2">Algo Visualizer</span>
            </button>
            <button
              className="text-center w-[45%] md:w-24 h-24 items-center"
              onClick={() => setOpenPokedex(true)}
            >
              <AiFillFolder className="text-4xl md:text-5xl mx-auto my-0" />
              <span className="text-xs mb-2">Pokédex</span>
            </button>
          </div>
        </TabWrapper>
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
