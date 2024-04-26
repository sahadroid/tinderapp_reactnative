import React, { useRef } from 'react';
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import Card from '../molecules/Card';
import Button from '../atoms/Button';

const cards = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    pictures: ['https://img.freepik.com/free-photo/real-people-natural-portrait-happy-guy-smiling-laughing-looking-upbeat-camera-standing-glasses-white-background_1258-65662.jpg?t=st=1714045351~exp=1714048951~hmac=f38443fccfd9a7a598d4d5b7ea7e1f17663db57da23373ae153c1633cd229856&w=1380', 'url2', 'url3'],
    location: 'New York',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 28,
    pictures: ['url4', 'url5', 'url6'],
    location: 'Los Angeles',
  },
  // Add more cards as needed
];


const CardStack = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y }
      ]),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > 120) {
          // Swipe right, like action
          handleLike();
        } else if (gestureState.dx < -120) {
          // Swipe left, nope action
          handleNope();
        } else {
          // Return card to original position
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start();
        }
      }
    })
  ).current;

  const handleLike = () => {
    // Add logic for handling like
    console.log("Like");
    resetCardPosition();
  };

  const handleNope = () => {
    // Add logic for handling nope
    console.log("Nope");
    resetCardPosition();
  };

  const resetCardPosition = () => {
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      friction: 4
    }).start();
  };

  const rotateCard = () => {
    const rotate = pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    });

    return {
      transform: [{ rotate }]
    };
  };

  return (
    <View style={styles.container}>
      {profiles.map((profile, index) => {
        if (index === 0) {
          return (
            <Animated.View
              key={profile.id}
              {...panResponder.panHandlers}
              style={[styles.card, rotateCard(), pan.getLayout()]}
            >
              <Card profile={profile} />
            </Animated.View>
          );
        }
        return null;
      })}
      <View style={styles.buttonsContainer}>
        <Button title="Like" onPress={handleLike} />
        <Button title="Nope" onPress={handleNope} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    position: 'absolute',
    width: '80%',
    height: '60%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default CardStack;
