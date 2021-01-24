import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import KnowWord from '../../../reuse/KnowWord';

const Stack = createStackNavigator();

const KnowWord1 = ({navigation}) => {
  return (
    <KnowWord
      navigation={navigation}
      number={1}
      screen={() => navigation.navigate('KnowWord2')}
      word1="along"
      word2="(prep)"
      word3="/əˈlɑːŋ/"
    />
  );
};

const KnowWord2 = ({navigation}) => {
  return (
    <KnowWord
      navigation={navigation}
      number={2}
      screen={() => navigation.navigate('KnowWord1')}
      word1="hobby"
      word2="(nouns)"
      word3="/'hɔbi/"
    />
  );
};

const KnowWordTest = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="KnowWord1">
      <Stack.Screen
        name="KnowWord1"
        component={KnowWord1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KnowWord2"
        component={KnowWord2}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default KnowWordTest;
