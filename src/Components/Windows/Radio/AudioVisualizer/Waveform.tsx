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
    
    const canvasCtx = canvas.getContext('2d')
    if (!canvasCtx) return

    // Set initial canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const animate = () => {
      requestAnimationFrame(animate)
      useAnimateBars({ analyzer, canvas, canvasCtx, dataArray, bufferLength })
    }

    animate()
  }

  // Effect to draw the waveform on mount and update
  useEffect(() => {
    if (analyzer && dataArray && bufferLength) {
      draw({ dataArray, analyzer, bufferLength })
    }
  }, [dataArray, analyzer, bufferLength])

  // Return the canvas element
  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ background: 'black' }}
    />
  )
}

export default WaveForm
