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
    title: "FASHION",
    color: "#F7CEE2",
  },
  {
    id: "2",
    image: require("../assets/MEN.png"),
    title: "MOBILES",
    color: "#CCCAF0",
  },
  {
    id: "3",
    image: require("../assets/MEN.png"),
    title: "ELECTRONICS",
    color: "#F7E3CC",
  },
  {
    id: "4",
    image: require("../assets/MEN.png"),
    title: "FURNITURE",
    color: "#C5EABD",
  },
  {
    id: "5",
    image: require("../assets/MEN.png"),
    title: "SPORTS",
    color: "#87ceeb",
  },
];

function Categories({ navigation }) {
  const onFlatListItemClick = (item) => {
    switch (item.id) {
      case "1":
        navigation.navigate("Fashion");
        break;
      case "2":
        navigation.navigate("Selected");
        break;
      case "3":
        navigation.navigate("Selected");
        break;
      case "4":
        navigation.navigate("Selected");
        break;
      case "5":
        navigation.navigate("Selected");
        break;

      default:
        break;
    }
  };
  const rendeItem = ({ item }) => (
    <View
      style={{
        // backgroundColor: "cyan",
        width: wp("90%"),
        height: hp("40%"),
        alignSelf: "center",
      }}
    >
      <TouchableOpacity
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
        onPress={() => onFlatListItemClick(item)}
      >
        <Text
          style={{
            fontSize: 18,
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
      </TouchableOpacity>
    </View>
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

export default Categories;
