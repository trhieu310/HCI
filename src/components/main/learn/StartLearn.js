import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Summary from './ScreenStartLearn/Summary';
import Rank from './ScreenStartLearn/Rank';
import Topic from './ScreenStartLearn/Topic';
import FinalTest from '../../main/learn/FinalTest/FinalTest';
import * as theme from '../../../constants/theme';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const StartLearn = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="BestSell">
      <Stack.Screen name="BestSell" options={{headerShown: false}}>
        {() => (
          <Tab.Navigator
            style={styles.tabTop}
            initialRouteName="Summary"
            tabBarOptions={{
              activeTintColor: theme.COLOR.WHITE,
              inactiveTintColor: '#eeeeee',
              labelStyle: {fontSize: 16, fontWeight: 'bold'},
              style: {backgroundColor: theme.COLOR.BLUE},
              tabStyle: {borderWidth: 1, borderColor: theme.COLOR.WHITE},
            }}>
            <Tab.Screen
              name="Summary"
              component={Summary}
              options={{
                tabBarLabel: 'Tổng quan',
              }}
            />
            <Tab.Screen
              name="Topic"
              component={Topic}
              options={{
                tabBarLabel: 'Chủ đề',
              }}
            />
            <Tab.Screen
              name="Rank"
              component={Rank}
              options={{
                tabBarLabel: 'Xếp hạng',
              }}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen
        name="FinalTest"
        component={FinalTest}
        options={{headerShown: false}}
        style={styles.FinalTest}
      />
    </Stack.Navigator>
  );
};

export default StartLearn;

const styles = StyleSheet.create({
  tabTop: {
    // marginTop: theme.SIZES.NAHEADER_HEIGHT
    marginHorizontal: 10,
    marginVertical: 7,
    borderRadius: 35,
    backgroundColor: theme.COLOR.WHITE,
  },
});
