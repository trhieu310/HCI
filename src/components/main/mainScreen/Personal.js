import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import MainButton from '../../items/MainButton';
import NavHeader from '../../items/NavHeader';
import PersonalCard from '../../items/PersonalCard';
import * as theme from './../../../constants/theme';
import premium from '../../../Icons/vip_diamond_icon.png';
import {ListMainButton} from '../../../constants/listMainButton';

const Account = ({navigation, route}) => {
  const renderMainButton = () => {
    if (ListMainButton.length > 0) {
      var rs = null;
      rs = ListMainButton.map((btn) => {
        return (
          <MainButton
            key={btn.title}
            title={btn.title}
            icon={btn.icon}
            navigation={navigation}
            route={route}
            bgColor={btn.bgColor}
            iconBg={btn.iconBg}
            color={btn.color}
            to={btn.to}
            right={btn.right}
          />
        );
      });
      return <View>{rs}</View>;
    }
    return null;
  };

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
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <PersonalCard />
        {renderMainButton()}
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

export default Account;
