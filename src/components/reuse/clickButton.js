/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

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
      style={{
        backgroundColor: backgroundColor,
      }}>
      <TouchableOpacity
        onPress={screen}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 8,
          flexDirection: 'row',
        }}>
        <Image source={image} style={{paddingTop: 6}} />
        <Text style={{fontSize: fontSize, color: color, paddingLeft: 10}}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClickButton;
