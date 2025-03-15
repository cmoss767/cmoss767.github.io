import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface ThreeSceneProps {
  width: number
  height: number
}

const ThreeScene = ({ width, height }: ThreeSceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!mountRef.current) return
    
    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x87CEEB)
    scene.fog = new THREE.FogExp2(0x87CEEB, 0.005)
    
    // Camera setup - will follow the car
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 2, -5) // Initial position behind car
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mountRef.current.appendChild(renderer.domElement)
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024
    scene.add(directionalLight)
    
    // Ground
    const groundGeometry = new THREE.PlaneGeometry(500, 500)
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x90c95b,
      roughness: 0.8,
      metalness: 0.2
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)
    
    // Player car
    const playerCar = (() => {
      const car = new THREE.Group()
      
      // Car body
      const bodyGeometry = new THREE.BoxGeometry(0.8, 0.4, 2)
      const bodyMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xff0000,
        roughness: 0.5,
        metalness: 0.7
      })
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
      body.position.y = 0.3
      body.castShadow = true
      car.add(body)
      
      // Car top
      const topGeometry = new THREE.BoxGeometry(0.7, 0.3, 1)
      const top = new THREE.Mesh(topGeometry, bodyMaterial)
      top.position.y = 0.65
      top.position.z = -0.2
      top.castShadow = true
      car.add(top)
      
      // Wheels
      const wheelGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.15, 16)
      const wheelMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x333333,
        roughness: 0.9,
        metalness: 0.1
      })
      
      const wheelPositions = [
        { x: -0.45, z: 0.7 },  // Front left
        { x: 0.45, z: 0.7 },   // Front right
        { x: -0.45, z: -0.7 }, // Rear left
        { x: 0.45, z: -0.7 }   // Rear right
      ]
      
      wheelPositions.forEach(pos => {
        const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial)
        wheel.rotation.z = Math.PI / 2
        wheel.position.set(pos.x, 0.2, pos.z)
        car.add(wheel)
      })
      
      // Headlights
      const headlightGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1)
      const headlightMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xffffcc,
        emissive: 0xffffcc,
        emissiveIntensity: 0.5
      })
      
      const headlightPositions = [
        { x: -0.3, z: 1 },
        { x: 0.3, z: 1 }
      ]
      
      headlightPositions.forEach(pos => {
        const headlight = new THREE.Mesh(headlightGeometry, headlightMaterial)
        headlight.position.set(pos.x, 0.3, pos.z)
        car.add(headlight)
      })
      
      car.castShadow = true
      car.receiveShadow = true
      
      return car
    })()
    
    scene.add(playerCar)
    
    // Car movement state
    const carState = {
      speed: 0,
      acceleration: 0,
      turning: 0,
      maxSpeed: 0.3,
      maxReverse: -0.15,
      accelerationRate: 0.01,
      brakingRate: 0.015,
      turnSpeed: 0.03,
      drag: 0.995
    }
    
    // Keyboard controls
    const keys: { [key: string]: boolean } = {}
    
    window.addEventListener('keydown', (e) => {
      keys[e.key.toLowerCase()] = true
    })
    
    window.addEventListener('keyup', (e) => {
      keys[e.key.toLowerCase()] = false
    })
    
    // Create city environment
    const createCity = () => {
      const cityGroup = new THREE.Group()
      const gridSize = 15
      const buildingGridSize = 100
      const spacing = 12
      const roadWidth = 8
      
      // Add roads first (kept in center)
      const roadMaterial = new THREE.MeshStandardMaterial({
        color: 0x333333,
        roughness: 0.9
      })
      
      const laneMarkingMaterial = new THREE.MeshStandardMaterial({
        color: 0xFFFFFF,
        roughness: 0.9
      })

      // Calculate road length to match building area
      const roadLength = buildingGridSize * 2

      // Create horizontal roads with lane markings
      for (let z = -gridSize; z <= gridSize; z += spacing) {
        // Main road
        const roadGeometry = new THREE.PlaneGeometry(roadLength, roadWidth)
        const road = new THREE.Mesh(roadGeometry, roadMaterial)
        road.rotation.x = -Math.PI / 2
        road.position.set(0, 0.01, z)
        cityGroup.add(road)
        
        // Single center lane marking (dashed)
        for (let x = -roadLength/2; x < roadLength/2; x += 4) {
          // Skip marking at intersections
          let skipMarking = false;
          for (let ix = -gridSize; ix <= gridSize; ix += spacing) {
            if (Math.abs(x - ix) < roadWidth/2) {
              skipMarking = true;
              break;
            }
          }
          if (!skipMarking) {
            const markingGeometry = new THREE.PlaneGeometry(2, 0.3) // 2 unit long dashes
            const marking = new THREE.Mesh(markingGeometry, laneMarkingMaterial)
            marking.rotation.x = -Math.PI / 2
            marking.position.set(x, 0.02, z)
            cityGroup.add(marking)
          }
        }
      }

      // Create vertical roads with lane markings
      for (let x = -gridSize; x <= gridSize; x += spacing) {
        // Main road
        const roadGeometry = new THREE.PlaneGeometry(roadWidth, roadLength)
        const road = new THREE.Mesh(roadGeometry, roadMaterial)
        road.rotation.x = -Math.PI / 2
        road.position.set(x, 0.01, 0)
        cityGroup.add(road)
        
        // Single center lane marking (dashed)
        for (let z = -roadLength/2; z < roadLength/2; z += 4) {
          // Skip marking at intersections
          let skipMarking = false;
          for (let iz = -gridSize; iz <= gridSize; iz += spacing) {
            if (Math.abs(z - iz) < roadWidth/2) {
              skipMarking = true;
              break;
            }
          }
          if (!skipMarking) {
            const markingGeometry = new THREE.PlaneGeometry(0.3, 2) // 2 unit long dashes
            const marking = new THREE.Mesh(markingGeometry, laneMarkingMaterial)
            marking.rotation.x = -Math.PI / 2
            marking.position.set(x, 0.02, z)
            cityGroup.add(marking)
          }
        }

        // Create intersection markers at crossings
        for (let z = -gridSize; z <= gridSize; z += spacing) {
          const intersectionGeometry = new THREE.PlaneGeometry(roadWidth, roadWidth)
          const intersection = new THREE.Mesh(intersectionGeometry, roadMaterial)
          intersection.rotation.x = -Math.PI / 2
          intersection.position.set(x, 0.015, z) // Slightly higher to prevent z-fighting
          cityGroup.add(intersection)
        }
      }
      
      // Function to check if position is on a road
      const isOnRoad = (x: number, z: number) => {
        const roadHalfWidth = roadWidth / 2 + 1.5
        
        // Check horizontal roads
        for (let roadZ = -gridSize; roadZ <= gridSize; roadZ += spacing) {
          if (Math.abs(z - roadZ) < roadHalfWidth) return true
        }
        
        // Check vertical roads
        for (let roadX = -gridSize; roadX <= gridSize; roadX += spacing) {
          if (Math.abs(x - roadX) < roadHalfWidth) return true
        }
        
        return false
      }
      
      // Add buildings across the entire area
      const buildingSpacing = 8  // Slightly increased spacing between buildings
      for (let x = -buildingGridSize; x <= buildingGridSize; x += buildingSpacing) {
        for (let z = -buildingGridSize; z <= buildingGridSize; z += buildingSpacing) {
          // Add some randomness to position
          const offsetX = (Math.random() - 0.5) * 3
          const offsetZ = (Math.random() - 0.5) * 3
          const posX = x + offsetX
          const posZ = z + offsetZ
          
          // Calculate distance from center
          const distanceFromCenter = Math.sqrt(posX * posX + posZ * posZ)
          
          // Skip if position is on a road
          if (isOnRoad(posX, posZ)) continue
          
          // Higher chance of buildings near the center, gradually decreasing outwards
          const buildingChance = 0.8 * Math.max(0, 1 - (distanceFromCenter / buildingGridSize))
          
          if (Math.random() < buildingChance) {
            // Taller buildings near center, shorter on outskirts
            const maxHeight = 15 * Math.max(0.3, 1 - (distanceFromCenter / buildingGridSize))
            const height = 3 + Math.random() * maxHeight
            const width = 2 + Math.random() * 1.5
            const buildingGeometry = new THREE.BoxGeometry(width, height, width)
            
            // More varied building colors
            const hue = Math.random() * 0.1 + 0.05
            const saturation = 0.3 + Math.random() * 0.4
            const lightness = 0.4 + Math.random() * 0.2
            const color = new THREE.Color().setHSL(hue, saturation, lightness)
            
            const buildingMaterial = new THREE.MeshStandardMaterial({ 
              color,
              roughness: 0.7,
              metalness: 0.2
            })
            
            const building = new THREE.Mesh(buildingGeometry, buildingMaterial)
            
            // Randomly rotate buildings
            building.rotation.y = Math.random() * Math.PI * 2
            building.position.set(posX, height / 2, posZ)
            building.castShadow = true
            building.receiveShadow = true
            cityGroup.add(building)
            
            // Add windows
            const windowGeometry = new THREE.PlaneGeometry(0.4, 0.4)
            const windowMaterial = new THREE.MeshStandardMaterial({
              color: 0xffffcc,
              emissive: 0xffffcc,
              emissiveIntensity: 0.5
            })
            
            // Add windows to each side
            for (let floor = 1; floor < height - 0.5; floor += 1.2) {
              for (let side = 0; side < 4; side++) {
                if (Math.random() < 0.7) {
                  const window = new THREE.Mesh(windowGeometry, windowMaterial)
                  window.position.y = floor
                  
                  switch(side) {
                    case 0: // Front
                      window.position.z = width / 2 + 0.01
                      window.position.x = (Math.random() - 0.5) * (width - 0.4)
                      break
                    case 1: // Back
                      window.position.z = -(width / 2 + 0.01)
                      window.position.x = (Math.random() - 0.5) * (width - 0.4)
                      window.rotation.y = Math.PI
                      break
                    case 2: // Left
                      window.position.x = -(width / 2 + 0.01)
                      window.position.z = (Math.random() - 0.5) * (width - 0.4)
                      window.rotation.y = -Math.PI / 2
                      break
                    case 3: // Right
                      window.position.x = width / 2 + 0.01
                      window.position.z = (Math.random() - 0.5) * (width - 0.4)
                      window.rotation.y = Math.PI / 2
                      break
                  }
                  
                  building.add(window)
                }
              }
            }
          }
        }
      }
      
      return cityGroup
    }
    
    const city = createCity()
    scene.add(city)
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Handle car controls
      if (keys['w'] || keys['arrowup']) {
        carState.acceleration = carState.accelerationRate
      } else if (keys['s'] || keys['arrowdown']) {
        carState.acceleration = -carState.accelerationRate
      } else {
        carState.acceleration = 0
      }
      
      if (keys['a'] || keys['arrowleft']) {
        carState.turning = carState.turnSpeed
      } else if (keys['d'] || keys['arrowright']) {
        carState.turning = -carState.turnSpeed
      } else {
        carState.turning = 0
      }
      
      // Apply acceleration and speed limits
      carState.speed += carState.acceleration
      carState.speed *= carState.drag
      
      if (carState.speed > carState.maxSpeed) carState.speed = carState.maxSpeed
      if (carState.speed < carState.maxReverse) carState.speed = carState.maxReverse
      
      // Update car position and rotation
      if (Math.abs(carState.speed) > 0.001) {
        playerCar.position.x += Math.sin(playerCar.rotation.y) * carState.speed
        playerCar.position.z += Math.cos(playerCar.rotation.y) * carState.speed
        
        if (carState.turning) {
          playerCar.rotation.y += carState.turning * (carState.speed / carState.maxSpeed)
        }
      }
      
      // Update camera position - now from behind the car
      const cameraOffset = new THREE.Vector3(0, 2, -5)
      cameraOffset.applyAxisAngle(new THREE.Vector3(0, 1, 0), playerCar.rotation.y)
      camera.position.copy(playerCar.position).add(cameraOffset)
      
      // Look slightly ahead of the car
      const lookAtOffset = new THREE.Vector3(0, 1, 10)
      lookAtOffset.applyAxisAngle(new THREE.Vector3(0, 1, 0), playerCar.rotation.y)
      const lookAtPoint = playerCar.position.clone().add(lookAtOffset)
      camera.lookAt(lookAtPoint)
      
      renderer.render(scene, camera)
    }
    
    animate()
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', () => {})
      window.removeEventListener('keyup', () => {})
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose())
          } else {
            object.material.dispose()
          }
        }
      })
      
      renderer.dispose()
    }
  }, [width, height])
  
  return (
    <div ref={mountRef} className="w-full h-full">
      <div className="absolute bottom-4 left-4 bg-black/50 text-white p-2 rounded">
        <p>Controls:</p>
        <p>W/↑ - Accelerate</p>
        <p>S/↓ - Brake/Reverse</p>
        <p>A/← - Turn Left</p>
        <p>D/→ - Turn Right</p>
      </div>
    </div>
  )
}

export default ThreeScene 