import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import TopTitle from '../../../items/TopTitle';
import * as theme from '../../../../constants/theme';
import ResultCard from '../../../items/ResultCard';

import accountant from '../../../../Icons/accountant.jpg';
import babysitter from '../../../../Icons/babysitter.jpg';
import carpenter from '../../../../Icons/carpenter.jpg';
import chef from '../../../../Icons/chef.jpg';
import hobby from '../../../../Icons/hobby.jpg';
import homemaker from '../../../../Icons/homemaker.jpg';
import museum from '../../../../Icons/museum.jpg';

const listNon = [
  {
    word: 'Accountant',
    typeWord: 'n',
    mean: 'Kế toán',
    example: 'She is a accountant',
    image: accountant,
  },
  {
    word: 'babysitter',
    typeWord: 'n',
    mean: 'Người giữ trẻ',
    example: 'She is a babysitter',
    image: babysitter,
  },
  {
    word: 'carpenter',
    typeWord: 'n',
    mean: 'thợ sơn',
    example: 'He is a carpenter',
    image: carpenter,
  },
  {
    word: 'chef',
    typeWord: 'n',
    mean: 'đầu bếp',
    example: 'He is a chef',
    image: chef,
  },
  {
    word: 'hobby',
    typeWord: 'n',
    mean: 'Sở thích',
    example: 'My hobby is',
    image: hobby,
  },
  {
    word: 'homemaker',
    typeWord: 'n',
    mean: 'nội trợ',
    example: 'She is a homemaker',
    image: homemaker,
  },
];
const listYes = [
  {
    word: 'Accountant',
    typeWord: 'n',
    mean: 'Kế toán',
    example: 'She is a accountant',
    image: accountant,
  },
  {
    word: 'babysitter',
    typeWord: 'n',
    mean: 'Người giữ trẻ',
    example: 'She is a babysitter',
    image: babysitter,
  },
  {
    word: 'carpenter',
    typeWord: 'n',
    mean: 'thợ sơn',
    example: 'He is a carpenter',
    image: carpenter,
  },
  {
    word: 'chef',
    typeWord: 'n',
    mean: 'đầu bếp',
    example: 'He is a chef',
    image: chef,
  },
  {
    word: 'hobby',
    typeWord: 'n',
    mean: 'Sở thích',
    example: 'My hobby is',
    image: hobby,
  },
  {
    word: 'homemaker',
    typeWord: 'n',
    mean: 'nội trợ',
    example: 'She is a homemaker',
    image: homemaker,
  },
];

const renderList = (list) => {
  if (list != null) {
    let rs = null;
    rs = list.map((item, index) => {
      return (
        <ResultCard
          key={item.word + new String(Math.random(100 + index) * 2)}
          word={item.word}
          typeWord={item.typeWord}
          mean={item.mean}
          example={item.example}
          image={item.image}
        />
      );
    });
    return rs;
  }
  return null;
};

const ResultWord = () => {
  return (
    <ScrollView>
      <TopTitle
        backgroundColor={theme.COLOR.TOMATO}
        title="Từ chưa thuộc"
        number={6}
      />
      <View>{renderList(listNon)}</View>
      <TopTitle
        backgroundColor={theme.COLOR.LIGHT_BLUE}
        title="Từ đã thuộc"
        number={14}
      />
      <View>{renderList(listYes)}</View>
    </ScrollView>
  );
};

export default ResultWord;

const styles = StyleSheet.create({});
