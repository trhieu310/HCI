/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import * as theme from '../../../../constants/theme';
import learning from '../../../../Icons/learning_icon.png';

const {height, width} = Dimensions.get('screen');

const Summary = ({navigation, route}) => {
  const [modalVisible, setModalVisible] = useState(false);
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
        <TouchableOpacity
          style={styles.btnBot}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.textBtnBot}>Học bài mới</Text>
        </TouchableOpacity>
        <Text style={styles.textEndBot}>-- Hoặc --</Text>
        <TouchableOpacity
          style={styles.btnBot}
          onPress={() => navigation.navigate('Topic')}>
          <Text style={styles.textBtnBot}>Xem tất cả chủ để</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.modal}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.containerModal}>
            <View style={styles.ViewModal}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.close}>
                  <Image
                    style={styles.img}
                    source={require('../../../../Icons/close_black.png')}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.body}>
                <Text style={styles.notitext}>
                  Theo nguyên tắc của VOCA, bạn cần phải ôn tập bài cũ để giúp
                  việc ghi nhớ từ vựng tốt hơn.
                </Text>
                <TouchableOpacity
                  style={{
                    ...styles.openButton,
                    backgroundColor: '#D73F3F',
                    width: width * 0.35,
                    height: height * 0.04,
                    marginVertical: height * 0.012,
                  }}
                  onPress={(route) => {
                    setModalVisible(!modalVisible);
                    navigation.navigate('FinalTest');
                  }}>
                  <Text style={styles.textStyle}>Kiểm tra lại</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.openButton,
                    backgroundColor: '#F5CC0D',
                    width: width * 0.35,
                    height: height * 0.04,
                  }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.navigate('LearnNew');
                  }}>
                  <Text style={styles.textStyle}>Học bài mới</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.COLOR.WHITE,
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
    paddingVertical: 10,
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
    shadowRadius: 3,
    shadowOffset: {width: 1, height: 13},
  },
  textBtn: {
    color: theme.COLOR.RED,
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewBot: {
    flex: 6,
    alignItems: 'center',
    marginTop: 10,
  },
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
    shadowRadius: 3,
    shadowOffset: {width: 1, height: 13},
  },
  textBtnBot: {
    fontSize: 18,
    color: theme.COLOR.WHITE,
    fontWeight: 'bold',
  },
  textEndBot: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewModal: {
    alignSelf: 'center',
    position: 'relative',
    width: width * 0.73,
    height: height * 0.3,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#565656',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  close: {
    marginTop: height * 0.012,
    marginRight: height * 0.012,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  img: {
    width: 20,
    height: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notitext: {
    margin: width * 0.05,
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: width * 0.05,
  },
  openButton: {
    backgroundColor: '#8989ab',
    borderRadius: (height * 0.05) / 2,
    padding: 5,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
