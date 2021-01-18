import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Account from './mainScreen/Personal';
import Library from './mainScreen/Library';
import Noti from './mainScreen/Notification';
import Me from './mainScreen/Me';
import Missions from './mainScreen/Missions';
import * as theme from '../../constants/theme'

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Personal"
      tabBarOption={
        {
          activeTintColor: '#157cdb',
          inactiveTintColor: '#262626',
        }
      }
    >
      <Tab.Screen name="Personal" options={{tabBarLabel: 'Cá nhân'}} component={Account} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Noti" component={Noti} />
      <Tab.Screen name="Me" component={Me} />
      <Tab.Screen name="Missions" component={Missions} />
    </Tab.Navigator>
  );
};

export default Main;
