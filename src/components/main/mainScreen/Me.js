import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import NavHeader from '../../items/NavHeader';
import Swiper from 'react-native-swiper';
import * as theme from '../../../constants/theme';
import Screen_1 from './MeScreen/Screen_1';
import {ListMeScreen} from '../../../constants/listMeScreen';

const Me = ({navigation, route}) => {
  const renderListMeScreen = () => {
    if (ListMeScreen.length > 0) {
      var rs = null;
      rs = ListMeScreen.map((btn) => {
        return <Screen_1 key={btn.text} text={btn.text} icon={btn.icon} />;
      });
      return rs;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <NavHeader title="Me" navigation={navigation} route={route} user />
      <View style={styles.viewTop}>
        <Text style={styles.textHightLight}>Lưu ý về ME</Text>
        <Text style={styles.textTop}>Những điều cần lưu ý về điểm ME</Text>
      </View>
      <View style={styles.swiper}>
        <Swiper
          activeDotColor={theme.COLOR.LIGHT_BLUE}
          autoplay={false}
          loop={false}
          showPagination={true}
          direction={'row'}>
          {renderListMeScreen()}
        </Swiper>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push('Library')}>
          <Text style={styles.textButton}>Vào thư viện</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLOR.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHightLight: {
    fontSize: 24,
    color: theme.COLOR.LIGHT_BLUE,
  },
  textTop: {
    fontSize: 15,
  },
  swiper: {
    flex: 3,
  },
  viewButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 180,
    height: 50,
    backgroundColor: theme.COLOR.LIGHT_BLUE,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.COLOR.WHITE,
  },
});

export default Me;
