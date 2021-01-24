import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import VocabularyCard from '../../../../items/VocabularyCard';
import * as theme from '../../../../../constants/theme';

const WordAccount = ({navigation, route}) => {
  const listVocabularyCard = [
    {
      title: "LET'S GO",
      status: 1,
    },
    {
      title: 'VOCA VIP',
      status: 0,
    },
    {
      title: 'VOCA VIP PLUS',
      status: 0,
    },
  ];

  const renderVocabularyCard = () => {
    if (listVocabularyCard != null) {
      let rs = null;
      rs = listVocabularyCard.map((card, index) => {
        return (
          <VocabularyCard title={card.title} status={card.status} key={index} />;
        );
      });
      return rs;
    }
    return null;
  };
  return (
    <ScrollView style={styles.container}>{renderVocabularyCard()}</ScrollView>
  );
};

export default WordAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: theme.COLOR.WHITE,
  },
});
