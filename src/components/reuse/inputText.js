import React from 'react';
import {View, StyleSheet, TextInput, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const InputText = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.Input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.066,
    minHeight: 55,
    width: width - width * 0.158,
    paddingTop: 15
  },
  Input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 12,
    fontSize: 16
  },
});

export default InputText;
