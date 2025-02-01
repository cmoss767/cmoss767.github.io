// App.js

import { useRef, useState } from "react"
import WaveForm from "./Waveform"
import Music from "../../../../Resources/Ghostrifter-Official-City-Lights.mp3"
import AudioControls from "../AudioControls"

interface AnalyzerData {
  analyzer: AnalyserNode
  bufferLength: number
  dataArray: Uint8Array
}

const AudioVisualizer = () => {
  const [analyzerData, setAnalyzerData] = useState<AnalyzerData | null>(null)
  const audioElmRef = useRef<HTMLAudioElement | null>(null)

  const audioAnalyzer = () => {
    try {
      const audioCtx = new (window.AudioContext || window.AudioContext)()
      const analyzer = audioCtx.createAnalyser()
      analyzer.fftSize = 512
      analyzer.smoothingTimeConstant = 0.9

      const bufferLength = analyzer.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)
      
      if (audioElmRef.current) {
        const source = audioCtx.createMediaElementSource(audioElmRef.current)
        source.connect(analyzer)
        analyzer.connect(audioCtx.destination)
        
        setAnalyzerData({ analyzer, bufferLength, dataArray })
      }
    } catch (error) {
      console.error("Error setting up audio analyzer:", error)
    }
  }

  // onFileChange function handles the file input and triggers the audio analysis

  console.log(analyzerData)
  return (
    <div className="w-full h-full flex flex-col">
      <div className="relative w-full h-[300px]">
        {analyzerData && (
          <WaveForm
            dataArray={analyzerData.dataArray}
            analyzer={analyzerData.analyzer}
            bufferLength={analyzerData.bufferLength}
          />
        )}
      </div>
      <div className="mt-4">
        <AudioControls 
          audioRef={audioElmRef}
          onPlay={audioAnalyzer}
        />
        <audio
          className="hidden"
          src={Music}
          ref={audioElmRef}
        />
      </div>
    </div>
  )
}

export default AudioVisualizer
