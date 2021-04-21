import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  FlatList,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";

const DATA = [
  {
    id: "1",
    image: require("../assets/MEN.png"),
    title: "MEN",
    color: "#F7CEE2",
  },
  {
    id: "2",
    image: require("../assets/MEN.png"),
    title: "WOMEN",
    color: "#CCCAF0",
  },
  {
    id: "3",
    image: require("../assets/MEN.png"),
    title: "KIDS",
    color: "#F7E3CC",
  },
];

function Fashion({ navigation }) {
  const rendeItem = ({ item }) => (
    <TouchableOpacity
      style={{
        // backgroundColor: "cyan",
        width: wp("90%"),
        height: hp("40%"),
        alignSelf: "center",
      }}
      onPress={() => navigation.navigate("Men")}
    >
      <View
        style={{
          backgroundColor: item.color,
          width: wp("90%"),
          height: hp("35%"),
          alignSelf: "center",
          marginTop: 10,
          elevation: 3,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginLeft: 8,
            alignSelf: "center",
            marginLeft: 30,
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Text>
        <Image
          style={{
            width: "25%",
            height: "100%",
            marginRight: 20,
            alignItems: "flex-end",
          }}
          source={item.image}
        />
      </View>
    </TouchableOpacity>
  );
  return (
    <View
      style={{
        backgroundColor: "#FAF9F6",
        flex: 1,
      }}
    >
      <FlatList
        data={DATA}
        renderItem={rendeItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Fashion;
