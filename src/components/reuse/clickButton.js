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
      style={{backgroundColor: backgroundColor}}>
      <TouchableOpacity onPress={screen}>
        <Image source={image} />
        <Text style={{fontSize: fontSize, color: color}}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClickButton;
