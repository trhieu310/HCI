import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import rankArchive from '../../../Icons/icon_top_ranking.png';
import * as theme from '../../../constants/theme';

const RankButton = (props) => {
  const {name, words, time, rank} = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        rank % 2 ? styles.odd : {backgroundColor: theme.COLOR.WHITE},
        rank === 1
          ? styles.firstStyle
          : rank === 2
          ? styles.secondStyle
          : rank === 3
          ? styles.thirdStyle
          : null,
      ]}>
      <View style={[styles.imageFisrt]}>
        <ImageBackground
          style={styles.imageBackground}
          source={rank === 1 || rank === 2 || rank === 3 ? rankArchive : null}>
          <Text
            style={[
              styles.rankNumber,
              rank === 1 || rank === 2 || rank === 3 ? {paddingTop: 8} : null,
            ]}>
            {rank}
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.viewName}>
        <Text
          style={[
            styles.textName,
            rank === 1 || rank === 2 || rank === 3
              ? {color: theme.COLOR.WHITE, fontWeight: 'bold'}
              : null,
          ]}>
          {name}
        </Text>
      </View>
      <View style={styles.viewArchive}>
        <Text style={[styles.text, styles.textWord]}>{words}w</Text>
        <Text style={[styles.text, styles.textTime]}>{time}s</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RankButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 70,
    flexDirection: 'row',
    backgroundColor: theme.COLOR.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  imageFisrt: {
    flex: 1,
    alignItems: 'center',
  },
  imageBackground: {
    // flex: 1
    width: 30,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankNumber: {
    fontSize: 16,
  },
  viewName: {
    flex: 4,
    paddingHorizontal: 4,
  },
  textName: {
    fontSize: 18,
  },
  viewArchive: {
    flex: 1,
  },
  text: {
    color: theme.COLOR.GRAY,
  },
  textWord: {},
  textTime: {},
  firstStyle: {
    backgroundColor: theme.COLOR.LIGHT_YELLOW,
  },
  secondStyle: {
    backgroundColor: theme.COLOR.PRIMARY,
  },
  thirdStyle: {
    backgroundColor: theme.COLOR.BLUE,
  },
  odd: {
    backgroundColor: '#eee',
  },
});
