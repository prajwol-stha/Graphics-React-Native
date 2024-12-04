import { StyleSheet, Text, View } from 'react-native'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './src/assets/Model'
import useControls from 'r3f-native-orbitcontrols'
//replace this app_graphics.tsx to app.tsx to see the configuration for the 3d model
const App = () => {
  const [OrbitControls, events] = useControls()
  return (
    <View style={{flex:1,backgroundColor:'ffffff'}}{...events}>
      <Canvas>
        <OrbitControls enablePan={true}></OrbitControls>
        <directionalLight position={[0.5,1,10]} args={['#9e9e9e']}/>
        <directionalLight position={[5,1,10]} args={['#9e9e9e']}/>
        <directionalLight position={[3,1,10]} args={['#9e9e9e']}/>
        <Suspense>
          <Model/>
        </Suspense>
      </Canvas>
    </View>
  )
}

export default App
