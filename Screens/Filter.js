import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function Filter({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#FAF9F6",
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          backgroundColor: "#EEEBE2",
          width: wp("50%"),
          height: hp("200%"),
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FAF9F6",
            width: "100%",
            height: "8%",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
            }}
          >
            Price
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#EEEBE2",
            width: "100%",
            height: "8%",
            marginTop: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
            }}
          >
            Brand
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#EEEBE2",
            width: "100%",
            height: "8%",
            marginTop: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
            }}
          >
            Discount
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#EEEBE2",
            width: "100%",
            height: "8%",
            marginTop: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
            }}
          >
            Customer Ratings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#EEEBE2",
            width: "100%",
            height: "8%",
            marginTop: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
            }}
          >
            Offers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#EEEBE2",
            width: "100%",
            height: "8%",
            marginTop: 5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              marginLeft: 15,
              fontSize: 16,
            }}
          >
            Availability
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("50%"),
          height: hp("200%"),
        }}
      >
        <View
          style={{
            //backgroundColor: "yellow",
            width: "100%",
            height: "8%",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <View
            style={{
              backgroundColor: "#FAF9F6",
              borderColor: "black",
              borderWidth: 1,
              height: "35%",
              width: "12%",
            }}
          ></View>
          <Text
            style={{
              marginLeft: 10,
            }}
          >
            Rs.249 and Below
          </Text>
        </View>
        <View
          style={{
            //backgroundColor: "yellow",
            width: "100%",
            height: "8%",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <View
            style={{
              backgroundColor: "#FAF9F6",
              borderColor: "black",
              borderWidth: 1,
              height: "35%",
              width: "12%",
            }}
          ></View>
          <Text
            style={{
              marginLeft: 10,
            }}
          >
            Rs.249 and Below
          </Text>
        </View>
        <View
          style={{
            //backgroundColor: "yellow",
            width: "100%",
            height: "8%",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <View
            style={{
              backgroundColor: "#FAF9F6",
              borderColor: "black",
              borderWidth: 1,
              height: "35%",
              width: "12%",
            }}
          ></View>
          <Text
            style={{
              marginLeft: 10,
            }}
          >
            Rs.249 and Below
          </Text>
        </View>
        <View
          style={{
            //backgroundColor: "yellow",
            width: "100%",
            height: "8%",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 15,
          }}
        >
          <View
            style={{
              backgroundColor: "#FAF9F6",
              borderColor: "black",
              borderWidth: 1,
              height: "35%",
              width: "12%",
            }}
          ></View>
          <Text
            style={{
              marginLeft: 10,
            }}
          >
            Rs.249 and Below
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFAA00",
            width: wp("50%"),
            height: hp("13%"),
            borderRadius: 40,
            marginTop: 320,
            justifyContent: "center",
            elevation: 3,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              alignSelf: "center",
            }}
          >
            Apply
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Filter;
