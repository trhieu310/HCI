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
        <ImageBackground source={logo} style={styles.logo}>
          <TouchableOpacity onPress={actSetting}>
            <Image
              source={require('../../Icons/setting_icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.content}>
          <Text styles={styles.title}>{title}</Text>
          <Text style={styles.textContent}>{content}</Text>
        </View>
        <View style={styles.bottom}>
          <Text numberOfLines={5} style={styles.textContent}>
            {bottext}
          </Text>
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
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  logo: {
    flex: 4.5,
  },
  icon: {
    marginRight: width * 0.02,
    marginTop: height * 0.02,
    maxWidth: 25,
    maxHeight: 25,
  },
  content: {
    flex: 4.4,
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
    backgroundColor: '#D7D7D7',
    flex: 1.1,
  },
});

export default Course;
