import {ThemeProvider} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as theme from '../../constants/theme';
import narrow from '../../Icons/narrow_right.png';
import lockImage from '../../Icons/icon_key.png';

const VocabularyCard = (props) => {
  const {title, status} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.textTitle}>{title ? title : "LET'S GO"}</Text>
        <Text style={styles.textStatus}>
          {status ? 'Đang hoạt động' : 'Hết hạn'}
        </Text>
      </View>
      <View style={styles.viewImage}>
        <Image style={styles.image} source={status ? narrow : lockImage} />
      </View>
    </TouchableOpacity>
  );
};

export default VocabularyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 80,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderBottomColor: theme.COLOR.LIGHT_GRAY,
    borderWidth: 1,
    borderLeftColor: theme.COLOR.WHITE,
    borderRightColor: theme.COLOR.WHITE,
    borderTopColor: theme.COLOR.WHITE,
    justifyContent: 'center',
    marginVertical: 4,
    flexDirection: 'row',
  },
  viewText: {
    flex: 11,
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.COLOR.BLUE,
  },
  textStatus: {
    color: theme.COLOR.GRAY,
  },
  viewImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 10,
    height: 15,
  },
});
