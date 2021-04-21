import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  widthPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
    id: "1",
    image: require("../assets/3.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "2",
    image: require("../assets/4.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "1",
    image: require("../assets/5.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "2",
    image: require("../assets/6.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "1",
    image: require("../assets/7.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
  {
    id: "2",
    image: require("../assets/8.jpg"),
    title: "PUMA",
    subTitle: "Sneakers For Men",
    price: "4,590",
    correctpz: "7,890",
    offer: "22%off",
  },
];

function Selected({ navigation }) {
  const _productrenderitem = ({ item }) => (
    <View
      style={{
        //  backgroundColor: "cyan",
        margin: 10,
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{
          //backgroundColor: "red",
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
    <View
      style={{
        backgroundColor: "#FAF9F6",
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("50%"),
            height: hp("15%"),
            alignSelf: "flex-end",
            elevation: 3,
            justifyContent: "center",
          }}
          // onPress={() => navigation.navigate("Filter")}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 16,
            }}
          >
            Sort
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FAF9F6",
            width: wp("50%"),
            height: hp("15%"),

            elevation: 3,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Filter")}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 16,
            }}
          >
            Filters
          </Text>
        </TouchableOpacity>
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

export default Selected;
