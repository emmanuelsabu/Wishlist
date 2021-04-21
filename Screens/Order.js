import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
function Order({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#E1E1E1",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("40%"),
        }}
      >
        <View
          style={{
            // backgroundColor: "lightgreen",
            width: "100%",
            height: "60%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Manas Jayadevan
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 14,
              marginTop: 5,
            }}
          >
            Thoppil, SN Street PO Ernakulam - 654345
          </Text>
          <Text
            style={{
              marginLeft: 15,
              fontSize: 14,
              marginTop: 5,
            }}
          >
            7954623656
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFAA00",
            width: wp("70%"),
            height: hp("10%"),
            alignSelf: "center",
            justifyContent: "center",
            marginTop: 10,
            elevation: 3,
          }}
          onPress={() => navigation.navigate("Address")}
        >
          <Text
            style={{
              fontSize: 14,
              alignSelf: "center",
            }}
          >
            Change or Add Address
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("40%"),
          marginTop: 10,
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            width: wp("100%"),
            height: hp("40%"),
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              // backgroundColor: "pink",
              width: wp("60%"),
              height: hp("40%"),
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text style={{ marginLeft: 15 }}> 1,701 2,195 22% off</Text>
            <Text style={{ marginLeft: 15, marginTop: 3 }}>
              {" "}
              Delivery by Fri Mar 13 -40
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "cyan",
              width: wp("40%"),
              height: hp("40%"),
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../assets/1.jpg")}
            ></Image>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("10%"),
          marginTop: 10,
        }}
      >
        <Text
          style={{
            marginLeft: 15,
            marginTop: 10,
            color: "#817777",
          }}
        >
          PRICE DETAILS
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("20%"),
          marginTop: 2,
        }}
      >
        <View
          style={{
            // backgroundColor: "cyan",
            width: wp("100%"),
            height: hp("20%"),
            flexDirection: "row",
          }}
        >
          <View
            style={{
              // backgroundColor: "pink",
              width: wp("50%"),
              height: hp("20%"),
              justifyContent: "center",
            }}
          >
            <Text style={{ marginLeft: 15 }}>Price ( 1 item) </Text>
            <Text style={{ marginLeft: 15, marginTop: 5 }}>Delivery</Text>
          </View>
          <View
            style={{
              // backgroundColor: "violet",
              width: wp("50%"),
              height: hp("20%"),
              justifyContent: "center",
            }}
          >
            <Text style={{ marginLeft: 20 }}>1,701</Text>
            <Text style={{ marginLeft: 20, marginTop: 5 }}>40</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("16%"),
          marginTop: 2,
        }}
      >
        <View
          style={{
            // backgroundColor: "cyan",
            width: wp("62%"),
            height: hp("16%"),
            marginLeft: 15,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Amount Payable
          </Text>
          <Text>1,741</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("100%"),
          height: hp("30%"),
          marginTop: 2,
        }}
      >
        <View
          style={{
            // backgroundColor: "cyan",
            width: wp("100%"),
            height: hp("30%"),
            flexDirection: "row",
          }}
        >
          <View
            style={{
              // backgroundColor: "pink",
              width: wp("50%"),
              height: hp("30%"),
              justifyContent: "center",
            }}
          >
            <Text style={{ marginLeft: 15, fontWeight: "bold", fontSize: 16 }}>
              1,741
            </Text>
            <Text style={{ marginLeft: 15, marginTop: 5, fontSize: 8 }}>
              View price details
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFAA00",
              width: wp("45%"),
              height: hp("13%"),
              borderRadius: 40,
              marginRight: 10,
              elevation: 3,
              justifyContent: "center",
              alignSelf: "center",
            }}
            onPress={() => navigation.navigate("Payment")}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 16,
              }}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Order;
