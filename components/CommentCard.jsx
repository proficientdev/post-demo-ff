import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { capitalizeFirstLetter } from "../utils/capitalize";

export default function CommentCard({ item, width }) {
  return (
    <View style={[styles.card, { width: width * 0.85 }]}>
      <View>
        <View style={styles.cardHeader}>
          <Text style={{ color: "#fff", fontWeight: "700" }}>
            {(item.name.charAt(0) + item.name.charAt(1)).toUpperCase()}
          </Text>
        </View>
      </View>
      <View style={styles.comment}>
        <Text style={styles.title}>{capitalizeFirstLetter(item.name)}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.body}>{item.body.replace("\n", "")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    flexDirection: "row",

    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 10,
  },
  body: {
    fontSize: 12,
    color: "#0006",
    textAlign: "justify",
  },
  email: {
    color: "#fc0394",
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  comment: {
    marginLeft: 10,
    width: "80%",
  },
  cardHeader: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#fc0394",
    justifyContent: "center",
    alignItems: "center",
  },
});
