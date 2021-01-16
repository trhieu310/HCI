import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Star2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PHƯƠNG PHÁP KHOA HỌC</Text>
      <View style={styles.intro}>
        <Image
          source={require('../../../Icons/icon_intro_3_1.png')}
          style={styles.image1}
        />
        <Image
          source={require('../../../Icons/icon_intro_3_2.png')}
          style={styles.image2}
        />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.botText}>Ứng dụng phương pháp</Text>
        <Text style={styles.botText}>Flashcard 3 mặt nổi tiếng,</Text>
        <Text style={styles.botText}>giúp việc học từ vựng dễ</Text>
        <Text style={styles.botText}>dàng và sinh động hơn.</Text>
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
    paddingTop: 15,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  intro: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.73,
    height: height * 0.36,
    borderRadius: (width * 0.73) / 2,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  image1: {
    marginTop: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    paddingTop: 70,
  },
  botText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Star2;
