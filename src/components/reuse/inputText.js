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
    height: height * 0.06,
    width: width - width * 0.158,
    marginVertical: 10,
  },
  Input: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default InputText;
