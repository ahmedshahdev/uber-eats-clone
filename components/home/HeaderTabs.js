import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from "react-native";

const HeaderTabs = ({activeTab, setActiveTab}) => {
    // const [activeTab, setActiveTab] = useState("Delivery");
  return (

    <View style={{flexDirection: "row", "justifyContent": "center"}}>
        <HeaderButton text="Delivery" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <HeaderButton text="Pickup"activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  )
}

const HeaderButton = ({text, activeTab, setActiveTab}) => {
  return (
    <TouchableOpacity style={{backgroundColor: activeTab === text ? "black" : "white",
     paddingHorizontal: 10, paddingVertical: 5, borderRadius: 30}} onPress={()=>setActiveTab(text)}>
        <Text style={
            {color: activeTab === text ? "white" : "black", fontWeight: '900'}
        }>
            {text}
        </Text>
    </TouchableOpacity>
  )
}


export default HeaderTabs