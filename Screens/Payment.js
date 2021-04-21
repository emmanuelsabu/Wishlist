import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function Payment({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#FAF9F6",
        flex: 1,
      }}
    >
      <View
        style={{
          //  backgroundColor: "yellow",
          width: wp("100%"),
          height: hp("15%"),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: 25,
            height: 25,
            borderRadius: 40,
            marginLeft: 20,
            borderColor: "black",
            borderWidth: 0.5,
          }}
        ></View>
        <Text style={{ fontSize: 15, marginLeft: 10 }}>UPI</Text>
      </View>
      <View
        style={{
          // backgroundColor: "yellow",
          width: wp("100%"),
          height: hp("15%"),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: 25,
            height: 25,
            borderRadius: 40,
            marginLeft: 20,
            borderColor: "black",
            borderWidth: 0.5,
          }}
        ></View>
        <Text style={{ fontSize: 15, marginLeft: 10 }}>PhonePe</Text>
      </View>
      <View
        style={{
          // backgroundColor: "yellow",
          width: wp("100%"),
          height: hp("15%"),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: 25,
            height: 25,
            borderRadius: 40,
            marginLeft: 20,
            borderColor: "black",
            borderWidth: 0.5,
          }}
        ></View>
        <Text style={{ fontSize: 15, marginLeft: 10 }}>
          Credit / Debit / ATM Card
        </Text>
      </View>
      <View
        style={{
          //  backgroundColor: "yellow",
          width: wp("100%"),
          height: hp("15%"),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: 25,
            height: 25,
            borderRadius: 40,
            marginLeft: 20,
            borderColor: "black",
            borderWidth: 0.5,
          }}
        ></View>
        <Text style={{ fontSize: 15, marginLeft: 10 }}>Net Banking</Text>
      </View>
      <View
        style={{
          // backgroundColor: "yellow",
          width: wp("100%"),
          height: hp("15%"),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: 25,
            height: 25,
            borderRadius: 40,
            marginLeft: 20,
            borderColor: "black",
            borderWidth: 0.5,
          }}
        ></View>
        <Text style={{ fontSize: 15, marginLeft: 10 }}>
          EMI (Easy Installments)
        </Text>
      </View>
      <View
        style={{
          // backgroundColor: "yellow",
          width: wp("100%"),
          height: hp("15%"),
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: 25,
            height: 25,
            borderRadius: 40,
            marginLeft: 20,
            borderColor: "black",
            borderWidth: 0.5,
          }}
        ></View>
        <Text style={{ fontSize: 15, marginLeft: 10 }}>Cash on Delivery</Text>
      </View>
      <View
        style={{
          backgroundColor: "#E1E1E1",
          width: wp("100%"),
          height: hp("1.5%"),
        }}
      ></View>
      <View
        style={{
          // backgroundColor: "red",
          width: wp("100%"),
          height: hp("15%"),
          marginTop: 20,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            marginLeft: 20,
            fontSize: 20,
          }}
        >
          1,741
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFAA00",
            width: "50%",
            height: "95%",
            borderRadius: 30,
            marginRight: 15,
            justifyContent: "center",
            elevation: 3,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 18,
            }}
            onPress={() => navigation.navigate("OrderPlaced")}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Payment;
