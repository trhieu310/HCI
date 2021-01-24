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
    flex: 1,
    height: height * 0.085,
    borderColor: '#D2D2D2',
    borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    width: width * 0.09,
    height: width * 0.09,
    padding: width * 0.024,
    borderRadius: 2,
  },
  text: {
    flex: 9,
    fontSize: 20,
    textAlign: 'left',
  },
});

export default PersionalButton;
