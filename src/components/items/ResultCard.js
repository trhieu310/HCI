import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import * as theme from '../../constants/theme';
import baker from '../../Icons/baker.jpg';
import speaker from '../../Icons/sound_playing.png';

const ResultCard = ({image, icon, word, typeWord, mean, example}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image style={styles.image} source={image ? image : baker} />
      </View>
      <View style={styles.viewContent}>
        <View style={styles.viewWord}>
          <Text style={styles.textWord}>{word ? word : 'Vocab'}</Text>
          <Text style={styles.textType}>({typeWord ? typeWord : 'v'})</Text>
        </View>
        <Text style={styles.textMean}>{mean ? mean : 'mean word'}</Text>
        <Text style={styles.textExample}>
          {example
            ? example
            : 'This place that using for display example for the vocabulary'}
        </Text>
      </View>
      <View style={styles.viewIcon}>
        <Image style={styles.icon} source={icon ? icon : speaker} />
      </View>
    </View>
  );
};

export default ResultCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 120,
    height: 85,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.COLOR.LIGHT_GRAY,
  },
  viewImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: 60,
    height: 60,
    borderRadius: 30,
  },
  viewContent: {
    flex: 6,
    justifyContent: 'center',
  },
  viewWord: {
    flex: 1,
    flexDirection: 'row',
  },
  textWord: {
    fontWeight: 'bold',
  },
  textType: {
    paddingLeft: 7,
    color: theme.COLOR.GRAY,
  },
  textMean: {
    flex: 1,
    color: theme.COLOR.GRAY,
  },
  textExample: {
    flex: 2,
  },
  viewIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    maxWidth: 35,
    height: 35,
    borderRadius: 18,
  },
});
