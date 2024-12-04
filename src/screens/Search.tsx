import { View, Text } from 'react-native'
import React from 'react'

const Search = ({route}: any) => {
  const {search}=route.params;
  return (
    <View>
      <Text>{search}</Text>
    </View>
  )
}

export default Search