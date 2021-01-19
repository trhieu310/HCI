import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const {height} = Dimensions.get('window');

const Avatar = ({image, name, fontSize, textcolor}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={{fontSize: fontSize, color: textcolor}}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    alignSelf: 'center',
    height: height * 0.1,
    width: height * 0.1,
    resizeMode: 'contain',
    borderRadius: (height * 0.1) / 2,
  },
});

export default Avatar;
