import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Avatar from '../items/Avatar';

const {width, height} = Dimensions.get('window');

const MemberVip = ({image, fontSize, name, textcolor}) => {
  return (
    <View style={styles.container}>
      <Avatar
        image={image}
        fontSize={fontSize}
        name={name}
        textcolor={textcolor}
      />
      <View style={styles.botlabel}>
        <Text style={styles.text}>VOCA VIP</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.36,
    height: height * 0.17,
    marginBottom: height * 0.024,
  },
  botlabel: {
    height: 0.036,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5CC0D',
    marginBottom: 0,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});

export default MemberVip;
