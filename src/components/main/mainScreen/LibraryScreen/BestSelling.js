import React from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import NavHeader from '../../../items/NavHeader';
import Course from '../../../reuse/course';

const BestSelling = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NavHeader back navigation={navigation} title="Best-Selling" user />
      <SafeAreaView>
        <FlatList>
          <Course
            logo={require('../../../../Icons/letgo.jpg')}
            title="LET’S GO"
            content="LET’S GO là sản phẩm đầu tay
                     của hệ thống học từ vựng
                     VOCA.VN, gồm 7 chủ đề từ
                     vựng tiếng Anh thông dụng
                     được thể hiện qua hình thức..."
            bottext="140 Từ mới"
          />
          <Course
            logo={require('../../../../Icons/letgo.jpg')}
            title="LET’S GO"
            content="LET’S GO là sản phẩm đầu tay
                     của hệ thống học từ vựng
                     VOCA.VN, gồm 7 chủ đề từ
                     vựng tiếng Anh thông dụng
                     được thể hiện qua hình thức..."
            bottext="140 Từ mới"
          />
          <Course
            logo={require('../../../../Icons/letgo.jpg')}
            title="LET’S GO"
            content="LET’S GO là sản phẩm đầu tay
                     của hệ thống học từ vựng
                     VOCA.VN, gồm 7 chủ đề từ
                     vựng tiếng Anh thông dụng
                     được thể hiện qua hình thức..."
            bottext="140 Từ mới"
          />
        </FlatList>
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
