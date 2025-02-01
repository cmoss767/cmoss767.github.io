// This function takes in the audio data, analyzes it, and generates a waveform
// that is visualized on a canvas element.

interface AnimateBarsProps {
  analyzer: AnalyserNode // Assuming AnalyserNode is the type for the analyser parameter
  canvas: HTMLCanvasElement
  canvasCtx: CanvasRenderingContext2D
  dataArray: Uint8Array // Assuming dataArray is a Uint8Array
  bufferLength: number
}

const useAnimateBars = ({
  analyzer,
  canvas,
  canvasCtx,
  dataArray,
  bufferLength,
}: AnimateBarsProps) => {
  // Analyze the audio data using the Web Audio API's `getByteFrequencyData` method.
  analyzer.getByteFrequencyData(dataArray)
  
  const WIDTH = canvas.width
  const HEIGHT = canvas.height
  
  // Clear canvas
  canvasCtx.clearRect(0, 0, WIDTH, HEIGHT)
  
  const centerY = HEIGHT / 2
  // Reduce bar width and add more spacing
  const barWidth = (WIDTH / bufferLength) * 3
  const barSpacing = 2
  
  let x = 0
  
  for (let i = 0; i < bufferLength; i++) {
    const barHeight = (dataArray[i] / 255) * (HEIGHT / 2.5) // Reduced height slightly
    
    // Create gradient with our theme colors
    const gradient = canvasCtx.createLinearGradient(0, centerY - barHeight, 0, centerY + barHeight)
    gradient.addColorStop(0, '#ffc9c9')    // Light pink (top)
    gradient.addColorStop(0.5, '#ff9999')  // Medium pink (middle)
    gradient.addColorStop(1, '#ff6666')    // Darker pink (bottom)
    
    canvasCtx.fillStyle = gradient
    
    // Round the tops of the bars
    canvasCtx.beginPath()
    canvasCtx.roundRect(x, centerY - barHeight, barWidth, barHeight, [3, 3, 0, 0])
    canvasCtx.roundRect(x, centerY, barWidth, barHeight, [0, 0, 3, 3])
    canvasCtx.fill()
    
    x += barWidth + barSpacing
  }
}

export default useAnimateBars
