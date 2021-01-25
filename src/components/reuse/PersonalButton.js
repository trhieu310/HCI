import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';

const {height, width} = Dimensions.get('screen');

const PersionalButton = ({image, text}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.04,
    borderColor: '#D2D2D2',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#000',
  },
  image: {
    width: width * 0.05,
    height: width * 0.05,
    padding: width * 0.012,
    borderRadius: 2,
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
  },
});

export default PersionalButton;
