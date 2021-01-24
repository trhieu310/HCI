/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const ClickButton = ({
  screen,
  image,
  text,
  width,
  height,
  radius,
  color,
  backgroundColor,
  fontSize,
}) => {
  return (
    <TouchableOpacity onPress={screen} style={styles.button}>
      <View
        borderRadius={radius}
        width={width}
        height={height}
        style={[styles.container, {backgroundColor: backgroundColor}]}>
        {image && (
          <View style={styles.viewIcon}>
            <Image source={image} style={styles.icon} />
          </View>
        )}
        <View style={styles.viewText}>
          <Text style={{fontSize: fontSize, color: color}}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: height * 0.01,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 8,
    flexDirection: 'row',
  },
  viewIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    maxWidth: 30,
  },
  viewText: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ClickButton;
