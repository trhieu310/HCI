import React from 'react';
import {StyleSheet} from 'react-native';
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
      screen={() => navigation.navigate('KnowWord3')}
      word1="hobby"
      word2="(nouns)"
      word3="/'hɔbi/"
    />
  );
};

const KnowWord3 = ({navigation}) => {
  return (
    <KnowWord
      navigation={navigation}
      number={3}
      screen={() => navigation.navigate('KnowWord4')}
      word1="museum"
      word2="(nouns)"
      word3="/mju:'ziəm/"
    />
  );
};

const KnowWord4 = ({navigation}) => {
  return (
    <KnowWord
      navigation={navigation}
      number={4}
      screen={() => navigation.navigate('KnowWord5')}
      word1="accountant"
      word2="(nouns)"
      word3="/accountant/"
    />
  );
};

const KnowWord5 = ({navigation}) => {
  return (
    <KnowWord
      navigation={navigation}
      number={5}
      screen={() => navigation.navigate('KnowWord6')}
      word1="baker"
      word2="(nouns)"
      word3="/'beikət/"
    />
  );
};

const KnowWord6 = ({navigation}) => {
  return (
    <KnowWord
      navigation={navigation}
      number={6}
      screen={() => navigation.navigate('KnowWord7')}
      word1="home-maker"
      word2="(nouns)"
      word3="/'houm,meikə/"
    />
  );
};

const KnowWord7 = ({navigation}) => {
  return (
    <KnowWord
      navigation={navigation}
      number={7}
      screen={() => navigation.navigate('KnowWord8')}
      word1="chef"
      word2="(nouns)"
      word3="/∫ef/"
    />
  );
};

const KnowWord8 = ({navigation}) => {
  return (
    <KnowWord
      navigation={navigation}
      number={8}
      screen={() => navigation.navigate('KnowWord9')}
      word1="baby-sitter"
      word2="(nouns)"
      word3="/'beikət/"
    />
  );
};

const KnowWord9 = ({navigation}) => {
  return (
    <KnowWord
      navigation={navigation}
      number={9}
      screen={() => navigation.navigate('KnowWord10')}
      word1="carpenter"
      word2="(nouns)"
      word3="/'kɑ:pintə/"
    />
  );
};

const KnowWord10 = ({navigation}) => {
  return (
    <KnowWord
      navigation={navigation}
      number={10}
      screen={() => navigation.navigate('KnowWord9')}
      word1="cashier"
      word2="(nouns)"
      word3="/kæ'∫iə/"
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
      <Stack.Screen
        name="KnowWord3"
        component={KnowWord3}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KnowWord4"
        component={KnowWord4}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KnowWord5"
        component={KnowWord5}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KnowWord6"
        component={KnowWord6}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KnowWord7"
        component={KnowWord7}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KnowWord8"
        component={KnowWord8}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KnowWord9"
        component={KnowWord9}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="KnowWord10"
        component={KnowWord10}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default KnowWordTest;
