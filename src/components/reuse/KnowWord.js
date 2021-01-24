/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import sound from '../../Icons/sound_not_play.png';
import closeImg from '../../Icons/icon_close.png';
import closeBlack from '../../Icons/close_black.png';
import defaultAvatar from '../../Icons/default_avatar.png';

const {width, height} = Dimensions.get('screen');

const KnowWord = ({navigation, word1, word2, word3, number, screen}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.navHeader}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          style={styles.left}>
          <Image source={closeImg} style={styles.iconLeft} />
        </TouchableOpacity>
        <View style={styles.center}>
          <ProgressBar
            progress={number / 10}
            style={styles.progress}
            color={Colors.lightBlue700}
          />
        </View>
        <View style={styles.right}>
          <Image source={defaultAvatar} style={styles.iconRight} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.border}>
          <Text style={styles.mainword}>{word1}</Text>
          <Text style={styles.midword}>{word2}</Text>
          <Image source={sound} style={styles.image} />
          <Text style={styles.botword}>{word3}</Text>
        </View>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.containerr}>
            <View style={styles.modalView}>
              <View style={styles.closeicon}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Image style={styles.img} source={closeBlack} />
                </TouchableOpacity>
              </View>
              <View style={styles.bodyModal}>
                <Text style={styles.quesstion}>Bạn có chắc muốn thoát?</Text>
                <Text style={styles.notitext}>
                  Quá trình học bài sẽ không được lưu lại đến khi bạn học xong
                </Text>
                <View style={styles.bottomModal}>
                  <TouchableOpacity
                    style={{
                      ...styles.openButton,
                      backgroundColor: '#F25A5A',
                      width: width * 0.35,
                      height: height * 0.06,
                      marginHorizontal: height * 0.024,
                    }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <Text style={styles.textStyle}>Hủy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      ...styles.openButton,
                      backgroundColor: '#2196F3',
                      width: width * 0.35,
                      height: height * 0.06,
                    }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      navigation.navigate('Summary');
                    }}>
                    <Text style={styles.textStyle}>Chắc chắn</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.question}>Bạn có biết từ này không?</Text>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.btn1} onPress={screen}>
            <Text style={styles.text}>Biết</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={screen}>
            <Text style={styles.text}>Không biết</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navHeader: {
    height: height * 0.068,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00B2E5',
    justifyContent: 'space-between',
    position: 'relative',
    top: 0,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  iconLeft: {
    maxWidth: 25,
    height: 25,
  },
  left: {
    flex: 1,
    marginHorizontal: 20,
  },
  center: {
    flex: 8,
  },
  iconRight: {
    maxWidth: 25,
    height: 25,
  },
  right: {
    flex: 1,
    maxWidth: 27,
    height: 27,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 30,
  },
  progress: {
    height: height * 0.02,
    width: width * 0.58,
    borderRadius: 20,
  },
  body: {
    height: height * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
  border: {
    width: width * 0.87,
    height: height * 0.47,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: width * 0.12,
    height: width * 0.12,
  },
  mainword: {
    fontSize: 24,
    color: '#14BBE2',
  },
  midword: {
    fontSize: 18,
    color: '#929292',
  },
  botword: {
    fontSize: 18,
  },
  bottom: {
    height: height * 0.2,
    width: width,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 24,
    paddingBottom: height * 0.024,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn1: {
    backgroundColor: '#00C5F9',
    borderRadius: (height * 0.06) / 2,
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  btn2: {
    backgroundColor: '#F46463',
    borderRadius: (height * 0.06) / 2,
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  modalView: {
    width: width * 0.92,
    height: height * 0.33,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerr: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: (height * 0.06) / 2,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  closeicon: {
    marginTop: height * 0.012,
    marginRight: height * 0.012,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  bodyModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quesstion: {
    fontSize: 22,
    position: 'absolute',
    top: 0,
  },
  notitext: {
    width: width * 0.73,
    textAlign: 'center',
    fontSize: 18,
    position: 'absolute',
    top: (height * 0.2) / 2,
  },
  img: {
    width: 20,
    height: 20,
  },
  bottomModal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.024,
  },
});

export default KnowWord;
