import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../contexts/blogContext";
import { Feather } from "@expo/vector-icons";
const HomeScreen = () => {
  const [state, addBlogPost] = useContext(Context);
  console.log(add);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={item => `${item.title}-${Math.floor(Math.random() * 40)}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text>{item.title}</Text>
              <Feather name="trash" onPress={() => null} />
            </View>
          );
        }}
      />
      <Button title="Add blog post" onPress={() => addBlogPost()} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default HomeScreen;
