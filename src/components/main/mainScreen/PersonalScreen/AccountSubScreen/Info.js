import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputText from '../../../../reuse/inputText';
import * as theme from '../../../../../constants/theme';
import ClickButton from '../../../../reuse/clickButton';

const Info = ({navigation, route}) => {
  const userInfo = {
    name: 'My Linh',
    phone: '0651816546',
    email: 'mylinh@example.com',
    gender: 'Female',
    address: 'Ngo Gia Tu',
  };
  return (
    <View style={styles.container}>
      <InputText placeholder={userInfo.name} />
      <InputText placeholder={userInfo.phone} />
      <InputText placeholder={userInfo.email} />
      <InputText placeholder={userInfo.gender} />
      <InputText placeholder={userInfo.address} />

      {/* <ClickButton /> */}
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: theme.COLOR.WHITE,
  },
});
