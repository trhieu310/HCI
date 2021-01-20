import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import NavHeader from '../../items/NavHeader';
import * as theme from '../../../constants/theme'
import NotificationButton from '../../items/Notifications/NotificationButton';

const Notification = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <NavHeader
        title="Thông báo"
        navigation={navigation}
        route={route}
        user
      />

      <ScrollView style={styles.content}>
        <NotificationButton />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLOR.WHITE,
  },
  content: {
    flex: 1,
  },
});

export default Notification;
