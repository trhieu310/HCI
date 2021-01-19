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
      <Text>{seemore}</Text>
      <ClickButton
        text="Nâng cấp ngay"
        backgroundColor={bg_btn}
        color="#fff"
        fontSize={18}
        height={height * 0.05}
        width={width * 0.7}
        radius={30}
        paddingVertical={height * 0.024}
      />
      <Text style={styles.memtext}>({nummem}+ thành viên đăng ký)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: width - width * 0.05,
    height: height * 0.28,
    marginVertical: height * 0.15,
  },
  title: {
    fontSize: 22,
    paddingTop: height * 0.02,
  },
  subtitle: {
    fontSize: 14,
    paddingTop: height * 0.02,
    color: '#968C8C',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: height * 0.012,
  },
  seemore: {
    fontSize: 14,
    color: '#6EBCCD',
  },
});

export default Combo;
