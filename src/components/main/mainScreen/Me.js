import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import NavHeader from '../../items/NavHeader';

const Me = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <NavHeader back title="Me" navigation={navigation} route={route} user />

      <ScrollView style={styles.content}>
        <Text>Me</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52BEE5',
  },
  content: {
    flex: 1,
  },
});

export default Me;
