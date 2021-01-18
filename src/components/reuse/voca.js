import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Voca = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.voca}>VOCA</Text>
      <Text style={styles.slogan}>LEARN BY HEART</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginBottom: 40,
    alignItems: 'center',
  },
  voca: {
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
  },
  slogan: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
});

export default Voca;
