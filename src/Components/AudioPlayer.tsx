import { useRef, useState } from "react"

const AudioPlayer = ({ audioSrc }: any) => {
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
  )
}

export default AudioPlayer
