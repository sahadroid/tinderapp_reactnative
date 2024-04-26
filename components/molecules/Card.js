import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ name, age, pictures, location }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pictures[0] }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}, {age}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Card;
