import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ name, age, picture, location }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: picture }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>
          {name}, {age}
        </Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 20,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  details: {
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  location: {
    fontSize: 16,
    color: "#666",
  },
});

export default Card;
