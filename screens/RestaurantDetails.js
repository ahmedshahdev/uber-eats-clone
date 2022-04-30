import { View, Text, Image,ScrollView } from 'react-native'
import React from 'react'
import About from '../components/Restaurant/About'
import MenuItem from '../components/Restaurant/MenuItem'
// import { ScrollView } from 'react-native-web'

const RestaurantDetails = ({route}) => {
  return (
      <View style={{flex: 1}}>
            <About route={route}/>
            <MenuItem/>
      </View>
  )
}

export default RestaurantDetails