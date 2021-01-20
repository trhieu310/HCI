import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Start from './src/components/start/Start';
import Login from './src/components/login/Login';
import Main from './src/components/main/Main';
import * as theme from './src/constants/theme';
import MenuPersonal from './src/components/main/mainScreen/MenuPersonal';

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
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
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
          </AccStack.Navigator>
        )}
      </Stack.Screen>
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
