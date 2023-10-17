import { useRef, useEffect } from "react"
import useAnimateBars from "./AnimateBars"

interface AnalyzerData {
  analyzer: AnalyserNode
  bufferLength: number
  dataArray: Uint8Array
}

// Component to render the waveform
const WaveForm = ({ dataArray, analyzer, bufferLength }: AnalyzerData) => {
  // Ref for the canvas element
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Function to draw the waveform
  const draw = ({ dataArray, analyzer, bufferLength }: AnalyzerData) => {
    const canvas = canvasRef.current
    if (!canvas || !analyzer) return
    const canvasCtx = canvas.getContext("2d")

    const animate = () => {
      requestAnimationFrame(animate)
      canvas.width = canvas.width

      canvasCtx &&
        useAnimateBars({ analyzer, canvas, canvasCtx, dataArray, bufferLength })
    }

    animate()
  }

  // Effect to draw the waveform on mount and update
  useEffect(() => {
    console.log("hi")
    draw({ dataArray, analyzer, bufferLength })
  }, [dataArray, analyzer, bufferLength])

  // Return the canvas element

  console.log(canvasRef)
  return (
    <>
      <div>hello</div>
      <canvas
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "100000",
        }}
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      <div>bye</div>
    </>
  )
}

export default WaveForm
