import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import NavHeader from '../../items/NavHeader';
import * as theme from '../../../constants/theme';
import MissionButton from '../../items/Missions/MissionButton';

const Missons = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <NavHeader title="Nhiệm vụ" navigation={navigation} route={route} user />

      <ScrollView style={styles.content}>
        <MissionButton
          navigation={navigation}
          route={route}
          text="ôn tập"
          match="chủ đề cần"
          number={50}
        />
        <MissionButton
          navigation={navigation}
          route={route}
          active
          text="cải thiện"
          match="từ cần"
          number={10}
        />
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

export default Missons;
