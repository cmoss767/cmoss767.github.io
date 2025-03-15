import { useEffect, useState } from 'react'
import TabWrapper from '../../TabWrapper'
import Player from './Player'

// Adjusted dimensions to use more available space
const TILE_SIZE = 32 // Changed to 32 for better pixel alignment
const MAP_WIDTH = 12
const MAP_HEIGHT = 11

type Direction = 'up' | 'down' | 'left' | 'right'
type TerrainType = 'grass' | 'water' | 'tree' | 'flower' | 'path' | 'water-edge-top' | 'water-edge-bottom'

// Define the map layout with more detailed terrain
const initialMap: TerrainType[][] = [
  ['grass', 'grass', 'tree', 'grass', 'grass', 'grass', 'grass', 'tree', 'grass', 'grass', 'grass', 'tree'],
  ['grass', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'grass', 'grass'],
  ['tree', 'path', 'flower', 'grass', 'grass', 'grass', 'grass', 'flower', 'grass', 'path', 'grass', 'grass'],
  ['grass', 'path', 'grass', 'water-edge-top', 'water-edge-top', 'water-edge-top', 'water-edge-top', 'grass', 'grass', 'path', 'grass', 'tree'],
  ['grass', 'path', 'grass', 'water', 'water', 'water', 'water', 'grass', 'grass', 'path', 'grass', 'grass'],
  ['grass', 'path', 'grass', 'water', 'water', 'water', 'water', 'grass', 'flower', 'path', 'grass', 'grass'],
  ['grass', 'path', 'grass', 'water-edge-bottom', 'water-edge-bottom', 'water-edge-bottom', 'water-edge-bottom', 'grass', 'grass', 'path', 'grass', 'tree'],
  ['tree', 'path', 'flower', 'grass', 'grass', 'grass', 'grass', 'flower', 'grass', 'path', 'grass', 'grass'],
  ['grass', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'path', 'grass', 'grass'],
  ['grass', 'grass', 'tree', 'grass', 'grass', 'flower', 'grass', 'tree', 'grass', 'grass', 'grass', 'tree'],
  ['tree', 'grass', 'grass', 'grass', 'tree', 'grass', 'grass', 'grass', 'grass', 'tree', 'grass', 'grass'],
]

const Skills = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 5, y: 5 })
  const [direction, setDirection] = useState<Direction>('down')
  const [isMoving, setIsMoving] = useState(false)
  const [map, setMap] = useState<TerrainType[][]>(initialMap)

  const isValidMove = (x: number, y: number): boolean => {
    if (x < 0 || x >= MAP_WIDTH || y < 0 || y >= MAP_HEIGHT) return false
    const terrain = map[y][x]
    return !['water', 'water-edge-top', 'water-edge-bottom', 'tree'].includes(terrain)
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    let newDirection: Direction = direction
    let newX = playerPosition.x
    let newY = playerPosition.y
    
    switch(e.key) {
      case 'ArrowUp':
        newDirection = 'up'
        newY = playerPosition.y - 1
        break
      case 'ArrowDown':
        newDirection = 'down'
        newY = playerPosition.y + 1
        break
      case 'ArrowLeft':
        newDirection = 'left'
        newX = playerPosition.x - 1
        break
      case 'ArrowRight':
        newDirection = 'right'
        newX = playerPosition.x + 1
        break
      case 'e':
        // Interact with current tile
        const currentTile = map[playerPosition.y][playerPosition.x]
        if (currentTile === 'flower') {
          const newMap = [...map]
          newMap[playerPosition.y][playerPosition.x] = 'grass'
          setMap(newMap)
        }
        break
    }

    if (isValidMove(newX, newY)) {
      setPlayerPosition({ x: newX, y: newY })
      setIsMoving(true)
    }
    setDirection(newDirection)
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
  }, [direction, playerPosition, map])

  const getTileStyle = (type: TerrainType): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      width: TILE_SIZE,
      height: TILE_SIZE,
      imageRendering: 'pixelated',
      backgroundSize: '32px 32px',
    }

    // Using data URLs for pixel art tiles (we'll replace these with actual sprite images)
    switch(type) {
      case 'grass':
        return {
          ...baseStyle,
          backgroundColor: '#90c95b',
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAPklEQVQYV2NkYGD4z4ADMDIwMDDCuMPVxP8zokswIEswIkvA+MgSTLgkYArwSiDzUSSQnYskgSKBLoGiAACuVhQTqneg3QAAAABJRU5ErkJggg==")`,
        }
      case 'water':
        return {
          ...baseStyle,
          backgroundColor: '#4a90e2',
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAANElEQVQYV2NkIAAYGRgY/oMkkCVwAZgEXAKbBFwCmwRcApvEcAUMDAwMjIyMDIwDIQETAADzpwgJPYeoNwAAAABJRU5ErkJggg==")`,
          animation: 'waterFlow 1s steps(1) infinite'
        }
      case 'water-edge-top':
        return {
          ...baseStyle,
          backgroundColor: '#4a90e2',
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAMklEQVQYV2NkYGD4z4AHwCT+MyJLICvAkGBElkCWQJZgRJZAlkCWYESWQJZAkRhYCQC6qhQTv6rXQQAAAABJRU5ErkJggg==")`,
        }
      case 'water-edge-bottom':
        return {
          ...baseStyle,
          backgroundColor: '#4a90e2',
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAMklEQVQYV2NkYGD4z4AHwCT+MyJLICvAkGBElkCWQJZgRJZAlkCWYESWQJZAkRhYCQC6qhQTv6rXQQAAAABJRU5ErkJggg==")`,
          transform: 'rotate(180deg)',
        }
      case 'tree':
        return {
          ...baseStyle,
          backgroundColor: '#2d5a27',
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAQklEQVQYV2NkYGD4z4AHwCT+MzIwMKBIICvAkGBElkCWQJZgRJZAlkCWYESWQJZAkWDEJoEiwYhNAkWCEZsEigQA6N4UE+mY9sQAAAAASUVORK5CYII=")`,
        }
      case 'flower':
        return {
          ...baseStyle,
          backgroundColor: '#90c95b',
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAPElEQVQYV2NkYGD4z4AHwCT+MzIwMDAyMjL8Z0QWRJZgRJZAlkCWYESWQJZAlmBElkCWQJFgxCaBIsGITQIAqk4UE9Eq1EMAAAAASUVORK5CYII=")`,
        }
      case 'path':
        return {
          ...baseStyle,
          backgroundColor: '#d2b48c',
          backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAALUlEQVQYV2NkYGD4z4AHwCT+MzIwMDAyMjL8Z0QWRJZgRJZAlkCWYESWQJZAAQAqDhQT0ql4NQAAAABJRU5ErkJggg==")`,
        }
      default:
        return baseStyle
    }
  }

  return (
    <div className="h-[400px]">
      <TabWrapper>
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm">Use arrow keys to move, 'E' to interact with flowers</p>
          <div 
            className="relative border-2 border-black overflow-hidden"
            style={{ 
              width: MAP_WIDTH * TILE_SIZE,
              height: MAP_HEIGHT * TILE_SIZE,
              imageRendering: 'pixelated'
            }}
          >
            <style>
              {`
                @keyframes waterFlow {
                  0% { background-position: 0 0; }
                  50% { background-position: 4px 4px; }
                  100% { background-position: 0 0; }
                }
              `}
            </style>
            {/* Render map tiles */}
            {map.map((row, y) => (
              row.map((tile, x) => (
                <div
                  key={`${x}-${y}`}
                  className="absolute"
                  style={{
                    ...getTileStyle(tile),
                    left: x * TILE_SIZE,
                    top: y * TILE_SIZE,
                  }}
                />
              ))
            ))}
            
            <Player 
              position={playerPosition} 
              tileSize={TILE_SIZE}
              direction={direction}
              isMoving={isMoving}
            />
          </div>
        </div>
      </TabWrapper>
    </div>
  )
}

export default Skills 