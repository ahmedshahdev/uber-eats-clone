import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
    name: "Farm House Thai Cuisine",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "$$$",
    review: "14k",
    rating: 4.5,
    categories: [{title:"Thai"}, {title:"Asian"}, {title:"Vegetarian"}, {title:"Vegan"}],
}


const About = ({route}) => {
    const {name, image, price, reviews, rating, categories} = route.params;
    
    const formatedCategories = categories.map(cate=>cate.title).join(" • ")
    
    const description = `${formatedCategories} • ${price} • 💳 • ${rating} • ⭐ (${reviews})`
    // console.log(route)
  return (
    <View>
      <RestaurantImage name={name} description={description} image={route["params"].image}/>
        <View style={{padding: 15, borderBottomWidth: 1, borderColor: "#eee", marginTop: -30, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: "#fff"}}>
            <RestaurantTitle name={name}/>
            <RestaurantDescription description={description}/>
        </View>
    </View>
  )
}

const RestaurantImage = ({image}) => {
    return (
        <View>
            <Image source={{uri: image}}
                style={{width: "100%", height: 300}}
                >
            </Image>
        </View>
    )
}

const RestaurantTitle = ({name}) => {
    return (
        <View style={{}}>
            <Text style={{fontSize:  29, fontWeight: "bold"}}>{name}</Text>
        </View>
    )
}

const RestaurantDescription = ({description}) => {
    return (
        <Text style={{marginTop: 5}}>{description}</Text>
    )
}

export default About