import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function Cart({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#FAF9F6",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("15%"),
          elevation: 3,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginLeft: 15,
          }}
        >
          Deliver to Aroor - 688564
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("25%"),
            height: hp("10%"),
            borderColor: "black",
            borderWidth: 0.5,
            justifyContent: "center",
            marginRight: 15,
          }}
          onPress={() => navigation.navigate("Address")}
        >
          <Text style={{ alignSelf: "center" }}>Change</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("50%"),
          elevation: 3,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            // backgroundColor: "cyan",
            width: wp("45%"),
            height: hp("15%"),
            marginLeft: 15,
            marginTop: 30,
          }}
        >
          <Text>RUNNING ADIZERO ADIOS 5 SHOES</Text>
          <Text>9,000</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#FAF9F6",
              width: wp("25%"),
              height: hp("10%"),
              borderColor: "black",
              borderWidth: 0.5,
              justifyContent: "center",
              marginRight: 15,
              marginTop: 30,
            }}
          >
            <Text style={{ alignSelf: "center" }}>remove</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "yellow",
            width: wp("50%"),
            height: hp("50%"),
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("../assets/1.jpg")}
          ></Image>
        </View>
      </View>
    </View>
  );
}

export default Cart;
