import React from 'react';
import {
  View,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import * as theme from '../../../constants/theme';
import BackCard from '../../../Icons/menu_bg.png';
import Avatar from '../../items/Avatar';
import imge from '../../../Icons/avatar_secret.png';
import closeIcon from '../../../Icons/close_img.png';
import PersonalButton from '../../reuse/PersonalButton';
import ListPersonalButton from '../../../constants/listPersonalButton';

const {height, width} = Dimensions.get('screen');

const MenuPersonal = ({navigation}) => {
  const renderPersonalButton = () => {
    if (ListPersonalButton.length > 0) {
      var rs = null;
      rs = ListPersonalButton.map((item) => {
        return (
          <PersonalButton key={item.id} image={item.icon} text={item.text} />
        );
      });
      return <View>{rs}</View>;
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground style={styles.topBack} source={BackCard}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.viewClose}>
              <Image style={styles.close} source={closeIcon} />
            </View>
          </TouchableOpacity>
          <View style={styles.viewAvatar}>
            <Avatar
              fontSize={20}
              image={imge}
              name="Lường Khắc Tuấn Anh"
              textcolor="#fff"
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.content}>{renderPersonalButton()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: height * 0.24,
    flex: 1,
  },
  topBack: {
    width: width,
    height: height * 0.24,
  },
  viewAvatar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewClose: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginRight: width * 0.012,
    marginTop: height * 0.012,
  },
  close: {
    position: 'absolute',
    width: width * 0.06,
    height: width * 0.06,
  },
  content: {
    flex: 1,
  },
});

export default MenuPersonal;
