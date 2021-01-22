import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Course = ({logo, courseScreen, actSetting, title, content, bottext}) => {
  return (
    <TouchableOpacity onPress={courseScreen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={logo}
            resizeMode={'contain'}
            style={styles.logo}>
            <TouchableOpacity onPress={actSetting}>
              <Image
                source={require('../../Icons/setting_icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.content}>
          <Text styles={styles.title}>{title}</Text>
          <Text numberOfLines={5} style={styles.textContent}>
            {content}
          </Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.textContent}>{bottext}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.73,
    height: height * 0.44,
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
    height: height * 0.19,
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
    marginHorizontal: width * 0.07,
  },
  title: {
    color: '#4373ED',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textContent: {
    fontSize: 18,
  },
  bottom: {
    flex: 1,
    backgroundColor: '#D7D7D7',
    height: height * 0.05,
    position: 'absolute',
    bottom: 0,
  },
});

export default Course;
