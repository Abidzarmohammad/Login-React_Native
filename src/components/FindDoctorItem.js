import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
  Linking,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import {Actions} from 'react-native-router-flux';

export default class FindDoctorItem extends Component<{}> {
  render() {
    const {id, name, specialization, phone, address} = this.props.data;
    const call = () => {
      const url = 'tel://' + phone;
      Linking.openURL(url);
    };

    return (
      <>
        <View style={styles.container}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Image
                style={{width: 70, height: 70}}
                source={require(`../images/doctor1.jpg`)}
              />
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
              {address} ({specialization})
            </Text>
            <Text style={styles.subtitle}>{phone}</Text>
            <View style={styles.call}>
              <Button title="Telepon" onPress={call}></Button>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 24,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 30,
    color: '#000',
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginBottom: 6,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 14,
    color: '#585858',
  },
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: '#f1f1f1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
  content: {
    paddingLeft: 26,
    flex: 1,
  },
  call: {
    width: 100,
    marginLeft: 'auto',
  },
});
