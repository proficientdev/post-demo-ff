import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { useRoute } from "@react-navigation/native";
import { getCommentsByPostId } from "../services/postService";
import CommentCard from "../components/CommentCard";

const { width } = Dimensions.get("window");

export default function PostCommentScreen() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCommentsByPostId(postId)
      .then((response) => {
        setComments(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  const route = useRoute();
  const { postId } = route.params;
  return (
    <View style={styles.container}>
      {loading && <Text style={styles.loadingText}>Loading...</Text>}
      <FlatList
        data={comments}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CommentCard item={item} width={width} />}
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
  postCard: {
    padding: 15,
    width: width * 0.85,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  postTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 10,
    marginTop: 10,
  },
  postBody: {
    fontSize: 16,
    color: "#0002",
    textAlign: "justify",
  },
  loadingText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fc0394",
  },
});
