import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

import {Actions} from 'react-native-router-flux';

export default class DiscussionItem extends Component<{}> {
  render() {
    const {title, question, sender, doctor, answer} = this.props.data;

    return (
      <>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.RBSheet.open()}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Text style={styles.initial}>{sender[0]}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.sender}>Oleh: {sender}</Text>
            <Text style={styles.doctor}>Dijawab: {doctor}</Text>
          </View>
        </TouchableOpacity>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={500}
          openDuration={250}
          customStyles={{
            container: {
              flex: 1,
              paddingTop: 48,
              paddingBottom: 48,
              paddingLeft: 24,
              paddingRight: 24,
            },
          }}>
          <ScrollView>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.avatarWrapper}>
                <View style={styles.avatar}>
                  <Text>{sender[0]}</Text>
                </View>
              </View>
              <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.sender}>Oleh: {sender}</Text>
                <Text style={styles.doctor}>Dijawab: {doctor}</Text>
                <Text style={styles.answer}>{answer}</Text>
              </View>
            </View>
          </ScrollView>
        </RBSheet>
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
    marginBottom: 8,
    fontWeight: '500',
  },
  sender: {
    fontSize: 14,
    color: '#000',
  },
  doctor: {
    fontSize: 14,
    color: '#000',
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: '#5cb04d',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  initial:{
    color: '#fff'
  },
  content: {
    paddingLeft: 12,
    flex: 1,
  },
  answer: {
    marginTop: 24,
    color: '#000',
  },
});
