import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../Screens/Home";
import Categories from "../Screens/Categories";
import Cart from "../Screens/Cart";
import Wishlist from "../Screens/Wishlist";

const Tab = createBottomTabNavigator();

function HomeStack(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "#FFAA00",
        activeTintColor: "#FAF9F6",
        inactiveBackgroundColor: "#ffff",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="cart" size={29} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeStack;
