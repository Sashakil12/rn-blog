import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../contexts/blogContext";
const CreatePostScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View>
      <TextInput
        value={title}
        style={styles.input}
        name="blog post title"
        placeholder="blog post content"
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        value={content}
        style={styles.input}
        name="content"
        placeholder="content"
        onChangeText={text => setContent(text)}
      />
      <Button
        title="Add blog post"
        onPress={() => {
          addBlogPost(title, content);
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    margin: 10,
    fontSize: 18
  }
});

export default CreatePostScreen;
