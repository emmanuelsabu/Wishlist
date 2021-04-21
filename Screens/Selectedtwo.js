import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

function Selectedtwo({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#FAF9F6",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "yellow",
          width: wp("85%"),
          height: hp("85%"),
          alignSelf: "center",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/1.jpg")}
        />
      </View>
      <View
        style={{
          // backgroundColor: "yellow",
          width: wp("75%"),
          height: hp("15%"),
          alignSelf: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: "25%",
            height: "100%",
            elevation: 3,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("../assets/1.jpg")}
          />
        </View>
        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: "25%",
            height: "100%",
            elevation: 3,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("../assets/1.jpg")}
          />
        </View>

        <View
          style={{
            backgroundColor: "#FAF9F6",
            width: "25%",
            height: "100%",
            elevation: 3,
          }}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
            }}
            source={require("../assets/1.jpg")}
          />
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            width: wp("100%"),
            height: hp("100%"),
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              //backgroundColor: "red",
              width: wp("100%"),
              height: hp("15%"),
              marginLeft: 10,
              marginTop: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              NIKE AIR MAX 200
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginTop: 5,
              }}
            >
              1,701 2,195 22% off
            </Text>
          </View>

          <View
            style={{
              // backgroundColor: "red",
              width: wp("100%"),
              height: hp("10%"),
              marginLeft: 10,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Sizes
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "yellow",
              width: wp("50%"),
              height: hp("7%"),
              flexDirection: "row",
              justifyContent: "space-between",

              marginLeft: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "15%",
                height: "100%",
                elevation: 3,
                borderColor: "black",
                borderWidth: 0.5,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                4
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                width: "15%",
                height: "100%",
                elevation: 3,
                borderColor: "black",
                borderWidth: 0.5,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                5
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                width: "15%",
                height: "100%",
                elevation: 3,
                borderColor: "black",
                borderWidth: 0.5,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                6
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                width: "15%",
                height: "100%",
                elevation: 3,
                borderColor: "black",
                borderWidth: 0.5,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  fontSize: 16,
                }}
              >
                7
              </Text>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: "red",
              width: "90%",
              height: "3%",
              marginLeft: 10,
              marginTop: 40,
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Colors
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: "yellow",
              width: "40%",
              height: "9%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
              marginLeft: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#6B3F8E",
                width: "25%",
                height: "100%",
                elevation: 3,
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#FF27AF",
                width: "25%",
                height: "100%",
                elevation: 3,
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#3651FF",
                width: "25%",
                height: "100%",
                elevation: 3,
              }}
            ></View>
          </View>
          <View
            style={{
              // backgroundColor: "yellow",
              width: wp("100%"),
              height: hp("30%"),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                width: wp("45%"),
                height: hp("13%"),
                borderRadius: 40,
                marginLeft: 10,
                elevation: 3,
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Cart")}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 16,
                }}
              >
                Add to cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFAA00",
                width: wp("45%"),
                height: hp("13%"),
                borderRadius: 40,
                marginRight: 10,
                elevation: 3,
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("Order")}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 16,
                }}
              >
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Selectedtwo;
