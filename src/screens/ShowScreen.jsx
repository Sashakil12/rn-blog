import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../contexts/blogContext";
const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);
  const post = state.find(p => p.id === id);
  console.log(post);
  return (
    <View>
      <Text>{post.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
