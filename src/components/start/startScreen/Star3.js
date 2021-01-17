import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Star3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.title}>NHẮC NHỞ ÔN TẬP</Text>
        <Text style={styles.title}>ĐÚNG THỜI ĐIỂM</Text>
      </View>
      <View style={styles.intro}>
        <Image
          source={require('../../../Icons/icon_intro_4.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.botText}>Phương pháp khoa học tự</Text>
        <Text style={styles.botText}>động nhắc nhở sắp xếp lộ</Text>
        <Text style={styles.botText}>trình học. Ôn tập có thời điểm</Text>
        <Text style={styles.botText}>trước khi học từ mới.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  viewTitle: {
    paddingTop: 15,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  intro: {
    marginTop: 75,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.73,
    height: height * 0.36,
    borderRadius: (width * 0.73) / 2,
    backgroundColor: '#fff',
  },
  image: {
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

export default Star3;
