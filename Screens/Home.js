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
import { FontAwesome5 } from "@expo/vector-icons";
import { Rating } from "react-star-ratings";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    color: "#F7CEE2",
    title: "Fashion",
    image: require("../assets/1.jpg"),
  },
  {
    id: "2",
    color: "#CCCAF0",
    title: "Mobiles",
    image: require("../assets/1.jpg"),
  },
  {
    id: "3",
    color: "#F7E3CC",
    title: "Electronics",
    image: require("../assets/1.jpg"),
  },
  {
    id: "4",
    color: "#C5EABD",
    title: "Furniture",
    image: require("../assets/1.jpg"),
  },
  {
    id: "5",
    color: "#87ceeb",
    title: "Sports",
    image: require("../assets/1.jpg"),
  },
];

const DETAILS = [
  {
    id: "1",
    image: require("../assets/1.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "2",
    image: require("../assets/2.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "3",
    image: require("../assets/3.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "4",
    image: require("../assets/4.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "5",
    image: require("../assets/5.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "6",
    image: require("../assets/6.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "7",
    image: require("../assets/7.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "8",
    image: require("../assets/8.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
];

function Home({ navigation }) {
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
    <TouchableOpacity
      style={{
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
      onPress={() => onFlatListItemClick(item)}
    >
      <View
        style={{
          backgroundColor: item.color,
          width: 55,
          height: 55,
          borderRadius: 30,
          marginLeft: 10,
          elevation: 3,
        }}
      >
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 30 }}
          source={item.image}
        />
      </View>
      <Text style={{ fontSize: 12, marginLeft: 8 }}>{item.title}</Text>
    </TouchableOpacity>
  );
  const _productrenderitem = ({ item }) => (
    <View
      style={{
        // backgroundColor: "cyan",
        margin: 10,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{
          // backgroundColor: "red",
          width: wp("40%"),
          height: hp("40%"),

          marginLeft: 10,
          elevation: 3,
        }}
        onPress={() => navigation.navigate("Selectedtwo")}
      >
        <Image style={{ width: "100%", height: "100%" }} source={item.image} />
        <MaterialCommunityIcons
          style={{ position: "absolute", right: 3, top: 5 }}
          size={20}
          name="heart"
          color="grey"
          onPress={() => navigation.navigate("Wishlist")}
        />
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 14,
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          fontSize: 14,
          marginLeft: 10,
        }}
      >
        {item.subTitle}
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
          {item.price}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#817777",
          }}
        >
          {item.correctpz}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: "#059618",
          }}
        >
          {item.offer}
        </Text>
      </View>
    </View>
  );
  return (
    <View style={{ backgroundColor: "#FAF9F6", flex: 1 }}>
      <View
        style={{
          backgroundColor: "#FAF9F6",
          width: wp("90%"),
          height: hp("12%"),
          elevation: 3,
          marginTop: 10,
          alignSelf: "center",
          alignItems: "center",
          paddingLeft: 10,
          flexDirection: "row",
          borderRadius: 40,
        }}
      >
        <FontAwesome5 name="search" size={15} color="#C0C0C0" />
        <TextInput
          style={{
            width: "100%",
            height: "100%",
            fontSize: 13,
            marginLeft: 10,
          }}
          placeholder="Search for brands and products"
        />
      </View>

      <View>
        <View
          style={{
            // backgroundColor: "pink",
            width: wp("100%"),
            height: hp("25%"),
          }}
        >
          <FlatList
            horizontal
            data={DATA}
            renderItem={rendeItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <FlatList
        numColumns={2}
        data={DETAILS}
        renderItem={_productrenderitem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Home;
