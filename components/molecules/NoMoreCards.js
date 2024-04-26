import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoMoreCards = () => {
  return (
    <View style={styles.container}>
      <Text>No more cards available</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoMoreCards;
