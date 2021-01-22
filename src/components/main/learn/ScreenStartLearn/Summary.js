import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as theme from '../../../../constants/theme';
import learning from '../../../../Icons/learning_icon.png';

const Summary = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTop}>
        <View style={styles.viewTopChild}>
          <Text style={styles.textTop}>13</Text>
          <Text style={styles.textTopDetail}>Từ đã thuộc</Text>
        </View>
        <View style={styles.viewTopChild}>
          <Text style={styles.textTop}>13</Text>
          <Text style={styles.textTopDetail}>Từ chưa thuộc</Text>
        </View>
        <View style={styles.viewTopChild}>
          <Text style={styles.textTop}>13</Text>
          <Text style={styles.textTopDetail}>Chủ đề đã học</Text>
        </View>
      </View>
      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textBtn}>Bắt đầu chủ đề mới</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewBot}>
        <View style={styles.viewImage}>
          <Image style={styles.imageBot} source={learning} />
        </View>
        <Text style={styles.textBot}>JOB</Text>
        <TouchableOpacity style={styles.btnBot}>
          <Text style={styles.textBtnBot}>Học bài mới</Text>
        </TouchableOpacity>
        <Text style={styles.textEndBot}>-- Hoặc --</Text>
        <TouchableOpacity style={styles.btnBot}>
          <Text style={styles.textBtnBot}>Xem tất cả chủ để</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.COLOR.WHITE
  },
  viewTop: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewTopChild: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: theme.COLOR.WHITE,
    borderTopColor: theme.COLOR.WHITE,
    paddingVertical: 10
  },
  textTop: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 15,
  },
  textTopDetail: {
    fontSize: 14,
  },
  viewBtn: {
    flex: 1,
  },
  btn: {
    width: 300,
    height: 45,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.COLOR.LIGHT_YELLOW,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 3,
    shadowRadius: 3 ,
    shadowOffset : { width: 1, height: 13},
  },
  textBtn: {
    color: theme.COLOR.RED,
    fontSize: 18,
    fontWeight: 'bold'
  },
  viewBot: {
    flex: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  viewImage: {},
  imageBot: {
    width: 46,
    height: 46,
  },
  textBot: {
    marginVertical: 15,
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnBot: {
    width: 250,
    alignItems: 'center',
    marginBottom: 15,
    height: 45,
    borderRadius: 23,
    justifyContent: 'center',
    backgroundColor: theme.COLOR.YELLOW,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 3,
    shadowRadius: 3 ,
    shadowOffset : { width: 1, height: 13},
  },
  textBtnBot: {
    fontSize: 18,
    color: theme.COLOR.WHITE,
    fontWeight: 'bold'
  },
  textEndBot: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
