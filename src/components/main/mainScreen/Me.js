import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Me = () => {
  return (
    <View style={styles.container}>
      <Text>Me</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Me;
