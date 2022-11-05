import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class OurServices extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Image
            style={styles.icon}
            source={require('../images/004-doctor-1.png')}
          />
          <Text style={styles.caption}>Diskusi Bersama Dokter</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.icon}
            source={require('../images/005-first-aid-kit.png')}
          />
          <Text style={styles.caption}>Info Kesehatan</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.icon}
            source={require('../images/001-hospital.png')}
          />
          <Text style={styles.caption}>Cari Rumah Sakit</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 24,
    marginBottom: 24
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    backgroundColor: '#f9f9f9',
    paddingTop: 12,
    paddingBottom: 12,
    paddingTop: 12,
    paddingTop: 12,
    borderRadius: 8
  },
  icon: {
    width: 30,
    height: 30,
  },
  caption: {
    color: '#000',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 12
  },
});
