import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import NavHeader from '../../../items/NavHeader';
import Combo from '../../../items/Combo';
import MemberVip from '../../../items/MemberVip';

const {width, height} = Dimensions.get('window');

const VocaVip = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavHeader back title="VOCA V.I.P" />
      <FlatList styles={styles.FlatList}>
        <Text styles={styles.topText}>Hãy chọn gói từ vựng muốn học</Text>
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
      </FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  FlatList: {
    marginHorizontal: width * 0.05,
    alignItems: 'center',
  },
  topText: {
    fontSize: 22,
    marginVertical: height * 0.036,
  },
  botText: {
    fontSize: 24,
    color: '#410D0D',
    fontWeight: 'bold',
    marginVertical: height * 0.036,
  },
});

export default VocaVip;
