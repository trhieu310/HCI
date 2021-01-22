/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ClickButton = ({
  screen,
  image,
  text,
  width,
  height,
  radius,
  color,
  backgroundColor,
  fontSize,
}) => {
  return (
    <View
      borderRadius={radius}
      width={width}
      height={height}
      style={[styles.container, {backgroundColor: backgroundColor}]}>
      <TouchableOpacity
        onPress={screen}
        style={styles.button}>
        {image && <View style={styles.viewIcon}>
          <Image source={image} style={styles.icon} />
        </View>}
        <View style={styles.viewText}>
          <Text style={{fontSize: fontSize, color: color}}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 8,
    flexDirection: 'row',
  },
  viewIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    maxWidth: 30
  },
  viewText: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ClickButton;
