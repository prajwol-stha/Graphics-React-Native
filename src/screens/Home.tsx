import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation=useNavigation();
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      {/* <Button title='Navigate' onPress={()=>navigation.navigate('Search')}/> */}
    </View>
  )
}

export default Home