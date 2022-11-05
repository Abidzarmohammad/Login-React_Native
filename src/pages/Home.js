import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
  AsyncStorage,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import Discussion from '../components/Discussion';
import FindHospital from '../components/FindHospital';
import FindDoctor from '../components/FindDoctor';
import HealthInfo from '../components/HealthInfo';
import OurServices from '../components/OurServices';
import Bmi from '../components/Bmi';

import {Actions} from 'react-native-router-flux';

const Home = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    _retrieveData();
  }, [_retrieveData]);

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('email');
      if (value !== null) {
        setEmail(value);
      }
    } catch (error) {}
  };

  const logout = () => {
    Actions.login();
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../images/bg.png')}
          style={styles.header}>
          <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang, </Text>
            <Text style={styles.username}>{email}</Text>
            <TouchableOpacity  onPress={logout}>
              <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <OurServices />
        <Discussion />
        <FindHospital />
        <FindDoctor />
        <HealthInfo />
        <Bmi />
      </ScrollView>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.21,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  hello: {
    marginTop: windowHeight * 0.03,
    color: '#fff',
  },
  selamat: {
    fontSize: 16,
    color: '#fff',
    marginTop: 32,
  },
  username: {
    fontSize: 22,
    color: '#fff',
  },
  logout: {
    marginTop: 12,
    fontSize: 16,
  },
});

export default Home;
