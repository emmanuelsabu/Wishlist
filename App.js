import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppStackNavigator from "./Navigation/AppStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "./Navigation/DrawerContent";
import Filter from "./Screens/Filter";
import { Provider } from "react-redux";
import store from "./Redux/store";

const Drawer = createDrawerNavigator();
function App(props) {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="AppStackNavigator" component={AppStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
   </Provider>

  );
}

export default App;
