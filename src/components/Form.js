import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {baseUrl} from '../utils/constant';
import axios from 'axios';

const Form = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = e => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = e => {
    setPassword(e.target.value);
  };

  const setLogin = async request => {
    try {
      await AsyncStorage.setItem('email', request.email);
    } catch (error) {}
  };

  const home = async e => {
    e.preventDefault();

    if (props.type === 'Login') {
      login(e);
    }else{
      register(e);
    }
  };

  const login = async e => {
    const request = {
      email,
      password,
    };

    const url = `${baseUrl}/login`;
    axios.post(url, request).then(async res => {
      if (res.data.login) {
        resetForm();
        await setLogin(request);
        Actions.main();
      } else {
        ToastAndroid.showWithGravity(
          'Email atau password salah',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    });
  };

  const register = async e => {
    const request = {
      email,
      password,
    };

    const url = `${baseUrl}/register`;
    axios.post(url, request).then(async res => {
      resetForm();
      ToastAndroid.showWithGravity(
        'Register Berhasil Silahkan kembali ke halaman login',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );

    });
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Email"
        placeholderTextColor="#000000"
        selectionColor="#fff"
        keyboardType="email-address"
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor="#000000"
        value={password}
        onChangeText={value => setPassword(value)}
      />
      <TouchableOpacity style={styles.button} onPress={home}>
        <Text style={styles.buttonText}>{props.type}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(100, 100,100,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000000',
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default Form;
