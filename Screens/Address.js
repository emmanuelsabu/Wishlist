import React from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function Address({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#FAF9F6",
        flex: 1,
      }}
    >
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 20,
          paddingLeft: 10,
        }}
        placeholder="Full name"
      />
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 20,
          paddingLeft: 10,
        }}
        placeholder="Phone number"
      />
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 20,
          paddingLeft: 10,
        }}
        placeholder="Add Alternative Phone Number"
      />
      <TextInput
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("20%"),
          elevation: 3,
          marginLeft: 15,
          marginTop: 20,
          paddingLeft: 10,
          paddingBottom: 30,
        }}
        placeholder="Full Address"
      />
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("43%"),
            height: hp("12%"),
            elevation: 3,
            marginLeft: 15,
            marginTop: 20,
            paddingLeft: 10,
          }}
          placeholder="State"
        />
        <TextInput
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("43%"),
            height: hp("12%"),
            elevation: 3,
            marginLeft: 15,
            marginTop: 20,
            paddingLeft: 10,
          }}
          placeholder="City"
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#FFAA00",
          width: wp("90%"),
          height: hp("13%"),
          alignSelf: "center",
          marginTop: 150,
          borderRadius: 40,
          justifyContent: "center",
          elevation: 3,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Save Address
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Address;
