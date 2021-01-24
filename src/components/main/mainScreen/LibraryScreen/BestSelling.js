import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import NavHeader from '../../../items/NavHeader';
import Course from '../../../reuse/course';

const DATA = [
  {
    title: 'LET’S GO',
    logo: require('../../../../Icons/letgo.jpg'),
    content:
      'LET’S GO là sản phẩm đầu tay của hệ thống học từ vựng VOCA.VN, gồm 7 chủ đề từ vựng tiếng Anh thông dụng được thể hiện qua hình thức...',
    bottext: '140 Từ mới',
  },
  {
    title: 'LET’S GO11',
    logo: require('../../../../Icons/letgo.jpg'),
    content:
      'LET’S GO là sản phẩm đầu tay của hệ thống học từ vựng VOCA.VN, gồm 7 chủ đề từ vựng tiếng Anh thông dụng được thể hiện qua hình thức...',
    bottext: '140 Từ mới',
  },
  {
    title: 'LET’S GO2',
    logo: require('../../../../Icons/letgo.jpg'),
    content:
      'LET’S GO là sản phẩm đầu tay của hệ thống học từ vựng VOCA.VN, gồm 7 chủ đề từ vựng tiếng Anh thông dụng được thể hiện qua hình thức...',
    bottext: '140 Từ mới',
  },
];

const BestSelling = ({navigation, route}, props) => {
  const renderItem = ({item}) => (
    <Course
      title={item.title}
      logo={item.logo}
      content={item.content}
      bottext={item.bottext}
      courseScreen={() => navigation.navigate('StartLearn')}
    />
  );

  const {title} = props
  return (
    <View style={styles.container}>
      <NavHeader back navigation={navigation} route={route} title={title} user />
      <SafeAreaView style={styles.flat}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          nestedScrollEnabled={true}
          style={styles.flatListStyle}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flat: {
    alignItems: 'center',
  },
  flatListStyle: {

  }
});

export default BestSelling;
