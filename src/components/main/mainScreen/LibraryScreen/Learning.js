import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import NavHeader from '../../../items/NavHeader';

const {height, width} = Dimensions.get('screen');

const CountWord = ({color, text}) => {
  return (
    <View style={styles.border}>
      <Text style={{color: color, fontSize: 24}}>0</Text>
      <View />
      <Text style={styles.textContent}>{text}</Text>
    </View>
  );
};

const Learning = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NavHeader back title="Bộ từ đang học" navigation={navigation} />
      <TouchableOpacity>
        <View style={styles.header}>
          <ImageBackground
            source={require('../../../../Icons/letgo.jpg')}
            resizeMode={'contain'}
            style={styles.logo}>
            <TouchableOpacity>
              <Image
                source={require('../../../../Icons/setting_icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.content}>
          <Text styles={styles.title}>LET’S GO</Text>
          <Text style={styles.textContent}>Sản phẩm miễn phí</Text>
        </View>
        <View style={styles.bottom}>
          <View>
            <CountWord
              style={styles.CountWord}
              color={'#24DB37'}
              text="Từ đã thuộc"
            />
            <CountWord color={'#FB134A'} text="Từ chưa thuộc" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: height * 0.486,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginVertical: height * 0.02,
  },
  header: {
    height: height * 0.2,
  },
  logo: {
    flex: 1,
  },
  icon: {
    marginRight: width * 0.02,
    marginTop: height * 0.02,
    width: width * 0.06,
    height: width * 0.06,
    borderRadius: (width * 0.06) / 2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#4373ED',
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textContent: {
    fontSize: 18,
  },
  bottom: {
    flex: 1,
    borderTopColor: '#000',
    height: height * 0.158,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 0,
    paddingBottom: 0,
  },
  border: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CountWord: {
    borderRightColor: '#000',
    borderRightWidth: height * 0.11,
  },
});

export default Learning;
