import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import InputText from '../reuse/inputText';
import TopNavigation from '../reuse/topNavigation';
import VOCA from '../reuse/voca';
import * as global from '../../constants/global';
import ClickButton from '../reuse/clickButton';
import createAccount from './createAccount';
import {createStackNavigator} from '@react-navigation/stack';

const {width, height} = Dimensions.get('screen');

const Stack = createStackNavigator();

const mainLogin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TopNavigation
          navigation={navigation}
          screen={() => navigation.navigate('Start')}
          name="Đăng nhập"
          icon={global.image.back_img}
        />
      </View>
      <View style={styles.body}>
        <VOCA />
        <InputText placeholder="Email" />
        <InputText placeholder="Password" />
        <View style={styles.btn_login}>
          <ClickButton
            screen={() => navigation.navigate('Main')}
            text="Đăng nhập"
            backgroundColor={global.colors.white}
            color={global.colors.background}
            fontSize={24}
            height={height * 0.06}
            width={width * 0.535}
            radius={30}
          />
          <Text style={styles.text}>- Đăng nhập nhanh -</Text>
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
          screen={() => navigation.navigate('createAccount')}
          text="Tạo tài khoản"
          color={global.colors.white}
          fontSize={24}
        />
        <ClickButton
          text="Quên mật khẩu"
          color={global.colors.white}
          fontSize={24}
        />
      </View>
    </View>
  );
};

const Login = () => {
  return (
    <Stack.Navigator initialRouteName="Đăng nhập">
      <Stack.Screen
        name="Đăng nhập"
        component={mainLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tạo tài khoản"
        component={createAccount}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
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
    height: height * 0.08,
    paddingTop: height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  botbtn: {
    height: height * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
});

export default Login;
