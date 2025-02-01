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
    const barHeight = (dataArray[i] / 255) * (HEIGHT / 2.5)
    
    const gradient = canvasCtx.createLinearGradient(0, centerY - barHeight, 0, centerY + barHeight)
    gradient.addColorStop(0, '#ffc9c9')
    gradient.addColorStop(0.5, '#ff9999')
    gradient.addColorStop(1, '#ff6666')
    
    canvasCtx.fillStyle = gradient
    
    // Draw rounded rectangles without using roundRect
    const radius = 3;
    
    // Upper bar
    canvasCtx.beginPath();
    canvasCtx.moveTo(x + radius, centerY - barHeight);
    canvasCtx.lineTo(x + barWidth - radius, centerY - barHeight);
    canvasCtx.quadraticCurveTo(x + barWidth, centerY - barHeight, x + barWidth, centerY - barHeight + radius);
    canvasCtx.lineTo(x + barWidth, centerY);
    canvasCtx.lineTo(x, centerY);
    canvasCtx.lineTo(x, centerY - barHeight + radius);
    canvasCtx.quadraticCurveTo(x, centerY - barHeight, x + radius, centerY - barHeight);
    canvasCtx.fill();
    
    // Lower bar
    canvasCtx.beginPath();
    canvasCtx.moveTo(x, centerY);
    canvasCtx.lineTo(x + barWidth, centerY);
    canvasCtx.lineTo(x + barWidth, centerY + barHeight - radius);
    canvasCtx.quadraticCurveTo(x + barWidth, centerY + barHeight, x + barWidth - radius, centerY + barHeight);
    canvasCtx.lineTo(x + radius, centerY + barHeight);
    canvasCtx.quadraticCurveTo(x, centerY + barHeight, x, centerY + barHeight - radius);
    canvasCtx.lineTo(x, centerY);
    canvasCtx.fill();
    
    x += barWidth + barSpacing;
  }
}

export default useAnimateBars
