import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Voca from '../../reuse/voca';

const {width, height} = Dimensions.get('window');

const Welcome = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Voca />
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
  voca: {
    color: '#fff',
    fontSize: 64,
  },
  slogan: {
    fontSize: 20,
    color: '#fff',
  },
  image: {
    width: width * 0.73,
    height: height * 0.36,
    marginTop: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botText: {
    marginTop: height * 0.06,
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default Welcome;
