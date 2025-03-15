import { useEffect } from 'react'
import TabWrapper from '../../TabWrapper'
import ThreeScene from './ThreeScene'

// Dimensions for the 3D scene
const SCENE_WIDTH = 384  // 12 * 32
const SCENE_HEIGHT = 352 // 11 * 32

const Skills = () => {
  return (
    <div className="h-[400px]">
      <TabWrapper>
        <div className="flex flex-col items-center">
          <div 
            className="border-2 border-black overflow-hidden"
            style={{ 
              width: SCENE_WIDTH,
              height: SCENE_HEIGHT
            }}
          >
            <ThreeScene 
              width={SCENE_WIDTH} 
              height={SCENE_HEIGHT} 
            />
          </div>
        </div>
      </TabWrapper>
    </div>
  )
}

export default Skills 