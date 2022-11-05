import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import data from '../data/discussion.json';
import DiscussionItem from './DiscussionItem';

export default class Discussion extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tanya Dokter</Text>
        {data.map(m => {
          return <DiscussionItem key={m.id} data={m} />;
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
