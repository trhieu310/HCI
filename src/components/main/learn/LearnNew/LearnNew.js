import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavHeader from '../../../items/NavHeader';
import Swiper from 'react-native-swiper';
import * as theme from '../../../../constants/theme';
import Screen_LearnNew from '../../../reuse/Screen_LearnNew';
import {ListLearnNew} from '../../../../constants/listLearnNew';

const {height, width} = Dimensions.get('screen');

const FinalTest = ({navigation, route}) => {
  const renderListLearnNew = () => {
    if (ListLearnNew.length > 0) {
      var rs = null;
      rs = ListLearnNew.map((item) => {
        return (
          <Screen_LearnNew
            key={item.id}
            numstep={item.id}
            title={item.title}
            text={item.text}
            icon={item.icon}
          />
        );
      });
      return rs;
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <NavHeader title="LET'S GO" navigation={navigation} back right />
      <View style={styles.viewTop}>
        <Text style={styles.textTop}>Chào mừng bạn đến chủ đề</Text>
        <Text style={styles.textHightLight}>JOB</Text>
        <Text style={styles.textButt}>Bạn sẽ trải qua 3 bước</Text>
      </View>
      <View style={styles.swiper}>
        <Swiper
          activeDotColor={theme.COLOR.WHITE}
          autoplay={false}
          loop={false}
          showPagination={true}
          direction={'row'}>
          {renderListLearnNew()}
        </Swiper>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('KnowWord1')}>
          <Text style={styles.textButton}>HỌC NGAY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTop: {
    // height: height * 0.29,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: theme.COLOR.WHITE,
  },
  textTop: {
    fontSize: 10,
    color: theme.COLOR.WHITE,
    margin: width * 0.05,
    textAlign: 'center',
  },
  textButt: {
    fontSize: 21,
    color: theme.COLOR.WHITE,
    textAlign: 'center',
    height: height * 0.06,
    borderRadius: (height * 0.06) / 2,
    width: width * 0.78,
    borderColor: theme.COLOR.WHITE,
    borderWidth: 1,
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
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#32B2D6',
  },
});
export default FinalTest;
