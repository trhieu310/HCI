import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import iconDefault from '../../Icons/circle_bg.png';

const MainButton = ({
  navigation,
  route,
  icon,
  to = 'Personal',
  title,
  bgColor,
  right,
  iconBg,
  color,
}) => {
  const renderRight = () => {
    if (right != '') {
      return (
        <View style={styles.rightBadge}>
          <Text style={styles.textRightBadge}>{right}</Text>
        </View>
      );
    }
    return null;
  };
  return (
    <TouchableOpacity
      style={[styles.mainButton, {backgroundColor: bgColor}]}
      onPress={() => navigation.navigate(to ? to : 'Personal')}>
      <View
        style={[
          styles.viewLeftIcon,
          {backgroundColor: iconBg ? iconBg : 'transparent'},
        ]}>
        <Image style={styles.leftIcon} source={icon ? icon : iconDefault} />
      </View>
      <View style={styles.viewTitle}>
        <Text style={[styles.title, {color: color ? color : '#333'}]}>
          {title ? title : 'Title'}
        </Text>
      </View>
      {renderRight()}
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  mainButton: {
    maxHeight: 58,
    height: 58,
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 6,
    borderWidth: 2,
    borderRadius: 32,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewLeftIcon: {
    flex: 1,
    maxWidth: 45,
    height: 45,
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIcon: {
    maxWidth: 41,
    height: 41,
  },
  viewTitle: {
    marginLeft: 10,
    flex: 6,
  },
  title: {
    fontSize: 18,
  },
  rightBadge: {
    flex: 1,
  },
  textRightBadge: {
    fontSize: 18,
  },
});
