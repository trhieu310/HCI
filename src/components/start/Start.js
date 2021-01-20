import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';

import ClickButton from '../reuse/clickButton';
import * as global from '../../constants/global';

import Welcome from './startScreen/Welcome';
import Star1 from './startScreen/Star1';
import Star2 from './startScreen/Star2';
import Star3 from './startScreen/Star3';
import Star4 from './startScreen/Star4';
import Star5 from './startScreen/Star5';

const {height, width} = Dimensions.get('window');

const Start = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Swiper}>
        <Swiper
          activeDotColor={global.colors.white}
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
      <View style={styles.button}>
        <ClickButton
          screen={() => navigation.navigate('Login')}
          text="Bắt đầu ngay"
          backgroundColor={global.colors.white}
          color={global.colors.background}
          fontSize={24}
          height={height * 0.06}
          width={width * 0.48}
          radius={30}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: global.colors.background,
  },
  Swiper: {
    height: height - 100,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Start;
