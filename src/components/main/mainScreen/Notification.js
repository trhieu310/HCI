import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import NavHeader from '../../items/NavHeader';

const Notification = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <NavHeader
        back
        title="Thông báo"
        navigation={navigation}
        route={route}
        user
      />

      <ScrollView style={styles.content}>
        <Text>Notification</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52BEE5',
  },
  content: {
    flex: 1,
  },
});

export default Notification;
