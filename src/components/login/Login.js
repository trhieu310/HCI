import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import InputText from '../reuse/inputText';
import TopNavigation from '../reuse/topNavigation';
import VOCA from '../reuse/voca';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TopNavigation
          navigation={navigation}
          screen={() => navigation.replace('Start')}
          name="Đăng nhập"
        />
      </View>
      <View style={styles.body}>
        <View>
          <VOCA />
          <InputText placeholder="Email" />
          <InputText placeholder="Password" />
          <View>
            <TouchableOpacity>
              <Image source={''} />
              <Text>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button title="Go to Main" onPress={() => navigation.replace('Main')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B2E5',
  },
  body: {
    alignItems: 'center',
  },
});

export default Login;
