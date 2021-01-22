import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const {width, height} = Dimensions.get('screen');

const Word = ({image, prep, mean}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <Text>{prep}</Text>
      <Text>{mean}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: width * 0.3,
    width: width * 0.3,
    borderRadius: 5,
    borderColor: '#43BEDA',
    paddingVertical: height * 0.036,
  },
  prep: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: height * 0.03,
  },
  mean: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: height * 0.03,
  },
});

export default Word;
