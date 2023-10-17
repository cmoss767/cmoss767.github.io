// App.js

import { useRef, useState } from "react"
import WaveForm from "./Waveform"
import Music from "../../../../Resources/Ghostrifter-Official-City-Lights.mp3"

interface AnalyzerData {
  analyzer: AnalyserNode
  bufferLength: number
  dataArray: Uint8Array
}

const AudioVisualizer = () => {
  const [analyzerData, setAnalyzerData] = useState<AnalyzerData | null>(null)
  const audioElmRef = useRef<HTMLAudioElement | null>(null)

  // audioAnalyzer function analyzes the audio and sets the analyzerData state
  const audioAnalyzer = () => {
    // create a new AudioContext
    const audioCtx = new (window.AudioContext || window.AudioContext)()
    // create an analyzer node with a buffer size of 2048
    const analyzer = audioCtx.createAnalyser()
    analyzer.fftSize = 2048

    const bufferLength = analyzer.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)
    const audioElement = new Audio(Music) as HTMLAudioElement
    const source = audioCtx.createMediaElementSource(audioElement)
    source.connect(analyzer)
    source.connect(audioCtx.destination)
    audioElement.onended = () => {
      source.disconnect()
      // Additional actions you want to perform when the audio ends
    }

    // set the analyzerData state with the analyzer, bufferLength, and dataArray
    setAnalyzerData({ analyzer, bufferLength, dataArray })
  }

  // onFileChange function handles the file input and triggers the audio analysis

  console.log(analyzerData)
  return (
    <div className="App">
      {analyzerData && (
        <>
          <div>hi</div>
          <WaveForm
            dataArray={analyzerData.dataArray}
            analyzer={analyzerData.analyzer}
            bufferLength={analyzerData.bufferLength}
          />
        </>
      )}
      <div style={{}}>
        <audio
          src={Music ?? ""}
          controls
          ref={audioElmRef}
          onPlay={() => {
            audioAnalyzer()
          }}
        />
      </div>
    </div>
  )
}

export default AudioVisualizer
