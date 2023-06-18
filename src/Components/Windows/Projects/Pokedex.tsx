import { AiOutlineCloseSquare } from "react-icons/ai"
import Draggable from "react-draggable"
import { IoIosArrowUp } from "react-icons/io"
import { Dispatch, SetStateAction } from "react"
import PokeScreenShot from "../../../Resources/pokedex.png"

interface AboutProps {
  openPokedex: boolean
  setOpenPokedex: Dispatch<SetStateAction<boolean>>
}

const Pokedex = ({ openPokedex, setOpenPokedex }: AboutProps) => {
  return (
    <>
      {openPokedex && (
        <div className="container absolute left-1/2 top-1/2 z-10">
          <Draggable handle="strong" positionOffset={{ x: "20%", y: "30%" }}>
            <div className="box no-cursor bg-[#ffc9c9] h-auto w-96 px-2 pb-2">
              <div className="flex flex-row mb-1 pt-1">
                <button onClick={() => setOpenPokedex(false)}>
                  <AiOutlineCloseSquare />
                </button>

                <strong className="cursor ml-2 w-2/3 border-b-2 border-t-2 mb-0.5 mt-2 h-2 border-black"></strong>
                <h2 className="text-s ml-5">Pokedex</h2>
              </div>
              <div className="bg-[#f9efe4] h-72 w-full border-2 border-black p-2">
                <img src={PokeScreenShot} />
                <div className="mt-4 flex justify-end h-20">
                  <a
                    href={"https://cmoss767.github.io/pokemon-api/"}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="border-2 border-black h-10 w-24 ml-3 p-2"
                  >
                    <button>View Here</button>
                  </a>
                </div>
              </div>
            </div>
          </Draggable>
        </div>
      )}
    </>
  )
}

export default Pokedex
