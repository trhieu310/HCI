import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import KnowWord from '../../../reuse/KnowWord';

const KnowWord1 = ({navigation}) => {
  return (
    <KnowWord
      navigation={navigation}
      word1="along"
      word2="(prep)"
      word3="/əˈlɑːŋ/"
      number={1}
    />
  );
};

const styles = StyleSheet.create({});

export default KnowWord1;
