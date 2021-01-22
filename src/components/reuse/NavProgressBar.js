import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import * as theme from './../../constants/theme';
import faultImg from '../../Icons/fault_icon.png';
import closeImg from '../../Icons/icon_close.png';
import defaultAvatar from '../../Icons/default_avatar.png';

const {width, height} = Dimensions.get('screen');

const NavProgressBar = ({navigation, right, number, user, fault}) => {
  const renderLeft = () => {
    return (
      <TouchableOpacity style={styles.left}>
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
    <View style={styles.navHeader}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </View>
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
});

export default NavProgressBar;
