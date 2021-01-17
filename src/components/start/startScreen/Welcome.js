import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.voca}>VOCA</Text>
      <Text style={styles.slogan}>LEARN BY HEART</Text>
      {/* <Image source={require('../../../Icons/star.png')} style={styles.star1} /> */}
      <Image
        source={require('../../../Icons/icon_intro_1.png')}
        style={styles.image}
      />
      <Text style={styles.botText}>GOOD EVENING!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  star1: {
    height: 15,
    width: 15,
    paddingTop: 20,
    paddingLeft: 10,
  },
  voca: {
    color: '#fff',
    fontSize: 64,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  slogan: {
    fontSize: 20,
    color: '#fff',
  },
  image: {
    width: width * 0.73,
    height: height * 0.36,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botText: {
    marginTop: 50,
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default Welcome;
