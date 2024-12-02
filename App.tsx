import { StyleSheet, Text, View } from 'react-native'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './src/assets/Model'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Canvas>
        <Suspense>
          <Model/>
        </Suspense>
      </Canvas>
    </View>
  )
}

export default App
