import { useRef, useState } from "react"
import Draggable from "react-draggable"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { Dispatch, SetStateAction } from "react"
import { TABS } from "../MainWindow/mainWindow"
import GhostrifterOfficialCityLights from "../../Resources/Ghostrifter-Official-City-Lights.mp3"
import TabWrapper from "../TabWrapper"

const AudioPlayer = () => {
  const [isPlaying, setPlaying] = useState(false)
  const audioRef = useRef<any>(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setPlaying(!isPlaying)
  }

  return (
    <>
      <div>
        <TabWrapper>
          <div className=" w-full p-4 ml-24 ">
            <div className="w-24 h-24 bg-[blue] mx-0"></div>
            <button
              className="bg-[#ffc9c9] p-2 rounded-full mx-0"
              onClick={togglePlay}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
            *work in progress
            <audio ref={audioRef} src={GhostrifterOfficialCityLights} />
          </div>
        </TabWrapper>
      </div>
    </>
  )
}

export default AudioPlayer
