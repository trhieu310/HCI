import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RankButton from '../../../items/StartLearn/RankButton';
import * as theme from '../../../../constants/theme';

const Rank = (props) => {
  const rankList = [
    {
      rank: 1,
      words: 20,
      time: 20,
      name: 'Hai Nguyen',
    },
    {
      rank: 2,
      words: 20,
      time: 20,
      name: 'Tu Pham',
    },
    {
      rank: 3,
      words: 20,
      time: 20,
      name: 'Duong Ca',
    },
    {
      rank: 4,
      words: 20,
      time: 22,
      name: 'Tran Khai',
    },
    {
      rank: 5,
      words: 20,
      time: 23,
      name: 'Hoa Hoa',
    },
    {
      rank: 6,
      words: 20,
      time: 24,
      name: 'Minh Duc',
    },
    {
      rank: 7,
      words: 20,
      time: 27,
      name: 'Vu Nam',
    },
    {
      rank: 8,
      words: 20,
      time: 29,
      name: 'Ly Chi',
    },
  ];

  const renderList = () => {
    if (rankList != null) {
      let rs = null;
      rs = rankList.map((rankItem, index) => {
        return (
          <RankButton
            key={rankItem.rank}
            rank={rankItem.rank}
            words={rankItem.words}
            time={rankItem.time}
            name={rankItem.name}
          />
        );
      });
      return rs;
    }
    return null;
  };

  return <ScrollView style={styles.scrollView}>{renderList()}</ScrollView>;
};

export default Rank;

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 10,
    backgroundColor: theme.COLOR.WHITE,
  },
});
