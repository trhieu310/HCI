import React from 'react';
// import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Start from './src/components/start/Start';
import Login from './src/components/login/Login';
import Main from './src/components/main/Main';
import NavHeader from './src/components/items/NavHeader';
import Personal from './src/components/main/mainScreen/Personal';
import Library from './src/components/main/mainScreen/Library';
import Me from './src/components/main/mainScreen/Me';
import Missions from './src/components/main/mainScreen/Missions';
import Notification from './src/components/main/mainScreen/Notification';
import * as theme from './src/constants/theme';

StatusBar.setHidden(true);

const Stack = createStackNavigator();
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
}

const LoginStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const MainStack = () => {
  return (
    
    <Stack.Navigator
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Start"
        drawerStyle={{
          width: 280,
          paddingHorizontal: 0
        }}
      >
        <Drawer.Screen name="Start" component={StartStack} />
        <Drawer.Screen name="Login" component={LoginStack} />
        <Drawer.Screen name="Main" component={MainStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
//yarn run lint --fix
