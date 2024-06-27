import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { capitalizeFirstLetter } from "../utils/capitalize";
import Icon from "react-native-vector-icons/FontAwesome";

export default function PostCard({ item, width, navigation }) {
  return (
    <View style={[styles.postCard, { width: width * 0.85 }]}>
      <View style={styles.cardHeader}>
        <Text style={styles.postTitle}>
          {capitalizeFirstLetter(item.title)}
        </Text>
      </View>
      <Text style={styles.postBody}>{item.body.replace("\n", "")}</Text>
      <TouchableOpacity
        style={styles.commentButton}
        onPress={() => navigation.navigate("Comments", { postId: item.id })}
      >
        <Text>
          <Icon name="comment-o" size={20} color="#fc0394" />
          <Text style={styles.commentButtonText}> Ver comentarios</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  postCard: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    backgroundColor: "#fc0394",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#fff",
    height: 40,
  },
  postBody: {
    fontSize: 16,
    color: "#0007",
    fontWeight: "300",
    textAlign: "justify",
    padding: 15,
  },
  commentButton: {
    padding: 10,
    borderColor: "#fc0394",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    margin: 10,
  },
  commentButtonText: {
    fontSize: 12,
    color: "#fc0394",
    fontWeight: "500",
  },
});
