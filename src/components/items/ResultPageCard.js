import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as theme from '../../constants/theme';
import story from '../../Icons/story.png';

const ResultPageCard = (props) => {
  const {image, text, time} = props;
  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image style={styles.image} source={image ? image : story} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}>{text ? text : 'None'}</Text>
      </View>
      <View style={styles.viewNumber}>
        <Text style={styles.number}>{time ? time : '0'} s</Text>
      </View>
    </View>
  );
};

export default ResultPageCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: 4,
  },
  viewImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: 40,
    height: 35,
  },
  viewText: {
    flex: 9,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  text: {
    fontSize: 18,
  },
  viewNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 18,
  },
});
