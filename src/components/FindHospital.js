import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {baseUrl} from '../utils/constant';
import FindHospitalItem from './FindHospitalItem';

const FindHospital = () => {
  const [hospitals, setHospitals] = useState([]);
  const [bmi, setBmi] = useState({});

  useEffect(() => {
    const url = `${baseUrl}/hospital-list`;
    axios.get(url).then(res => {
      setHospitals(res.data.hospitals);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cari Rumah Sakit {bmi.bmi}</Text>
      {hospitals.map(m => {
        return <FindHospitalItem key={m.id} data={m} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
  title: {
    fontSize: 22,
    color: '#000',
    marginBottom: 18,
    fontWeight: '700',
  },
});

export default FindHospital;
