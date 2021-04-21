import React from "react";
import { View, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

import { FontAwesome5 } from "@expo/vector-icons";

const window = Dimensions.get("window");
const windowwidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

import HomeStack from "../Navigation/HomeStack";
import Filter from "../Screens/Filter";
import Fashion from "../Screens/Fashion";
import Categories from "../Screens/Categories";
import Men from "../Screens/Men";
import Selected from "../Screens/Selected";
import Selectedtwo from "../Screens/Selectedtwo";
import Order from "../Screens/Order";
import Payment from "../Screens/Payment";
import OrderPlaced from "../Screens/OrderPlaced";
import Login from "../Screens/Login";
import SignUp from "../Screens/SignUp";
import Wishlist from "../Screens/Wishlist";
import Cart from "../Screens/Cart";
import Address from "../Screens/Address";

import Notification from "../Screens/Notification";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function AppStackNavigator({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => {
          return {
            headerShown: false,
            headerTitle: "",
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={({ navigation }) => {
          return {
            headerShown: false,
            headerTitle: "",
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={({ navigation }) => {
          return {
            headerTitle: "Wishlist",
            headerTitleStyle: {
              marginLeft: 35,
              alignSelf: "center",
            },
            headerLeft: () => {
              return null;
            },
            headerRight: () => (
              <View
                style={{
                  //backgroundColor: "yellow",
                  width: windowwidth * 0.95,
                  height: windowheight * 0.06,
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <MaterialCommunityIcons
                  style={{}}
                  size={24}
                  name="menu"
                  onPress={() => navigation.openDrawer()}
                />
                <View
                  style={{
                    // backgroundColor: "cyan",
                    width: windowwidth * 0.19,
                    height: windowheight * 0.06,
                    alignSelf: "flex-end",
                    justifyContent: "center",
                    marginRight: 15,

                    alignItems: "flex-end",
                  }}
                >
                  <MaterialCommunityIcons
                    size={24}
                    name="bell"
                    onPress={() => navigation.navigate("Notification")}
                  />
                </View>
              </View>
            ),
          };
        }}
      />
      <Stack.Screen
        name="Selected"
        component={Selected}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              marginLeft: -20,
            },

            headerTitle: "",
            headerRight: () => (
              <View
                style={{
                  //backgroundColor: "cyan",
                  width: windowwidth * 0.19,
                  height: windowheight * 0.06,
                  alignSelf: "flex-end",
                  justifyContent: "space-between",
                  marginRight: 15,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  size={24}
                  name="heart"
                  onPress={() => navigation.navigate("Wishlist")}
                />
                <MaterialCommunityIcons
                  size={24}
                  name="cart"
                  onPress={() => navigation.navigate("Cart")}
                />
              </View>
            ),
          };
        }}
      />
      <Stack.Screen
        name="Selectedtwo"
        component={Selectedtwo}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              marginLeft: -20,
            },

            headerTitle: "",
            headerRight: () => (
              <View
                style={{
                  //backgroundColor: "cyan",
                  width: windowwidth * 0.19,
                  height: windowheight * 0.06,
                  alignSelf: "flex-end",
                  justifyContent: "space-between",
                  marginRight: 15,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  size={24}
                  name="heart"
                  onPress={() => navigation.navigate("Wishlist")}
                />
                <MaterialCommunityIcons
                  size={24}
                  name="cart"
                  onPress={() => navigation.navigate("Cart")}
                />
              </View>
            ),
          };
        }}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              marginLeft: -20,
            },
            headerRight: () => (
              <View
                style={{
                  // backgroundColor: "cyan",
                  width: windowwidth * 0.19,
                  height: windowheight * 0.06,
                  alignSelf: "flex-end",

                  marginRight: 15,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              ></View>
            ),
          };
        }}
      />
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              marginLeft: -20,
            },
            headerRight: () => (
              <View
                style={{
                  // backgroundColor: "cyan",
                  width: windowwidth * 0.19,
                  height: windowheight * 0.06,
                  alignSelf: "flex-end",

                  marginRight: 15,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              ></View>
            ),
          };
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              marginLeft: -20,
            },
            headerRight: () => (
              <View
                style={{
                  // backgroundColor: "cyan",
                  width: windowwidth * 0.19,
                  height: windowheight * 0.06,
                  alignSelf: "flex-end",

                  marginRight: 15,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              ></View>
            ),
          };
        }}
      />
      <Stack.Screen
        name="Fashion"
        component={Fashion}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              marginLeft: -20,
            },
            headerRight: () => (
              <View
                style={{
                  // backgroundColor: "cyan",
                  width: windowwidth * 0.19,
                  height: windowheight * 0.06,
                  alignSelf: "flex-end",

                  marginRight: 15,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              ></View>
            ),
          };
        }}
      />
      <Stack.Screen name=" Categories" component={Categories} />
      <Stack.Screen
        name="Men"
        component={Men}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              marginLeft: -20,
            },
            headerRight: () => (
              <View
                style={{
                  // backgroundColor: "cyan",
                  width: windowwidth * 0.19,
                  height: windowheight * 0.06,
                  alignSelf: "flex-end",

                  marginRight: 15,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              ></View>
            ),
          };
        }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              marginLeft: -20,
            },
            headerRight: () => (
              <View
                style={{
                  // backgroundColor: "cyan",
                  width: windowwidth * 0.19,
                  height: windowheight * 0.06,
                  alignSelf: "flex-end",

                  marginRight: 15,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              ></View>
            ),
          };
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              marginLeft: -20,
            },
            headerRight: () => (
              <View
                style={{
                  // backgroundColor: "cyan",
                  width: windowwidth * 0.19,
                  height: windowheight * 0.06,
                  alignSelf: "flex-end",

                  marginRight: 15,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              ></View>
            ),
          };
        }}
      />

      <Stack.Screen
        name="Notification"
        component={Notification}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              marginLeft: -20,
            },
            headerRight: () => (
              <View
                style={{
                  // backgroundColor: "cyan",
                  width: windowwidth * 0.19,
                  height: windowheight * 0.06,
                  alignSelf: "flex-end",

                  marginRight: 15,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              ></View>
            ),
          };
        }}
      />
      <Stack.Screen
        name="OrderPlaced"
        component={OrderPlaced}
        options={({ navigation }) => {
          return {
            headerShown: false,
            headerTitle: "",
            headerLeft: () => {
              return null;
            },
          };
        }}
      />
      <Stack.Screen
        name="Address"
        component={Address}
        options={({ navigation }) => {
          return {
            headerTitleStyle: {
              marginLeft: -20,
            },
            headerRight: () => (
              <View
                style={{
                  // backgroundColor: "cyan",
                  width: windowwidth * 0.19,
                  height: windowheight * 0.06,
                  alignSelf: "flex-end",

                  marginRight: 15,
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
              ></View>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}

export default AppStackNavigator;
