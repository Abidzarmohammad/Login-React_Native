import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {baseUrl} from '../utils/constant';

const Bmi = () => {
  const [bmi, setBmi] = useState(null);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const checkBmi = () => {
    setShowResult(true);
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
      params: {weight: weight, height: height / 100},
      headers: {
        'X-RapidAPI-Key': '3494858769mshe97be43141522ecp10798ejsn6de9a944c01f',
        'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);

        const optionsCat = {
          method: 'GET',
          url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category',
          params: {bmi: response.data.bmi},
          headers: {
            'X-RapidAPI-Key':
              '3494858769mshe97be43141522ecp10798ejsn6de9a944c01f',
            'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
          },
        };

        axios
          .request(optionsCat)
          .then(function (response) {
            console.log(response.data);
            const res = response.data;
            res.bmi = Number((+res.bmi).toFixed(2));
            setBmi(res);
            setLoading(false);
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cek BMI</Text>

      <View>
        <View style={styles.containerForm}>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Tinggi"
            placeholderTextColor="#000000"
            selectionColor="#fff"
            keyboardType="email-address"
            value={height}
            keyboardType='numeric'
            onChangeText={value => setHeight(value)}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Berat"
            placeholderTextColor="#000000"
            selectionColor="#fff"
            keyboardType="email-address"
            value={weight}
            keyboardType='numeric'
            onChangeText={value => setWeight(value)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={checkBmi}>
          <Text style={styles.buttonText}>Cek</Text>
        </TouchableOpacity>
      </View>
      {showResult ? (
        <View style={styles.resultContainer}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 150,
              backgroundColor: '#f1f1f1',
              borderRadius: 150,
            }}>
            {loading ? (
              <ActivityIndicator size="large" />
            ) : (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#000', fontSize: 36, fontWeight: '700'}}>
                  {bmi.bmi}
                </Text>
                <Text style={{color: '#000', fontSize: 16}}>
                  {bmi.weightCategory}
                </Text>
              </View>
            )}
          </View>
        </View>
      ) : (
        <Text></Text>
      )}
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

  inputBox: {
    width: 300,
    backgroundColor: 'rgba(100, 100,100,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#000000',
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  containerForm: {
    flexDirection: 'row',
  },
  resultContainer: {
    color: '#000',
    padding: 24,
    alignItems: 'center',
  },
});

export default Bmi;
