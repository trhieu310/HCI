import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
} from 'react-native';

const {height} = Dimensions.get('window');

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.line} />
        <View style={styles.header}>
          <View style={styles.backbtn}>
            <TouchableOpacity onPress={() => navigation.replace('Start')}>
              <Image source={require('../../Icons/back_img.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>Đăng nhập</Text>
          <Image />
        </View>
      </View>
      <View style={styles.body}>
        <Text>VOCA</Text>
        <Text>LEARN BY HEART</Text>
        <TextInput defaultValue="Email" style={styles.email} />
        <TextInput defaultValue="Mật khẩu" style={styles.passpass} />
      </View>
      <Button title="Go to Main" onPress={() => navigation.replace('Main')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 0,
    height: height * 0.09,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#00B2E5',
  },
  line: {
    height: 15,
    backgroundColor: '#209CE1',
  },
  backbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 20,
  },
  name: {
    color: '#ffffff',
    fontSize: 24,
  },
});

export default Login;
