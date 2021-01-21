import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Star4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>THEO DÕI TIẾN ĐỘ MỖI NGÀY</Text>
      <View style={styles.intro}>
        <View style={styles.intro2}>
          <Image
            source={require('../../../Icons/icon_intro_5_2.png')}
            style={styles.image}
          />
          <Image
            source={require('../../../Icons/icon_intro_5_3.png')}
            style={styles.image}
          />
          <Image
            source={require('../../../Icons/icon_intro_5_4.png')}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.botText}>Thử thách bản thân qua các</Text>
        <Text style={styles.botText}>bài kiểm tra. Lên bảng xếp</Text>
        <Text style={styles.botText}>hạng và nhận phần thưởng.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    paddingTop: height * 0.018,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  intro: {
    marginTop: height * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.73,
    height: height * 0.36,
    borderRadius: (width * 0.73) / 2,
    backgroundColor: '#fff',
  },
  intro2: {
    height: width * 0.07,
    width: width * 0.07,
    marginTop: height * -0.3,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    paddingTop: height * 0.1,
  },
  botText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Star4;
