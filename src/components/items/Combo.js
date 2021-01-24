import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import ClickButton from '../reuse/clickButton';

const {width, height} = Dimensions.get('window');

const Combo = ({title, subtitle, price, seemore, nummem, bg_btn}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.seemore}>{seemore}</Text>
      <ClickButton
        text="Nâng cấp ngay"
        backgroundColor={bg_btn}
        color="#fff"
        fontSize={18}
        height={height * 0.05}
        width={width * 0.7}
        radius={30}
      />
      <Text style={styles.subtitle}>({nummem}+ thành viên đăng ký)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: width * 0.87,
    height: height * 0.28,
    marginVertical: height * 0.01,
  },
  title: {
    fontSize: 22,
    paddingTop: height * 0.02,
  },
  subtitle: {
    fontSize: 14,
    color: '#968C8C',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: height * 0.012,
  },
  button: {
    marginVertical: height * 0.015,
  },
  seemore: {
    fontSize: 14,
    color: '#6EBCCD',
  },
});

export default Combo;
