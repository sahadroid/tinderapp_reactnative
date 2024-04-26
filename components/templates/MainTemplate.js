import React from 'react';
import { View, StyleSheet } from 'react-native';
//import NavigationHeader from '../organisms/NavigationHeader';

const MainTemplate = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

export default MainTemplate;
