/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  Text,
  TouchableHighlight,
} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import * as theme from './../../constants/theme';
import faultImg from '../../Icons/fault_icon.png';
import closeImg from '../../Icons/icon_close.png';
import defaultAvatar from '../../Icons/default_avatar.png';

const {width, height} = Dimensions.get('screen');

const NavProgressBar = ({navigation, right, number, user, fault}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  const renderLeft = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          // setModalVisible(true);
        }}
        style={styles.left}>
        <Image source={closeImg} style={styles.iconLeft} />
      </TouchableOpacity>
    );
  };

  const renderRight = () => {
    if (right) {
      if (fault) {
        return (
          <View style={styles.viewIconRight}>
            <Image source={faultImg} style={styles.iconRight} />
          </View>
        );
      } else if (user) {
        return (
          <View style={styles.viewIconRight}>
            <Image source={defaultAvatar} style={styles.iconRight} />
          </View>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  const renderCenter = () => {
    return (
      <View style={styles.renderCenter}>
        <ProgressBar
          progress={number / 10}
          style={styles.progress}
          color={Colors.lightBlue700}
        />
      </View>
    );
  };

  return (
    // <View>
    <View style={styles.navHeader}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </View>
    /* <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <View style={styles.closeicon}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Image
                  style={styles.img}
                  source={require('../../Icons/close_img.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <Text style={styles.question}>Bạn có chắc muốn thoát?</Text>
              <Text style={styles.notitext}>
                Quá trình học bài sẽ không được lưu lại đến khi bạn học xong
              </Text>
              <View style={styles.bottom}>
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
                  }}>
                  <Text style={styles.textStyle}>Chắc chắn</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View> */
  );
};

const styles = StyleSheet.create({
  navHeader: {
    height: height * 0.068,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00B2E5',
    justifyContent: 'center',
    paddingHorizontal: 0,
    position: 'absolute',
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
  iconRight: {
    maxWidth: 25,
    height: 25,
  },
  viewIconRight: {
    flex: 1,
    maxWidth: 27,
    height: 27,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 30,
  },
  renderCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    height: height * 0.02,
    width: width * 0.58,
    borderRadius: 20,
  },
  viewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
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
  container: {
    flex: 1,
    backgroundColor: '#C4C4C4',
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
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
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
    backgroundColor: '#000',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.024,
  },
});

export default NavProgressBar;
