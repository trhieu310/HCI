import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import Account from './mainScreen/Personal';
import Library from './mainScreen/Library';
import Noti from './mainScreen/Notification';
import Me from './mainScreen/Me';
import Missions from './mainScreen/Missions';
import * as theme from '../../constants/theme';
import perImg from '../../Icons/icon_account.png';
import libImg from '../../Icons/icon_library.png';
import meImg from '../../Icons/icon_me.png';
import notImg from '../../Icons/icon_notification.png';
import misImg from '../../Icons/icon_task.png';

import perImgActive from '../../Icons/icon_account_active.png';
import libImgActive from '../../Icons/icon_library_active.png';
import meImgActive from '../../Icons/icon_me_active.png';
import notImgActive from '../../Icons/icon_notification_active.png';
import misImgActive from '../../Icons/icon_task_active.png';

const Tab = createBottomTabNavigator();

const Main = ({navigation}) => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <Tab.Navigator
      initialRouteName="Personal"
      tabBarOption={{
        activeTintColor: '#157cdb',
        inactiveTintColor: '#262626',
      }}>
      <Tab.Screen
        name="Personal"
        options={{
          tabBarLabel: 'Cá nhân',
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.iconStyle}
              source={focused ? perImgActive : perImg}
            />
          ),
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        component={Account}
      />
      <Tab.Screen
        name="Library"
        options={{
          tabBarLabel: 'Thư viện',
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.iconStyle}
              source={focused ? libImgActive : libImg}
            />
          ),
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        component={Library}
      />
      <Tab.Screen
        name="Noti"
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.iconStyle}
              source={focused ? notImgActive : notImg}
            />
          ),
          transitionSpec: {
            open: config,
            close: config,
          },
          tabBarBadge: 0,
        }}
        component={Noti}
      />
      <Tab.Screen
        name="Me"
        options={{
          tabBarLabel: 'Me',
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.iconStyle}
              source={focused ? meImgActive : meImg}
            />
          ),
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        component={Me}
      />
      <Tab.Screen
        name="Missions"
        options={{
          tabBarLabel: 'Nhiệm vụ',
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.iconStyle}
              source={focused ? misImgActive : misImg}
            />
          ),
          transitionSpec: {
            open: config,
            close: config,
          },
          tabBarBadge: 2,
        }}
        component={Missions}
      />
    </Tab.Navigator>
  );
};

export default Main;
const styles = StyleSheet.create({
  iconStyle: {
    maxWidth: 20,
    height: 20,
  },
});
