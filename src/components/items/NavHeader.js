import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as theme from './../../constants/theme';
import backImg from '../../Icons/back_img.png';
import menuImg from '../../Icons/icon_menu.png';
import closeImg from '../../Icons/icon_close.png';
import defaultAvatar from '../../Icons/default_avatar.png';

const NavHeader = ({
  navigation,
  route,
  right,
  menu,
  back,
  title,
  user,
  test,
}) => {
  const renderLeft = () => {
    if (back) {
      return (
        <TouchableOpacity
          style={styles.left}
          onPress={(route) => navigation.goBack()}>
          <Image source={backImg} style={styles.iconStyle} />
        </TouchableOpacity>
      );
    }
    if (menu) {
      return (
        <TouchableOpacity
          style={styles.left}
          onPress={() => navigation.navigate('MenuPersonal')}>
          <Image source={menuImg} style={styles.iconStyle} />
        </TouchableOpacity>
      );
    }
    return null;
  };

  const renderRight = () => {
    if (right) {
      if (test) {
        return (
          <View style={styles.viewIconRight}>
            <Image source={closeImg} style={styles.iconRight} />
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
    if (test) {
      return (
        <View style={styles.titleView}>
          <Text>CountTime</Text>
        </View>
      );
    }
    return (
      <View
        style={[
          styles.titleView,
          !back || (!menu && !right)
            ? {
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 0,
                paddingRight: theme.SIZES.BASES,
              }
            : null,
        ]}>
        <Text style={styles.title}>{title ? title : 'Title'}</Text>
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
    minHeight: theme.SIZES.NAHEADER_HEIGHT,
    paddingVertical: theme.SIZES.NAHEADER_HEIGHT / 2 - 12,
    paddingHorizontal: theme.SIZES.BASES / 2,
    flexDirection: 'row',
    backgroundColor: '#00B2E5',
  },
  left: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    display: 'flex',
    flex: 8,
    justifyContent: 'center',
    paddingLeft: theme.SIZES.BASES * 8,
  },
  right: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.SIZES.TITLE_FONT_SIZE,
    paddingHorizontal: theme.SIZES.BASES,
    color: '#fff',
    fontWeight: 'bold',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  iconRight: {
    maxWidth: 25,
    height: 25,
  },
  viewIconRight: {
    maxWidth: 27,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
  },
});

export default NavHeader;
