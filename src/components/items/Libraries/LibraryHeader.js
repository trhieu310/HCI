import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import rulePass from '../../../Icons/rule_pass.png';
import * as theme from '../../../constants/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LibraryHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.leftTop}>
          <Text style={styles.textLeftTop}>HỌC </Text>
          <Text style={styles.textLeftTopBold}>TẤT CẢ</Text>
        </View>
        <View style={styles.leftCenter}>
          <Text style={styles.textLeftCenterItalic}>BỘ TỪ VỰNG</Text>
          <Text style={styles.textLeftCenter}>trên thư viện VOCA</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>NÂNG CẤP NGAY!</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <Image style={styles.rightImage} source={rulePass} />
      </View>
    </View>
  );
};

export default LibraryHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingBottom: 7,
    paddingTop: 12,
    backgroundColor: theme.COLOR.LIGHT_YELLOW,
  },
  left: {
    // flex: 3,
    justifyContent: 'center',
  },
  leftTop: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  textLeftTop: {
    fontSize: 22,
    fontWeight: '200',
    color: theme.COLOR.BROWN,
  },
  textLeftTopBold: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.COLOR.BROWN,
  },
  leftCenter: {},
  textLeftCenter: {
    color: theme.COLOR.BROWN,
    paddingBottom: 3,
  },
  textLeftCenterItalic: {
    color: theme.COLOR.BROWN,
    fontSize: 13,
    fontStyle: 'italic',
    backgroundColor: theme.COLOR.WHITE,
    width: 80,
  },
  btn: {
    backgroundColor: theme.COLOR.LIGHT_BLUE,
    width: 120,
    borderRadius: 2,
  },
  textBtn: {
    width: 120,
    textAlign: 'center',
    paddingVertical: 2,
    fontWeight: 'bold',
    fontSize: 12,
    color: theme.COLOR.WHITE,
  },
  right: {
    // flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightImage: {
    maxHeight: 120,
  },
});
