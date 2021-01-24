import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import iconS from '../../Icons/search_icon.png';

const {height, width} = Dimensions.get('screen');

const Screen_LearnNew = ({icon, numstep, title, text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.step}>{numstep}</Text>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={icon ? icon : iconS} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Screen_LearnNew;

const styles = StyleSheet.create({
  container: {
    width: width * 0.87,
    height: height * 0.42,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  step: {
    fontSize: 18,
    paddingTop: 0,
    paddingBottom: height * 0.012,
  },
  title: {
    fontSize: 20,
    color: '#34B6DD',
    fontWeight: 'bold',
  },
  image: {
    marginBottom: 20,
    maxWidth: 120,
    maxHeight: 120,
    paddingVertical: height * 0.024,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: height * 0.024,
    color: '#909090',
  },
});
