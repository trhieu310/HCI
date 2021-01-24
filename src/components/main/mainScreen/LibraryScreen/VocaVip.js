import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import NavHeader from '../../../items/NavHeader';
import Combo from '../../../items/Combo';
import MemberVip from '../../../items/MemberVip';

const {width, height} = Dimensions.get('window');

const VocaVip = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <NavHeader back title="VOCA V.I.P" navigation={navigation} route={route} />
      <Text styles={styles.topText}>Hãy chọn gói từ vựng muốn học</Text>
      <ScrollView styles={styles.FlatList}>
        <Combo
          title="VOCABULARY VIP PLUS"
          subtitle="Học trong suốt  thời gian 2 năm."
          price="74.958 đ/tháng"
          seemore="Xem chi tiết"
          bg_btn={'#F5CC0D'}
          nummem="9535"
        />
        <Combo
          title="VOCABULARY VIP"
          subtitle="Học trong suốt  thời gian 1 năm."
          price="99.916 đ/tháng"
          seemore="Xem chi tiết"
          bg_btn={'#55E830'}
          nummem="17620"
        />
        <Text style={styles.botText}>CỘNG ĐỒNG SINH VIÊN VIP</Text>
        <View style={styles.vip}>
          <MemberVip
            name="Tử Bất Vong"
            fontSize={14}
            image={require('../../../../Icons/icon_card_introduce_seven_1.png')}
          />
          <MemberVip
            name="Trần Đình Toản"
            fontSize={14}
            image={require('../../../../Icons/icon_card_introduce_seven_3.png')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
  },
  FlatList: {
    marginHorizontal: width * 0.05,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  botText: {
    fontSize: 24,
    color: '#410D0D',
    fontWeight: 'bold',
    marginVertical: height * 0.02,
    textAlign: 'center',
  },
  vip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default VocaVip;
