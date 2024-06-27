import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { getPosts } from "../services/postService";
import PostCard from "../components/PostCard";
const { width, height } = Dimensions.get("window");

const { useNavigation } = require("@react-navigation/native");

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const [screenData, setScreenData] = useState(Dimensions.get("screen"));

  useEffect(() => {
    const onChange = (result) => {
      setScreenData(result.screen);
    };

    Dimensions.addEventListener("change", onChange);

    return () => Dimensions.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data.map((x) => ({ ...x, color: "#fc0394" })));
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      <FlatList
        data={posts}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <PostCard
            item={item}
            width={width}
            navigation={navigation}
            color={item.color}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
