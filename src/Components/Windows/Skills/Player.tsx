import { useState, useEffect } from 'react'
import characterSprite from '../../../Resources/character-sprite.png'

interface PlayerProps {
  position: { x: number; y: number }
  tileSize: number
  direction: 'up' | 'down' | 'left' | 'right'
  isMoving: boolean
}

// These values are based on your specific sprite sheet
const SPRITE_WIDTH = 24  // Width of one frame in pixels
const SPRITE_HEIGHT = 24 // Height of one frame
const SCALE = 2 // Scale up the sprite
const ANIMATION_FRAMES = 8 // Number of frames in walking animation
const ANIMATION_SPEED = 150 // ms per frame

// Row indices for different animations in the sprite sheet
const WALK_DOWN_ROW = 10  // Adjust this to point to the walking animation row you want
const WALK_LEFT_ROW = 9
const WALK_RIGHT_ROW = 11
const WALK_UP_ROW = 8

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

  const getRowIndex = () => {
    switch(direction) {
      case 'down': return WALK_DOWN_ROW
      case 'left': return WALK_LEFT_ROW
      case 'right': return WALK_RIGHT_ROW
      case 'up': return WALK_UP_ROW
      default: return WALK_DOWN_ROW
    }
  }

  return (
    <div 
      className="absolute transition-all duration-100"
      style={{
        width: SPRITE_WIDTH * SCALE,
        height: SPRITE_HEIGHT * SCALE,
        left: position.x * tileSize,
        top: position.y * tileSize,
        backgroundImage: `url(${characterSprite})`,
        backgroundSize: 'auto',
        imageRendering: 'pixelated',
        backgroundPosition: `-${frameIndex * SPRITE_WIDTH}px -${getRowIndex() * SPRITE_HEIGHT}px`
      }}
    />
  )
}

export default Player 