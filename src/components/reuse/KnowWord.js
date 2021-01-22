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
import sound from '../../Icons/sound_not_play.png';

const {width, height} = Dimensions.get('screen');

const KnowWord = ({navigation, word1, word2, word3, number}) => {
  return (
    <View style={styles.container}>
      <NavProgressBar back right user number={number} navigation={navigation} />
      <View style={styles.body}>
        <View style={styles.border}>
          <Text style={styles.mainword}>{word1}</Text>
          <Text style={styles.midword}>{word2}</Text>
          <Image source={sound} style={styles.image} />
          <Text style={styles.botword}>{word3}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.question}>Bạn có biết từ này không?</Text>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.btn1}>
            <Text style={styles.text}>Biết</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn22}>
            <Text style={styles.text}>Không biết</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  border: {
    width: width * 0.87,
    height: height * 0.47,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.12,
    height: width * 0.12,
  },
  mainword: {
    fontSize: 24,
    color: '#14BBE2',
  },
  midword: {
    fontSize: 18,
    color: '#929292',
  },
  botword: {
    fontSize: 18,
  },
  bottom: {
    height: height * 0.17,
    flex: 1,
    position: 'absolute',
    bottom: 0,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    backgroundColor: '#00C5F9',
    borderRadius: (height * 0.06) / 2,
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  btn2: {
    backgroundColor: '#F46463',
    borderRadius: (height * 0.06) / 2,
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default KnowWord;
