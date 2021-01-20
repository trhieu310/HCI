import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import * as theme from '../../../constants/theme';

const {height} = Dimensions.get('window');

const MenuPersonal = () => {
  return (
    <View style={styles.container}>
      <Text>Luong Khac Tuan Anh</Text>
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
