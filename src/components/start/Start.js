import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';

import Welcome from './startScreen/Welcome';
import Star1 from './startScreen/Star1';
import Star2 from './startScreen/Star2';
import Star3 from './startScreen/Star3';
import Star4 from './startScreen/Star4';
import Star5 from './startScreen/Star5';

import Swiper from 'react-native-swiper';

const {height, width} = Dimensions.get('window');

const Start = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Swiper}>
        <Swiper
          activeDotColor={'#fff'}
          autoplay={false}
          loop={false}
          showPagination={true}
          direction={'row'}>
          <Welcome />
          <Star1 />
          <Star2 />
          <Star3 />
          <Star4 />
          <Star5 />
        </Swiper>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Bắt đầu ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01B3F1',
  },
  Swiper: {
    height: height - 100,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    width: width * 0.48,
    height: height * 0.06,
  },
  btnText: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 24,
    color: '#00B2E5',
    textAlign: 'center',
  },
});

export default Start;
