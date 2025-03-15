import { useState, useEffect } from 'react'

interface PlayerProps {
  position: { x: number; y: number }
  tileSize: number
  direction: 'up' | 'down' | 'left' | 'right'
  isMoving: boolean
}

// Sprite sheet configuration
const SPRITE_SIZE = 32 // Size of each sprite frame
const SCALE = 1 // We'll use the natural size since we're using a proper pixel art sprite
const ANIMATION_FRAMES = 4 // 4 frames per direction
const ANIMATION_SPEED = 150 // ms per frame

// Row indices for different animations in the sprite sheet
const SPRITE_ROWS = {
  down: 0,
  left: 1,
  right: 2,
  up: 3
}

const Player = ({ position, tileSize, direction, isMoving }: PlayerProps) => {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    if (!isMoving) {
      setFrameIndex(0)
      return
    }

    const interval = setInterval(() => {
      setFrameIndex(prev => (prev + 1) % ANIMATION_FRAMES)
    }, ANIMATION_SPEED)

    return () => clearInterval(interval)
  }, [isMoving])

  // Get the current row in the sprite sheet based on direction
  const spriteRow = SPRITE_ROWS[direction]

  return (
    <div 
      className="absolute transition-transform duration-100"
      style={{
        width: SPRITE_SIZE,
        height: SPRITE_SIZE,
        transform: `translate(${position.x * tileSize}px, ${position.y * tileSize}px)`,
        backgroundImage: `url('/pixel-character.png')`, // We'll need to add this sprite sheet
        backgroundPosition: `-${frameIndex * SPRITE_SIZE}px -${spriteRow * SPRITE_SIZE}px`,
        imageRendering: 'pixelated',
        zIndex: 10
      }}
    />
  )
}

export default Player 