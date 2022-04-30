import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const localRestaurants = [
    {
      name: "Beachside Bar",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 4.5,
    },
    {
      name: "Benihana",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "$$",
      reviews: 1244,
      rating: 3.7,
    },
    {
      name: "India's Grill",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      categories: ["Indian", "Bar"],
      price: "$$",
      reviews: 700,
      rating: 4.9,
    },
  ];

const RestaurentItems = ({navigation, restaurentdata}) => {

  console.log(restaurentdata)
  return (
        
      <View>
        <Text>{restaurentdata.length}</Text>
        {restaurentdata.map((res, index)=>{
          return <TouchableOpacity key={index} style={{padding: 15}} activeOpacity={0.5}
            onPress={()=>{
              navigation.navigate("RestaurantDetails", {
                name: res.name,
                image: res.image_url,
                price: res.price,
                reviews: res.review_count,
                rating: res.rating,
                categories: res.categories
              })
            }}
          >
            <RestaurentImage image={res.image_url}/>
            <RestaurentInfo name={res.name} rating={res.rating}/>
        </TouchableOpacity>
      })}
      </View>
  )
}

const RestaurentImage = ({image}) => {
    return (
        <Image
            style={{width: "100%", height: 180, borderRadius: 4}}
            source={{uri:image}}/>
    )
}

const RestaurentInfo = ({name, rating}) => {
    return (
        <View style={{flexDirection:"row", alignItems: "center", justifyContent: "space-between", marginTop: 10}}>
            <View>
                <Text style={{fontWeight: "bold"}}> {name} </Text>
                <Text> 20-35 • km </Text>
            </View>
            <View style={{flexDirection: "row", alignItems:"center"}}>
                <Ionicons name='star' size={12}/>
                <Text style={{marginLeft: 5}}>{rating}</Text>
            </View>
        </View>
    )
}

export default RestaurentItems