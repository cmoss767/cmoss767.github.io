import Draggable from "react-draggable"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { IoIosArrowUp } from "react-icons/io"

const MainWindow = () => {
  return (
    <div className="container ">
      <Draggable handle="strong">
        <div className="box no-cursor bg-[#ffc9c9] h-100 w-96 px-2 pb-2">
          <div className="flex flex-row mb-1.5 pt-1">
            <AiOutlineCloseSquare />
            <IoIosArrowUp className="ml-1" />
            <strong className="cursor ml-2 w-5/6 border-b-2 border-t-2 mb-0.5 mt-1 h-2 border-black"></strong>
          </div>
          <div className="bg-[#f9efe4] h-80 w-full border-2 border-black"></div>
          <div className="flex flex-row mt-2">
            <div className="border-2  border-black h-20 w-24">
              <div className="mt-14 text-xs text-center">About Me</div>
            </div>
            <div className="border-2 border-l-0 border-black h-20 w-24">
              <div className="mt-14 text-xs text-center">Skills</div>
            </div>
            <div className="border-2 border-l-0 border-black h-20 w-24">
              <div className="mt-14 text-xs text-center">Projects</div>
            </div>
            <div className="border-2 border-l-0 border-black h-20 w-24">
              <div className="mt-14 text-xs text-center">Resume</div>
            </div>
            <div className="border-2 border-l-0 border-black h-20 w-24">
              <div className="mt-14 text-xs text-center">Email</div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  )
}

export default MainWindow
