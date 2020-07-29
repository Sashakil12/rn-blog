import React, { useContext, useState } from "react";
import { Text, StyleSheet, TextInput, View, Button } from "react-native";
import { Context } from "../contexts/blogContext";
import { NavigationContext } from "react-navigation";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);

  //   console.log(state);
  const [post] = state.filter(p => p.id === id);
  const [blogPost, setBlogPost] = useState(post);
  return (
    <View>
      <TextInput
        style={styles.input}
        name="title"
        placeholder="title"
        value={blogPost.title}
        onChangeText={e => setBlogPost(p => ({ ...p, title: e }))}
      />
      <TextInput
        style={styles.input}
        name="content"
        placeholder="content"
        value={blogPost.content}
        onChangeText={e => setBlogPost(p => ({ ...p, content: e }))}
      />
      <Button
        title="Save"
        onPress={() => {
          editBlogPost(blogPost, () => navigation.goBack());
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 10,
    padding: 10
  }
});

export default EditScreen;
