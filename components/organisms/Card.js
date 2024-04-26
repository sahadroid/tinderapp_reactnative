import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ApiService from "../../services/api";

const Card = ({ id, name, age, picture, location }) => {
  const [liked, setLiked] = useState();

  useEffect(() => {
    setLiked(false);

  }, [id]);

  const handleLikePress = () => {
    setLiked(true)
    /*
    const obj = {};
    obj.people_id = key.id;
    obj.picture = "nope";
    ApiService.reviewPicture(obj)
      .then((response) => {
        console.log("successfull");
        
      })
      .catch((e) => {
        console.log(e);
      });    
    */
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: picture }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>
          {name}, {age}
        </Text>
        <Text style={styles.location}>{location}</Text>
      </View>
      <TouchableOpacity style={styles.like} onPress={handleLikePress}>
        {liked ? (
          <Image
            source={require("../../assets/like.png")}
            style={styles.icon}
          />
        ) : (
          <Image
            source={require("../../assets/unlike.png")}
            style={styles.icon}
          />
        )}
      </TouchableOpacity>
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
  icon: {
    width: 30,
    height: 30,
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
  like: {
    marginTop: 10,
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
