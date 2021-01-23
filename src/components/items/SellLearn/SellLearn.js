import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import BestSelling from '../../main/mainScreen/LibraryScreen/BestSelling';
import FinalTest from '../../main/learn/FinalTest/FinalTest';

const Stack = createStackNavigator();

const SellLearn = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="BestSelling">
      <Stack.Screen
        name="BestSelling"
        component={BestSelling}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FinalTest"
        component={FinalTest}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default SellLearn;
