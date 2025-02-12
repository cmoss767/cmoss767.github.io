import { RigidBody } from '@react-three/rapier'
import { Box } from '@react-three/drei'

const Environment = () => {
  return (
    <RigidBody type="fixed">
      <Box args={[20, 0.5, 20]} position={[0, -0.25, 0]} receiveShadow>
        <meshStandardMaterial color="#f0f0f0" />
      </Box>
    </RigidBody>
  )
}

export default Environment 