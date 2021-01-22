import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavHeader from '../../items/NavHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Summary from './ScreenStartLearn/Summary';
import Rank from './ScreenStartLearn/Rank';
import Topic from './ScreenStartLearn/Topic';
import * as theme from '../../../constants/theme';
const Tab = createMaterialTopTabNavigator();

const StartLearn = ({navigation, route}) => {
  return (
    <Tab.Navigator
      style={styles.tabTop}
      initialRouteName="Overview"
      tabBarOptions={{
        activeTintColor: theme.COLOR.WHITE,
        inactiveTintColor: '#eeeeee',
        labelStyle: {fontSize: 16, fontWeight: 'bold'},
        style: {backgroundColor: theme.COLOR.BLUE},
        tabStyle: {borderWidth: 1, borderColor: theme.COLOR.WHITE},
      }}>
      <Tab.Screen
        name="Overview"
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
  );
};

export default StartLearn;

const styles = StyleSheet.create({
  tabTop: {
    // marginTop: theme.SIZES.NAHEADER_HEIGHT
    marginHorizontal: 10,
    marginVertical: 7,
    borderRadius: 35,
    backgroundColor: theme.COLOR.WHITE
  },
});
