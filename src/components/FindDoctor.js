import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import data from '../data/doctor.json';
import FindDoctorItem from './FindDoctorItem';

export default class FindDoctor extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cari Dokter</Text>
        {data.map(m => {
          return <FindDoctorItem key={m.id} data={m} />;
        })}
      </View>
    );
  }
}

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
