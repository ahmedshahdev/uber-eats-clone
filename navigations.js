import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home'
import RestaurantDetails from './screens/RestaurantDetails'

export default RootNavigation = () => {
    const stack = createStackNavigator();

    const screenOptions = {headerShown: false}

    return <NavigationContainer>
        <stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <stack.Screen name="Home" component={Home} />
            <stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
        </stack.Navigator>
    </NavigationContainer> 

}