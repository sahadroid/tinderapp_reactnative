import React from "react";
import SwipeCards from "react-native-swipe-cards";
import Card from "../components/organisms/Card";
import NoMoreCards from "../components/molecules/NoMoreCards";
import { View, Text } from "react-native";

import { useQuery, useMutation } from "react-query";
import ApiService from "../services/api";

const ReviewScreen = () => {
  const { isLoading, isError, data, error } = useQuery(
    "data",
    ApiService.fetchData
  );

  if (isLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  if (isError)
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );

  const handleYup = (key) => {
    const obj = {};
    obj.people_id = key.id;
    obj.picture = "like";
    ApiService.reviewPicture(obj)
      .then((response) => {
        console.log("successfull");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleNope = (key) => {
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
  };

  return (
    <View style={{ flex: 1 }}>
      <SwipeCards
        cards={data}
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYup={handleYup}
        handleNope={handleNope}
      />
    </View>
  );
};

export default ReviewScreen;
