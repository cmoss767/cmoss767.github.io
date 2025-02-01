import { AiOutlinePlayCircle, AiOutlinePauseCircle, AiOutlineStepForward, AiOutlineStepBackward } from 'react-icons/ai'
import { useState, useRef, useEffect } from 'react'

interface AudioControlsProps {
  audioRef: React.RefObject<HTMLAudioElement>
  onPlay: () => void
}

const AudioControls = ({ audioRef, onPlay }: AudioControlsProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  
  useEffect(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
      
      const audio = audioRef.current
      audio.addEventListener('timeupdate', handleTimeUpdate)
      audio.addEventListener('loadedmetadata', handleLoadMetadata)
      
      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate)
        audio.removeEventListener('loadedmetadata', handleLoadMetadata)
      }
    }
  }, [audioRef])

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
        onPlay()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
    const percentageClicked = clickPosition / progressBar.offsetWidth
    
    if (audioRef.current) {
      audioRef.current.currentTime = percentageClicked * duration
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="border-3 border-black bg-[#ffc9c9] p-4 rounded-lg">
      {/* Progress Bar */}
      <div 
        className="w-full h-2 bg-black/20 rounded-full mb-4 cursor-pointer"
        onClick={handleProgressClick}
      >
        <div 
          className="h-full bg-black rounded-full"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
      
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-3xl hover:opacity-75">
            <AiOutlineStepBackward />
          </button>
          <button 
            className="text-4xl hover:opacity-75"
            onClick={togglePlay}
          >
            {isPlaying ? <AiOutlinePauseCircle /> : <AiOutlinePlayCircle />}
          </button>
          <button className="text-3xl hover:opacity-75">
            <AiOutlineStepForward />
          </button>
        </div>
        
        {/* Time */}
        <div className="text-sm">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  )
}

export default AudioControls 