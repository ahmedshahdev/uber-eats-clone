import React, {useState, useEffect} from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, ScrollView } from "react-native";
import Categories from '../components/home/Categories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurentItems from '../components/home/RestaurentItems';
import SearchBar from '../components/home/SearchBar'; 
import {localRestaurants}  from '../components/home/RestaurentItems'
import BottomTabs from '../components/home/BottomTabs';



const yelp_api_key = `HcZPfcz0BY0nrv-XY6jYjpm5p3M9SXpmxZtT3F1BmH9JlR_IC8Fp07XZ64a8RbuGel_zqb0Ehln3CuPDRkgbGiA7AI6CFC9FCGtB9U0zdIjWHsmZa8jbvuopch9sYnYx`;
const google_api_key = "AIzaSyBhV85FngLysCXGAz6B_bd1c5c4wKiVuz8";

const Home = ({navigation}) => {
  console.log(navigation)
  const [activeTab, setActiveTab] = useState("Delivery")
  const [location, setLocation] = useState('San+Francisco')
  const [loading, setLoading] = useState(false)
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants)

  const getRestaurantsFromYelp = async () => {
    setLoading(true);
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}`
    const data = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${yelp_api_key}`
      }
    })
    let __data = await data.json();

    setRestaurantsData(
      await __data.businesses.filter((item)=>item.transactions.includes(activeTab.toLowerCase()))
    )
    setLoading(false);

  }

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [activeTab, location])
  


  return (
    <SafeAreaView style={style.AndroidSafeArea}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar setLocation={setLocation}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        {!loading && <RestaurentItems restaurentdata={restaurantsData} navigation={navigation} />}
        {loading && <Text>Loading...</Text>}
        
      </ScrollView>
    <BottomTabs/>
    </SafeAreaView>
  )
}

const style= StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0
  }
});

export default Home