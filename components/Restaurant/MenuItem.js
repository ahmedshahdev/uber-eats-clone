import React from 'react'
import { View, Text, Image, ScrollView,TouchableOpacity } from 'react-native'
// import {  } from 'react-native-web'

const food = [
    {
        "title": "Chiken Tikka",
        "description": "Lorem ispim sit dolar amit conisder fuck",
        "price": "450rps",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
        "title": "Broast",
        "description": "Lorem ispim sit dolar amit conisder fuck",
        "price": "560rps",
        "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
        "title": "Seekh Kababa",
        "description": "Lorem ispim sit dolar amit conisder fuck",
        "price": "120rps",
        "image": "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },   {
        "title": "Chiken Tikka",
        "description": "Lorem ispim sit dolar amit conisder fuck",
        "price": "450rps",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
]

function MenuItem() {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} >
        {food.map((item, index) => {
            return <TouchableOpacity activeOpacity={0.5} key={index} style={{padding: 20, flexDirection: "row", borderBottomWidth:1, borderColor: "#eee"}}>
                <FoodInfo title={item.title} des={item.description} price={item.price}/>
                <FoodImage image={item.image}/>
            </TouchableOpacity>
        })}
    </ScrollView>
  )
}

const FoodInfo = ({title, des, price}) => {
    return (
        <View style={{width: "67%"}}>
            <Text style={{fontSize: 24}}>{title}</Text>
            <Text>{des}</Text>
            <Text style={{marginTop:10}}>{price}</Text>
        </View>
    )
}

const FoodImage = ({image}) => {
    return (    <Image source={{uri: image}} style={{width: 100, height: 100, borderRadius: 5}}/>)
}

export default MenuItem