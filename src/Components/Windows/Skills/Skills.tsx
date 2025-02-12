import { useEffect, useState } from 'react'
import TabWrapper from '../../TabWrapper'
import Player from './Player'

const TILE_SIZE = 32
const MAP_WIDTH = 15
const MAP_HEIGHT = 12

type Direction = 'up' | 'down' | 'left' | 'right'

const Skills = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 5, y: 5 })
  const [direction, setDirection] = useState<Direction>('down')
  const [isMoving, setIsMoving] = useState(false)

  const handleKeyPress = (e: KeyboardEvent) => {
    let newDirection: Direction = direction
    
    switch(e.key) {
      case 'ArrowUp':
        newDirection = 'up'
        setPlayerPosition(prev => ({ ...prev, y: Math.max(0, prev.y - 1) }))
        break
      case 'ArrowDown':
        newDirection = 'down'
        setPlayerPosition(prev => ({ ...prev, y: Math.min(MAP_HEIGHT - 1, prev.y + 1) }))
        break
      case 'ArrowLeft':
        newDirection = 'left'
        setPlayerPosition(prev => ({ ...prev, x: Math.max(0, prev.x - 1) }))
        break
      case 'ArrowRight':
        newDirection = 'right'
        setPlayerPosition(prev => ({ ...prev, x: Math.min(MAP_WIDTH - 1, prev.x + 1) }))
        break
    }

    setDirection(newDirection)
    setIsMoving(true)
  }

  const handleKeyUp = () => {
    setIsMoving(false)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [direction])

  return (
    <TabWrapper>
      <div className="flex justify-center items-center h-full">
        <div 
          className="relative bg-green-100 border-2 border-black"
          style={{ 
            width: MAP_WIDTH * TILE_SIZE,
            height: MAP_HEIGHT * TILE_SIZE
          }}
        >
          <Player 
            position={playerPosition} 
            tileSize={TILE_SIZE}
            direction={direction}
            isMoving={isMoving}
          />
          
          {/* You can add trees, grass, etc. here */}
        </div>
      </div>
    </TabWrapper>
  )
}

export default Skills 