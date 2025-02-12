import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'
import { RigidBody, CapsuleCollider } from '@react-three/rapier'
import type { RapierRigidBody } from '@react-three/rapier'
import { Box } from '@react-three/drei'

const Character = () => {
  const characterRef = useRef<RapierRigidBody>(null)

  return (
    <RigidBody
      ref={characterRef}
      colliders={false}
      mass={1}
      type="dynamic"
      position={[0, 1, 0]}
    >
      <CapsuleCollider args={[0.5, 0.4]} />
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial color="hotpink" />
      </Box>
    </RigidBody>
  )
}

export default Character 