import React from 'react';
import {View, StyleSheet, Text, Dimensions, Alert} from 'react-native';
import InputText from '../reuse/inputText';
import TopNavigation from '../reuse/topNavigation';
import VOCA from '../reuse/voca';
import * as global from '../../constants/global';
import ClickButton from '../reuse/clickButton';

const {width, height} = Dimensions.get('window');

const createAccount = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TopNavigation
          navigation={navigation}
          screen={() => navigation.goBack()}
          name="Tạo tài khoản"
          icon={global.image.back_img}
        />
      </View>
      <View style={styles.body}>
        <VOCA />
        <InputText placeholder="Name" />
        <InputText placeholder="Email" />
        <InputText placeholder="Password" />
        <View style={styles.btn_login}>
          <ClickButton
            screen={() => Alert.alert('Đăng ký thành công')}
            text="Đăng ký thành viên"
            backgroundColor={global.colors.white}
            color={global.colors.background}
            fontSize={24}
            height={height * 0.06}
            width={width * 0.65}
            radius={30}
          />
          <Text style={styles.text}>- Tạo nhanh -</Text>
        </View>
      </View>
      <View style={styles.fast_login}>
        <ClickButton
          image={require('../../Icons/search.png')}
          text="GMAIL"
          backgroundColor={global.colors.white}
          fontSize={18}
          width={width * 0.4}
          height={height * 0.06}
          radius={30}
        />
        <ClickButton
          image={require('../../Icons/facebook.png')}
          text="FACEBOOK"
          backgroundColor={global.colors.white}
          fontSize={18}
          width={width * 0.4}
          height={height * 0.06}
          radius={30}
        />
      </View>
      <View style={styles.botbtn}>
        <ClickButton
          screen={() => navigation.goBack()}
          text="Đăng nhập"
          color={global.colors.white}
          fontSize={24}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.colors.background,
  },
  body: {
    alignItems: 'center',
  },
  btn_login: {
    alignItems: 'center',
    paddingTop: height * 0.04,
  },
  text: {
    paddingTop: height * 0.05,
    fontSize: 20,
    color: global.colors.white,
    alignItems: 'center',
  },
  fast_login: {
    paddingTop: height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginLeft: 20,
    marginRight: 20,
  },
  botbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});

export default createAccount;
