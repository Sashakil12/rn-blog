import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/homeScreen.jsx";
import { Provider } from "./src/contexts/blogContext.js";
import ShowScreen from "./src/screens/ShowScreen";
import CreatePostScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/editScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ShowScreen,
    Create: CreatePostScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
