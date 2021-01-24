import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import {To} from 'react-native-gesture-handler';
import iconLearningSet from '../../../Icons/icon_learning_set.png';
import imgRight from '../../../Icons/narrow_right.png';
import * as theme from '../../../constants/theme';

const LibraryButton = ({
  navigation,
  route,
  icon,
  to = 'Personal',
  title,
  bgColor,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        bgColor
          ? {backgroundColor: bgColor}
          : {backgroundColor: theme.COLOR.WHITE},
      ]}
      onPress={() =>
        navigation.navigate(to !== '' ? to : 'BestSelling', {title: title})
      }>
      <View style={styles.viewIcon}>
        <Image style={styles.icon} source={icon ? icon : iconLearningSet} />
      </View>
      <View style={styles.viewText}>
        <Text style={styles.text}>{title ? title : 'Title'}</Text>
      </View>
      <View style={styles.viewRight}>
        <Image style={styles.imageRight} source={imgRight} />
      </View>
    </TouchableOpacity>
  );
};

export default LibraryButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 62,
    marginHorizontal: 10,
    borderColor: theme.COLOR.WHITE,
    borderWidth: 3,
    borderRadius: 32,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewIcon: {
    maxHeight: 55,
    maxWidth: 50,
    borderRadius: 25,
    marginHorizontal: 6,
    flex: 1,
    borderWidth: 3,
    borderColor: theme.COLOR.WHITE,
  },
  icon: {
    maxWidth: 45,
    height: 45,
  },
  viewText: {
    flex: 6,
  },
  text: {
    fontSize: 22,
    color: '#565656',
  },
  viewRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageRight: {
    maxWidth: 10,
    height: 20,
  },
});
