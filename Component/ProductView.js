import React from 'react';
import {View,StyleSheet, TouchableOpacity,Text,Image} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
    widthPercentageToDP as wp,
    widthPercentageToDP as hp,
  } from "react-native-responsive-screen";
function ProductView(onpress,imageUri,title,subTitle,price,correctpz,offer,navigate ) {
    console.log(title)
return (
        <View style={{
              // backgroundColor: "cyan",
              margin: 10,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={{
                // backgroundColor: "red",
                width: wp("40%"),
                height: hp("40%"),
      
                marginLeft: 10,
                elevation: 3,
              }}
              onPress={navigate}
            >
              <Image style={{ width: "100%", height: "100%" }}  />
              <MaterialCommunityIcons
                style={{ position: "absolute", right: 3, top: 5 }}
                size={20}
                name="heart"
                color="grey"
                onPress={onpress}
              />
            </TouchableOpacity>
      
            <Text style={{
                fontSize: 14,
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 10,
              }}
            >
              {subTitle}
            </Text>
            <View
              style={{
                //backgroundColor: "yellow",
                width: wp("40%"),
                height: hp("5%"),
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Image
                style={{
                  width: wp("4%"),
                  height: hp("4%"),
                  marginLeft: 10,
                }}
                source={require("../assets/rupee.png")}
              ></Image>
              <Text
                style={{
                  fontSize: 17,
                }}
              >
                {price}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#817777",
                }}
              >
                {correctpz}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "#059618",
                }}
              >
                {offer}
              </Text>
            </View>
          </View>
        );
}

const styles = StyleSheet.create({
container:{}
})

export default ProductView;