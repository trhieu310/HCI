/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Start from './src/components/start/Start';
import Login from './src/components/login/Login';
import Main from './src/components/main/Main';
import MenuPersonal from './src/components/main/mainScreen/MenuPersonal';
import BestSelling from './src/components/main/mainScreen/LibraryScreen/BestSelling';
import StartLearn from './src/components/main/learn/StartLearn';
import NavHeader from './src/components/items/NavHeader';
import VocaVip from './src/components/main/mainScreen/LibraryScreen/VocaVip';
import LearnNavigation from './src/components/main/learn/LearnNavigation';
import CreateAccount from './src/components/login/createAccount';
import AccountManagement from './src/components/main/mainScreen/PersonalScreen/AccountManagement';
import PinWord from './src/components/main/mainScreen/PersonalScreen/PinWord';
import RankList from './src/components/main/mainScreen/PersonalScreen/RankList';
import ElevatorArchive from './src/components/main/mainScreen/PersonalScreen/ElevatorArchive';
import Result from './src/components/main/learn/Result';

StatusBar.setHidden(true);

const Stack = createStackNavigator();
const AccStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const LoginStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{headerShown: false}}>
        {() => (
          <AccStack.Navigator initialRouteName="MainPersonal">
            <AccStack.Screen
              name="MainPersonal"
              component={Main}
              options={{headerShown: false}}
            />
            <AccStack.Screen
              name="MenuPersonal"
              component={MenuPersonal}
              options={{headerShown: false}}
            />
            <AccStack.Screen
              name="BestSelling"
              component={BestSelling}
              options={{headerShown: false}}
            />
            <AccStack.Screen
              name="LearnNavigation"
              component={LearnNavigation}
              options={{headerShown: false}}
            />
            <AccStack.Screen
              name="VocaVip"
              component={VocaVip}
              options={{headerShown: false}}
            />
          </AccStack.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen
        name="StartLearn"
        component={StartLearn}
        options={{
          header: ({navigation, route}) => {
            return (
              <NavHeader
                back
                title="LET'S GO"
                navigation={navigation}
                route={route}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="AccountManagement"
        component={AccountManagement}
        options={{
          header: ({navigation, route}) => {
            return (
              <NavHeader
                back
                title="Quản lý tài khoản"
                navigation={navigation}
                route={route}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="PinWord"
        component={PinWord}
        options={{
          header: ({navigation, route}) => {
            return (
              <NavHeader
                back
                title="Từ vựng đã ghim"
                navigation={navigation}
                route={route}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="RankList"
        component={RankList}
        options={{
          header: ({navigation, route}) => {
            return (
              <NavHeader
                back
                title="Bảng xếp hạng"
                navigation={navigation}
                route={route}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="ElevatorArchive"
        component={ElevatorArchive}
        options={{
          header: ({navigation, route}) => {
            return (
              <NavHeader
                back
                title="Thang trình độ"
                navigation={navigation}
                route={route}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Result"
        component={Result}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Start"
        drawerStyle={{
          width: 280,
          paddingHorizontal: 0,
        }}>
        <Drawer.Screen name="Start" component={StartStack} />
        <Drawer.Screen name="Login" component={LoginStack} />
        <Drawer.Screen name="Main" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
//yarn run lint --fix
