import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Account from './mainScreen/Personal';
import Library from './mainScreen/Library';
import Noti from './mainScreen/Notification';
import Me from './mainScreen/Me';
import Missions from './mainScreen/Missions';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      tabBarOption={{
        activeTintColor: '#157cdb',
        inactiveTintColor: '#262626',
      }}>
      <Tab.Screen name="Cá nhân" component={Account} />
      <Tab.Screen name="Thư viện" component={Library} />
      <Tab.Screen name="Thông báo" component={Noti} />
      <Tab.Screen name="Me" component={Me} />
      <Tab.Screen name="Nhiệm vụ" component={Missions} />
    </Tab.Navigator>
  );
};

export default Main;
