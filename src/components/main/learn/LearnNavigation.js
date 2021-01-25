import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FinalTest from '../../main/learn/FinalTest/FinalTest';
import LearnNew from '../../main/learn/LearnNew/LearnNew';
import KnowWordTest from '../../main/learn/FirstTest/KnowWordTest';
import StartLearn from './StartLearn';
import Result from '../../main/learn/Result';

const Stack = createStackNavigator();

const LearnNavigation = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="BestSell">
      <Stack.Screen
        name="BestSell"
        component={StartLearn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FinalTest"
        component={FinalTest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LearnNew"
        component={LearnNew}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KnowWordTest"
        component={KnowWordTest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LearnNavigation;
