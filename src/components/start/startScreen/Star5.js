import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Star5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HỌC THỬ MIỄN PHÍ</Text>
      <View style={styles.intro}>
        <Image
          source={require('../../../Icons/icon_intro_6.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.botText}>Miễn phí đầy đủ tính năng với</Text>
        <Text style={styles.botText}>bộ từ vựng LET’T GO.</Text>
        <Text style={styles.botText}>Hoàn toàn miễn phí.</Text>
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
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewText: {
    paddingTop: 90,
  },
  botText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Star5;
