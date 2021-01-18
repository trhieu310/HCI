import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

const {height} = Dimensions.get('window');

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Start')}>
          <Image
            source={require('../../Icons/back_img.png')}
            style={styles.backbtn}
          />
        </TouchableOpacity>
        <Text style={styles.name}>Đăng nhập</Text>
        <View />
      </View>
      <Button title="Go to Main" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop: 0,
    height: height * 0.09,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#232323',
  },
  backbtn: {
    height: 30,
    width: 30,
  },
  name: {
    fontSize: 24,
  },
});

export default Login;
