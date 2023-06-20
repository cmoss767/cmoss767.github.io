import { useRef, useState } from "react"
import Draggable from "react-draggable"
import { AiOutlineCloseSquare } from "react-icons/ai"

const AudioPlayer = ({ audioSrc, openRadio, setOpenRadio }: any) => {
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
      {openRadio && (
        <div className="container absolute z-10 ">
          <Draggable handle="strong" positionOffset={{ x: "20%", y: "30%" }}>
            <div className="box no-cursor bg-[#ffc9c9] h-auto w-96 px-2 pb-2">
              <div className="flex flex-row mb-1 pt-1">
                <button onClick={() => setOpenRadio(false)}>
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
                  <audio ref={audioRef} src={audioSrc} />
                </div>
              </div>
            </div>
          </Draggable>
        </div>
      )}
    </>
  )
}

export default AudioPlayer
