import React from "react";
import { View, Text } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";

import MainTemplate from "../components/templates/MainTemplate";
import ReviewScreen from "../pages/ReviewScreen";

const queryClient = new QueryClient();
const HomeScreen = () => {
  return (
    <MainTemplate>
      <QueryClientProvider client={queryClient}>
        <ReviewScreen />
      </QueryClientProvider>
    </MainTemplate>
  );
};

export default HomeScreen;
