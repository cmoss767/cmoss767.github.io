import { useRef, useState } from "react"
import Draggable from "react-draggable"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { Dispatch, SetStateAction } from "react"
import { TABS } from "../MainWindow/mainWindow"
import GhostrifterOfficialCityLights from "../../Resources/Ghostrifter-Official-City-Lights.mp3"

interface AudioPlayerProps {
  setTabs: Dispatch<SetStateAction<TABS>>
}

const AudioPlayer = ({ setTabs }: AudioPlayerProps) => {
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
        <div className="box no-cursor bg-[#ffc9c9] h-auto w-96 px-2 pb-2">
          <div className="flex flex-row mb-1 pt-1">
            <button onClick={() => setTabs(TABS.HOME)}>
              <AiOutlineCloseSquare />
            </button>

            <strong className="cursor ml-2 w-2/3 border-b-2 border-t-2 mb-0.5 mt-2 h-2 border-black"></strong>
            <h2 className="text-s ml-5">Radio</h2>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default AudioPlayer
