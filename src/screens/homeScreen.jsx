import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";
import { Context } from "../contexts/blogContext";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const HomeScreen = ({ navigation }) => {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={item => `${item.title}-${Math.floor(Math.random() * 40)}`}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Button title="Add blog post" onPress={() => addBlogPost()} />
    </View>
  );
};
HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Ionicons style={styles.create} name="ios-create" size={30} />
      </TouchableOpacity>
    )
  };
};
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 24
  },
  create: {
    fontSize: 30,
    alignSelf: "flex-end",
    padding: 20
  }
});

export default HomeScreen;
