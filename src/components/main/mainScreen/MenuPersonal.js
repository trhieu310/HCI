import React from 'react';
import {
  View,
  Button,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import * as theme from '../../../constants/theme';
import BackCard from '../../../Icons/menu_bg.png';

const {height, width} = Dimensions.get('screen');

const MenuPersonal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Luong Khac Tuan Anh</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLOR.LIGHT_GREEN,
  },
});

export default MenuPersonal;
