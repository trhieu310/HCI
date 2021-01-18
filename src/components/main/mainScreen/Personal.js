import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import NavHeader from '../../items/NavHeader';
import PersonalCard from '../../items/PersonalCard';
import * as theme from './../../../constants/theme';

const Account = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <NavHeader 
        menu
        title="Cá nhân"
        navigation={navigation}
        route={route} 
        right
        user
      />
      <ScrollView style={styles.content}>
        <PersonalCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52BEE5'
  },
  content: {
    flex: 1,
  }
});

export default Account;
