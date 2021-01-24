import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavHeader from '../../../items/NavHeader';
import Swiper from 'react-native-swiper';
import * as theme from '../../../../constants/theme';
import Screen_1 from '../../../main/mainScreen/MeScreen/Screen_1';
import {ListFinalTest} from '../../../../constants/listFinalTest';

const FinalTest = ({navigation, route}) => {
  const renderListFinalTest = () => {
    if (ListFinalTest.length > 0) {
      var rs = null;
      rs = ListFinalTest.map((btn) => {
        return <Screen_1 key={btn.text} text={btn.text} icon={btn.icon} />;
      });
      return rs;
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <NavHeader
        title="BÀI KIỂM TRA TỔNG KẾT"
        navigation={navigation}
        back
        right
        user
        style={styles.header}
      />
      <View style={styles.viewTop}>
        <Text style={styles.textHightLight}>Nội dung phòng thi</Text>
        <Text style={styles.textTop}>
          Dưới đây là những điều cần chú ý trước khi bắt đầu kiểm tra
        </Text>
      </View>
      <View style={styles.swiper}>
        <Swiper
          activeDotColor={theme.COLOR.LIGHT_BLUE}
          autoplay={false}
          loop={false}
          showPagination={true}
          direction={'row'}>
          {renderListFinalTest()}
        </Swiper>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('KnowWord1')}>
          <Text style={styles.textButton}>Sẵn sàng</Text>
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
export default FinalTest;
