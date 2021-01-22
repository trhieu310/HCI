import React from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import NavHeader from '../../../items/NavHeader';
import Course from '../../../reuse/course';

const DATA = [
  {
    id: '1',
    title: 'LET’S GO',
    logo: require('../../../../Icons/letgo.jpg'),
    content:
      'LET’S GO là sản phẩm đầu tay của hệ thống học từ vựng VOCA.VN, gồm 7 chủ đề từ vựng tiếng Anh thông dụng được thể hiện qua hình thức...',
    bottext: '140 Từ mới',
  },
  {
    id: '2',
    title: 'LET’S GO',
    logo: require('../../../../Icons/letgo.jpg'),
    content:
      'LET’S GO là sản phẩm đầu tay của hệ thống học từ vựng VOCA.VN, gồm 7 chủ đề từ vựng tiếng Anh thông dụng được thể hiện qua hình thức...',
    bottext: '140 Từ mới',
  },
  {
    id: '3',
    title: 'LET’S GO',
    logo: require('../../../../Icons/letgo.jpg'),
    content:
      'LET’S GO là sản phẩm đầu tay của hệ thống học từ vựng VOCA.VN, gồm 7 chủ đề từ vựng tiếng Anh thông dụng được thể hiện qua hình thức...',
    bottext: '140 Từ mới',
  },
];

const BestSelling = ({navigation}) => {
  const renderItem = ({item}) => (
    <Course
      title={item.title}
      logo={item.logo}
      content={item.content}
      bottext={item.bottext}
    />
  );
  return (
    <View style={styles.container}>
      <NavHeader back navigation={navigation} title="Best-Selling" user />
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          nestedScrollEnabled={true}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BestSelling;
