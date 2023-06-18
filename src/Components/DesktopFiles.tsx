import { AiOutlineCloseSquare, AiOutlineFileText } from "react-icons/ai"
import GhostrifterOfficialCityLights from "../Resources/Ghostrifter-Official-City-Lights.mp3"
import AudioPlayer from "./AudioPlayer"
import Draggable from "react-draggable"

const DesktopFiles = () => {
  return (
    <div className="absolute bottom-6 right-6 ">
      <div className="container  ">
        <Draggable handle="strong">
          <div className="box no-cursor bg-[#ffc9c9] h-auto w-96 px-2 pb-2">
            <div className="flex flex-row mb-1 pt-1">
              <button>
                <AiOutlineCloseSquare />
              </button>

              <strong className="cursor ml-2 w-5/6 border-b-2 border-t-2 mb-0.5 mt-2 h-2 border-black"></strong>
              <h2 className="text-s ml-2">Radio</h2>
            </div>
            <div className="bg-[#f9efe4] h-48 w-full border-2 border-black p-2">
              <div>
                <AudioPlayer audioSrc={GhostrifterOfficialCityLights} />
              </div>
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  )
}
export default DesktopFiles
