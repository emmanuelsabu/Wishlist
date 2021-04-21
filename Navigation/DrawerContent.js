import React from "react";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { View, Dimensions, Image } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const window = Dimensions.get("window");
const windowwidth = Dimensions.get("window").width;
const windowheight = Dimensions.get("window").height;

function DrawerContent({ navigation }) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View
          style={{
            // backgroundColor: "violet",
            width: windowwidth * 0.7,
            height: windowheight * 0.09,
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 15,
            marginTop: 15,
          }}
        >
          <View
            style={{
              backgroundColor: "lightgreen",
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
          >
            <Image
              style={{ width: "100%", height: "100%", borderRadius: 30 }}
              source={require("../assets/1.jpg")}
            ></Image>
          </View>
          <View
            style={{
              // backgroundColor: "yellow",
              width: "70%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Jaison Moscow
            </Text>
            <Text style={{ fontSize: 10 }}>jaisonmoscow@gmail.com</Text>
          </View>
        </View>
        <DrawerItem
          style={{ marginTop: 15 }}
          labelStyle={{ fontSize: 17 }}
          label="Home"
          //   onPress={() => navigation.navigate("Home")}
        />
        <DrawerItem
          labelStyle={{ fontSize: 17 }}
          label="Account"
          //   onPress={() => navigation.navigate("Profile")}
        />
        <DrawerItem
          labelStyle={{ fontSize: 17 }}
          label="Orders"
          onPress={() => {}}
        />
        <DrawerItem
          labelStyle={{ fontSize: 17 }}
          label="Buy Again"
          onPress={() => {}}
        />
        <DrawerItem
          labelStyle={{ fontSize: 17 }}
          label="Lists"
          onPress={() => {}}
        />
        <DrawerItem
          labelStyle={{ fontSize: 17 }}
          label="Customer Service"
          onPress={() => {}}
        />
      </DrawerContentScrollView>
      <Drawer.Section style={{ marginBottom: 100 }} title="Preference">
        <TouchableRipple
          onPress={() => {
            toggleTheme();
          }}
        >
          <View
            style={{
              // backgroundColor: "red",
              marginLeft: 15,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Dark Theme</Text>
            <View pointerEvents="none">
              <Switch color={"#FCCF7D"} value={isDarkTheme} />
            </View>
          </View>
        </TouchableRipple>
      </Drawer.Section>
      <Drawer.Section
        style={{
          borderTopColor: "#FCCF7D",
          borderTopWidth: 1,
        }}
      ></Drawer.Section>
      <DrawerItem
        style={{ marginBottom: 10 }}
        icon={({ color, size }) => (
          <MaterialCommunityIcons
            name="exit-to-app"
            color={color}
            size={size}
          />
        )}
        labelStyle={{ marginLeft: -20 }}
        label="Log out"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}

export default DrawerContent;
