import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import ResultPageCard from '../../../items/ResultPageCard';
import * as theme from '../../../../constants/theme';
import ClickButton from '../../../reuse/clickButton';
import menubg from '../../../../Icons/menu_bg.png';
import NavHeader from '../../../items/NavHeader';
import story from '../../../../Icons/story.png'
import wordUnknown from '../../../../Icons/word_unknow_icon.png'
import tick from '../../../../Icons/tick_green.png'

const ResultPage = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.text}>Kết quả lần kiểm tra gần nhất</Text>
      </View>
      <ImageBackground source={menubg} style={{flex: 1, height: 150}}>
        <View style={styles.viewResult}>
          <View style={styles.viewTextResult}>
            <Text style={styles.textResult}>50%</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.viewCard}>
        <ResultPageCard image={story} text="10 từ đã thuộc" time="45" />
        <ResultPageCard image={wordUnknown} text="10 từ chưa thuộc thuộc"/>
        <ResultPageCard image={tick} text="Hay tiếp tục cố gắng" />
      </View>
      <View style={styles.viewButton}>
        <ClickButton
          text="Học lại"
          backgroundColor={theme.COLOR.PRIMARY}
          width={140}
          height={40}
          color={theme.COLOR.WHITE}
          fontSize={16}
          radius={20}
          screen={() => navigation.navigate('FinalTest')}
        />
        <ClickButton
          text="Thoát"
          backgroundColor={theme.COLOR.TOMATO}
          width={140}
          height={40}
          color={theme.COLOR.WHITE}
          fontSize={16}
          radius={20}
          screen={() => navigation.replace('LearnNavigation')}
        />
      </View>
    </View>
  );
};

export default ResultPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewText: {
    flex: 1,
    maxHeight: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
  viewResult: {
    flex: 1,
    maxHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTextResult: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderRightColor: theme.COLOR.WHITE,
    borderLeftColor: theme.COLOR.LIGHT_BLUE,
    borderTopColor: theme.COLOR.WHITE,
    borderBottomColor: theme.COLOR.LIGHT_BLUE,
    borderWidth: 6,
    transform: [{rotate: '45deg'}],
    alignItems: 'center',
    justifyContent: 'center',
  },
  textResult: {
    transform: [{rotate: '-45deg'}],
    fontSize: 24,
    fontWeight: 'bold',
  },
  viewCard: {
    flex: 2,
  },
  viewButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 60,
    backgroundColor: theme.COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
