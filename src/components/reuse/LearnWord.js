import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import NavProgressBar from '../reuse/NavProgressBar';
import Word from '../reuse/Word';
import BotChooser from '../reuse/BotChooser';

const LearnWord = ({image, prep, mean, answer1, answer2, answer3, answer4}) => {
  return (
    <View style={styles.container}>
      <NavProgressBar fault right number />
      <View style={styles.body}>
        <Word image={image} prep={prep} mean={mean} />
      </View>
      <View style={styles.bottom}>
        <BotChooser
          answer1={answer1}
          answer2={answer2}
          answer3={answer3}
          answer4={answer4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    height: '47%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LearnWord;
