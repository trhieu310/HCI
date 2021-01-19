import React from 'react';
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native';
import ClickButton from '../reuse/clickButton';
import * as global from '../../constants/global';

const {height} = Dimensions.get('window');

const TopNavigation = ({navigation, screen, name, icon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backbtn}>
          <ClickButton screen={screen} image={icon} width={20} height={20} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Image />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.08,
  },
  header: {
    paddingTop: 10,
    alignContent: 'center',
    flex: 82,
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: global.colors.backgroundColor,
  },
  backbtn: {
    alignItems: 'flex-start',
  },
  name: {
    color: global.colors.white,
    fontSize: 24,
  },
});

export default TopNavigation;
