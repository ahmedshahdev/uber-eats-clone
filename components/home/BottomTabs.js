import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const BottomTabs = () => {
  return (
    <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical:10, backgroundColor: "#fff", borderTopWidth:1, borderTopColor: "#404040"}}>
      <Icon title="Home" icon="home"/>
      <Icon title="Search" icon="search"/>
      <Icon title="Grocery" icon="shopping-bag"/>
      <Icon title="Orders" icon="receipt"/>
      <Icon title="Account" icon="user"/>
    </View>
  )
}

const Icon = ({icon, title}) => {
    return (
        <TouchableOpacity>
            <View style={{alignItems: "center"}}>
                <FontAwesome5 name={icon} size={25}/>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BottomTabs