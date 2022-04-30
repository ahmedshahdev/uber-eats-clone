import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar({setLocation}) {
  return (
    <View style={{marginTop: 10, flexDirection: "row"}}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyBhV85FngLysCXGAz6B_bd1c5c4wKiVuz8" }}
        onPress={(data, details = null) => {
          setLocation(data.description.split(',')[0]);
        }}
        placeholder='Karachi, Lahore..'
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            marginTop: 5
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            marginTop: 7
          }
        }}
        renderLeftButton={()=>{
          return <View>
            <Ionicons name='location-sharp' size={24}/>
          </View>
        }}
        renderRightButton={()=>{
          return <View>
            <TouchableOpacity style={{flexDirection: "row", alignItems: "center",
            backgroundColor: "white", padding: 9, borderRadius: 30
          }}>
              <Antdesign name='clockcircle' size={11}/>
              <Text style={{marginLeft: 5}}>Search</Text>
            </TouchableOpacity>
          </View>
        }}
      />
    </View>
  )
}