import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import NextActive from '../../Icons/learning_next.png';
import NextDisable from '../../Icons/learning_next_disable.png';
import PrevActive from '../../Icons/learning_prev.png';
import PrevDisable from '../../Icons/learning_prev_disable.png';

const {width, height} = Dimensions.get('screen');

const Btn = ({name}) => {
  <TouchableOpacity style={styles.click}>
    <Text style={styles.question}>{name}</Text>
  </TouchableOpacity>;
};

const BotChooser = ({answer1, answer2, answer3, answer4}) => {
  return (
    <View style={styles.container}>
      <View style={styles.borderquest}>
        <Text style={styles.question}>Bạn đoán xem từ vựng đó là gì?</Text>
      </View>
      <Btn name={answer1} />
      <Btn name={answer2} />
      <Btn name={answer3} />
      <Btn name={answer4} />
      <View style={styles.bottom}>
        <Image source={PrevActive} style={styles.lefticon} />
        <TouchableOpacity style={styles.botclick}>
          <Text style={styles.suggest}>Thêm gợi ý</Text>
        </TouchableOpacity>
        <Image source={NextActive} style={styles.righticon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '45%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderquest: {
    width: width * 0.8,
    height: height * 0.06,
    marginVertical: 10,
    backgroundColor: '#FFE8DA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 20,
  },
  click: {
    width: width * 0.8,
    height: height * 0.05,
    borderRadius: (height * 0.05) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderColor: '#EEEEEE',
    borderWidth: 1,
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lefticon: {
    width: width * 0.1,
    height: width * 0.1,
    marginHorizontal: width * 0.05,
  },
  righticon: {
    width: width * 0.1,
    height: width * 0.1,
    marginHorizontal: width * 0.05,
  },
  botclick: {
    height: height * 0.05,
    width: width * 0.55,
    backgroundColor: '#86C821',
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggest: {
    fontSize: 20,
    color: '#fff',
  },
});
export default BotChooser;
